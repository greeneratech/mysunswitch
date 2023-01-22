<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg=3 md=3 >
      <SideNav :url="url"/>
      </v-col>

      <v-col lg=8 md=8 class="mx-auto">
          <v-card class="rounded-lg pb-7">
              <h2 style="color:white;background:#006838;padding:10px">Payments </h2>
              <div class="d-flex pa-5">
              <v-text-field v-model="search" label="Search by email" color="#006838" class="rounded-xl" outlined prepend-inner-icon="mdi-magnify"/>
              <v-btn text class="mt-2"><v-icon>mdi-filter</v-icon>Sort by</v-btn>
              <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field  v-bind="attrs"
          v-on="on" color="#006838" outlined readonly class="rounded-xl" append-icon="mdi-dots-vertical"/>
      </template>

      <v-list>
          <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title @click="sortByEmail">{{ item.title }}</v-list-item-title>
        </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-menu>
              </div>

          <div v-for="(payment,i) in filteredPayments" :key="i">
            <v-card class="ma-5  pa-5 flexLarge rounded-xl">
              <div class="py-6" style="width:100%">
                <div class="pa-0 ma-0 flexLarge justify-space-between"> 
                    <div>
                    <p class="pa-0 ma-0" v-if="payment.user">{{payment.user.email}} | {{payment.user.phoneNumber}}</p>
                    <p :style="`color:${payment.transaction.type =='WITHDRAW'? '#FF7B00':'#006838'}`" class="pa-0 ma-0 projectDescription">{{payment.transaction.type.toLowerCase()}}</p>

                        </div>
                       
                    <div class="mr-2">
                        <p class="pa-0 ma-0">{{payment.transaction.created_at.slice(0,10)}}</p>
                        <p class="pa-0 ma-0 font-weight-bold">NGN {{payment.transaction.baseAmount}}</p>

                        </div>
                </div>
              </div>
            </v-card>
          </div>
       

          </v-card>
          <div class="mt-5 text-right">
            <v-btn x-large class="rounded-lg black--text" color="white" @click="refresh"><v-icon class="mr-6">mdi-refresh</v-icon>Refresh</v-btn>
          </div>
        </v-col>
        </v-row>
      </v-main>
      <v-overlay v-if="loading" class="text-center">
        <v-progress-circular indeterminate :size="50"></v-progress-circular>
        <p>Loading...</p>
      </v-overlay>
       <v-dialog width="400px" v-model="dialog">
        <v-card height="190px" width="400px" class="pt-6 text-center pa-3 white--text" color="#006838">
          <h2> Delete {{singleProject.firstName}} </h2>
             <p>{{text}}</p>
        <v-btn :loading="deleteLoading" @click="deleteProject()">Yes</v-btn> 
        <v-btn @click="dialog=false" class="ml-3" outlined>No</v-btn>
        </v-card>
      </v-dialog>

      <v-dialog fullscreen v-model="projectView">
        <ViewProject @editSingleProject="editSingleProject" :singleProject="singleProject" @closeView="closeView"/>
      </v-dialog>

      <v-dialog fullscreen v-model="projectEdit">
        <EditProject :singleProject="singleProject" @closeModal="closeModal"/>
      </v-dialog>


    </v-app>
</template>

<script>
import SideNav from '../../components/AdminSideNav.vue'
import UserMenu from '../../components/AdminUserMenu.vue'
import EditProject from "../../components/EditProject.vue"
import ViewProject from "../../components/ViewProject.vue"
import {mapState} from "vuex"
import axios from "axios"
import { apiHeaders, apiURL } from '../../configs'

export default {
    components:{
      SideNav,
      UserMenu,
      EditProject,
      ViewProject
  
    },
    data(){
        return{
           walletBalance:0,
           url:window.location.pathname.slice(1),
           capBalance:0,
           projectName:"Power Up Eziobodo",
           startDate:"17/05/2021",
           endDate:"17/06/2021",
           drawer: false,
          mini: false,
          modal:false,
          buyModal:false,
          usage:60,
          items: [
        { title: 'By Email' },
        { title: 'By recent activities' },
      ],
      suspendLoading:false,
      search:"",
      singleProject:"",
      deleteLoading:false,
      text:"",
      dialog:false,
      projectView:false,
      projectEdit:false

        }
    },
    computed:{
        ...mapState({
            user:"user",
            users:"users",
            allProjects:"allProjects",
            payments:"payments",
            loading:"paymentLoading"
        }),

        filteredPayments(){
       return this.payments
    },
    },
    created(){
        this.$store.dispatch("fetchUser")
        this.$store.dispatch("adminUsers")
        this.$store.dispatch("fetchPayments")
    },

    mounted(){
       if(sessionStorage.getItem('token') == null){
          this.$router.push('/admin/login')
        }
    },
    methods:{
        sortByEmail(){
            console.log("sort by email")
            this.$store.dispatch("sortByEmail")
        },
       refresh(){
           this.$store.dispatch("fetchUser")
           this.$store.dispatch("fetchPayments")
           alert('page refreshed')
       },
       areYouSure(project){
         this.singleProject = project
          this.dialog = true
          this.text = "Are you sure you want to delete "+project.name+"?"
       },

       editProject(project){
         this.projectEdit = true
         this.singleProject = project
       },

       viewProject(project){
         this.projectView = true
         this.singleProject = project
       },

       deleteProject(){
          this.deleteLoading = true
          axios({
            method:"DELETE",
            url: apiURL("admin/investments/delete/"+this.singleProject.id),
            headers: apiHeaders.contentTypeAndAuth(),
          })
          .then(res=>{
            console.log(res)
            this.deleteLoading = false
            this.dialog = false
            this.$store.dispatch("fetchAllProjects")
            this.$swal({
              title: "Deleted!",
              text: "Project has been deleted successfully",
              icon: "success",
              button: "Ok",
            })
          }).catch((error)=>{
            this.deleteLoading = false
            this.dialog = false
            this.$swal({
              title: "Error!",
              text: error.message,
              icon: "error",
              button: "Ok",
            })
          })   
        },

       closeModal(){
           this.projectEdit = false
       },
       closeView(){
         this.projectView = false
       },

       editSingleProject(){
         this.projectEdit = true
         this.projectView = false
       }
    }

}




</script>



<style>
@media screen and (min-width:1000px){
.businessCapValue{
    font-size:48px;
}
.gradient{
    background: linear-gradient(101.06deg, #27AE60 1.67%, #006838 93.52%);
    border-radius:10px !important
}

.walletBalance{
    font-size:36px;
    color:white
}

.radius6{
    border-radius:6px
}
.orangeText{
    color:#FF7B00 !important;
    font-size:18px !important;
    margin:0px !important;
    padding:0px !important
}
.greenDate{
    color:#006838 !important;
    font-size:23px !important;
    margin:0px !important;
    padding:0px !important
}

.v-navigation-drawer{
    border:40px !important
}
.centerBuySolar{
    width:35%;
    margin:auto
}

.projectImage{

  border-radius:10px;
  height:300px !important;
  width:100% !important
}
.projectDescription{
    width:70%
}
.flexLarge{
  display:flex
}
}

@media screen and (max-width:900px){
    .centerBuySolar{
    width:90%;
    margin:auto
    }

    .hideLine{
        display:none
    }

  .projectImage{

  border-radius:10px;
  height:120px !important;
  width:100% !important
}
}

</style>