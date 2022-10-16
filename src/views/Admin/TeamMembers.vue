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
              <h2 style="color:white;background:#006838;padding:10px">Team Members </h2>
              <div class="d-flex pa-5">
              <v-text-field label="Search" v-model="search" color="#006838" class="rounded-xl" outlined prepend-inner-icon="mdi-magnify"/>
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
          <v-list-item-title @click="sortByName">{{ item.title }}</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
              </div>

          <div v-for="(user,i) in filteredTeam" :key="i">
            <v-card class="ma-5  pa-5 flexLarge rounded-xl">
              <v-avatar color="#E0E0E0" class="avatarSize">
                <img :src="user.photo" alt="">
              </v-avatar>
              <hr class="hideLine"  width="20%" style="margin-top:110px;-webkit-transform:rotate(90deg)"/>
              <div class="pt-12">
                <h2>{{user.firstName}} {{user.lastName}}</h2>
                <p>{{user.email}}</p>
                <p>{{user.position}}</p>
                
                 <div>
                  <v-btn @click="editTeam(user)" small text><v-icon small>mdi-pencil</v-icon>Edit </v-btn>
                   <v-btn @click="areYouSure(user)" small text color="#EB5757"><v-icon small>mdi-delete-outline</v-icon>Delete</v-btn>
              </div>
              </div>

             
              
            </v-card>
          </div>

          <div class="text-right pa-3">
            <v-btn @click="addteam  = true" large color="#199958" class="white--text rounded-lg"><v-icon>mdi-plus</v-icon>Add Team Member</v-btn>
          </div>

          <v-dialog fullscreen v-model="addteam">
      <AddTeam @closeTeam="closeTeam"/>
    </v-dialog>

    <v-dialog fullscreen v-model="editteam">
      <EditTeam :singleTeam="singleTeam" @closeTeam="closeTeam" />
    </v-dialog>




          </v-card>
          <div class="mt-5 text-right">
            <v-btn x-large class="rounded-lg black--text" color="white" @click="refresh"><v-icon class="mr-6">mdi-refresh</v-icon>Refresh</v-btn>
          </div>
        </v-col>
        </v-row>
      </v-main>
      <v-overlay v-if="teamLoading" class="text-center">
        <v-progress-circular indeterminate :size="50"></v-progress-circular>
        <p>Loading...</p>
      </v-overlay>
      <v-dialog width="400px" v-model="dialog">
        <v-card height="190px" width="400px" class="pt-6 text-center pa-3 white--text" color="#006838">
          <h2> Delete {{singleTeam.name}} </h2>
             <p>{{text}}</p>
        <v-btn :loading="deleteLoading" @click="deleteTeam()">Yes</v-btn> 
        <v-btn @click="dialog=false" class="ml-3" outlined>No</v-btn>
        </v-card>
     
      </v-dialog>
    </v-app>

</template>





<script>
import SideNav from '../../components/AdminSideNav.vue'
import UserMenu from '../../components/AdminUserMenu.vue'
import AddTeam from "../../components/AddTeam.vue"
import EditTeam from "../../components/EditTeam.vue"
import {mapState} from "vuex"
import axios from "axios"

export default {
    components:{
      SideNav,
      UserMenu,
      AddTeam,
      EditTeam
  
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
        { title: 'By Name' },
        { title: 'By recent activities' },
      ],
      suspendLoading:false,
      search:"",
      singleTeam:"",
      text:"",
      dialog:false,
      deleteLoading:false,
      addteam:false,
      editteam:false

        }
    },
    computed:{
        ...mapState({
            user:"user",
            users:"users",
            team:"team",
            teamLoading:"teamLoading"
        }),

      filteredTeam(){
      const searchTeam = this.search.toLowerCase().trim();
      const team = this.team
      if (!team) return this.team;

      return this.team.filter(
        (user) => user.name.toLowerCase().indexOf(searchTeam) > -1
      );
    },

   
    },
    created(){
        this.$store.dispatch("fetchUser")
        this.$store.dispatch("adminUsers")
        this.$store.dispatch("fetchTeam")
         if(sessionStorage.getItem('token') == null){
          this.$router.push('/admin/login')
        }
    },
    methods:{
       refresh(){
           alert('page refreshed')
           this.$store.dispatch("fetchUser")
           this.$store.dispatch("adminUsers")
       },
       suspendUser(user){
         this.suspendLoading= true
         axios({
           method:"PUT",
           url:"https://greeneratech.herokuapp.com/api/admin/suspend/user/"+user.id,
            headers:{
              "Authorization":"Bearer "+sessionStorage.getItem("token")
            }
         }).then((response)=>{
           console.log(response)
           this.suspendLoading = false
           this.$swal({
              icon:"success",
              title:"User Suspended",
              text:user.firstName+ " has been suspended successfully",
              type:"success",
              showConfirmButton:true,
           })
         })
       },
       closeModal(){
           this.buyModal = false
       },
        sortByName(){
      this.$store.dispatch("sortByName")
    },

    editTeam(user){
      this.singleTeam = user
      this.editteam = true
    },

    areYouSure(team){
      this.dialog = true
      this.text = "Are you sure you want to delete "+ team.name +"?"
      this.singleTeam= team
    },
    deleteTeam(){
      this.deleteLoading = true
      axios({
        method:"DELETE",
        url:"https://greeneratech.herokuapp.com/api/admin/team/delete/"+this.singleTeam.id,
        headers:{
              "Authorization":"Bearer "+sessionStorage.getItem("token")
            }
      }).then((response)=>{
        console.log(response)
        this.deleteLoading = false
        this.dialog = false
        this.$swal({
          text:"Team member has been deleted successfully",
          title:"Success",
          icon:"success",
          type:"success",
          showConfirmButton:true,
        }).then((result)=>{
          if(result.isConfirmed){
            location.reload()
          }
        })
      })

    },

    closeTeam(){
      this.addteam = false
      this.editteam = false
    },
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

.avatarSize{
  height:215px !important;
  width:215px !important
}
}

@media screen and (max-width:900px){
    .centerBuySolar{
    width:90%;
    margin:auto
    }

  .avatarSize{
  margin:50px auto 0px auto;
  height:100px !important;
  width:100px !important
}
}

</style>