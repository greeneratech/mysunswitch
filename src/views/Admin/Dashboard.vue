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
              <h2 style="color:white;background:#006838;padding:10px">Manage Users </h2>
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

          <div v-for="(user,i) in filteredUsers" :key="i">
            <v-card class="ma-5  pa-5 flexLarge rounded-xl">
              <v-avatar color="#E0E0E0" class="avatarSize">
                <img :src="user.photo" alt="">
              </v-avatar>
              <hr class="hideLine"  width="20%" style="margin-top:110px;-webkit-transform:rotate(90deg)"/>
              <div class="pt-12">
                <h2>{{user.firstName}} {{user.lastName}}</h2>
                <p>{{user.email}}</p>
                <v-chip class="white--text" :color='user.status==1?"#fa9746":"#008140"'>{{user.status==1?"Suspended":"Active"}} </v-chip>
                <div class="largeFlex mt-9">
                  <!-- <v-btn width="10px" class="mr-4" text><v-icon class="mr-2">mdi-eye-outline</v-icon>View</v-btn> -->
                   <v-btn @click="suspendUser(user)" text color="#FF7B00"><v-icon class="mr-2">mdi-dots-horizontal-circle-outline</v-icon>{{user.status==1?"unsuspend":"suspend"}}</v-btn>
                   <v-btn @click="areYouSure(user)" text color="#EB5757"><v-icon class="mr-2">mdi-delete-outline</v-icon>Delete</v-btn>
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
      <v-overlay v-if="suspendLoading" class="text-center">
        <v-progress-circular indeterminate :size="50"></v-progress-circular>
        <p>Loading...</p>
      </v-overlay>
      <v-dialog width="400px" v-model="dialog">
        <v-card height="190px" width="400px" class="pt-6 text-center pa-3 white--text" color="#006838">
          <h2> Delete {{singleUser.firstName}} </h2>
             <p>{{text}}</p>
        <v-btn :loading="deleteLoading" @click="deleteUser()">Yes</v-btn> 
        <v-btn @click="dialog=false" class="ml-3" outlined>No</v-btn>
        </v-card>
     
      </v-dialog>
    </v-app>

</template>





<script>
import SideNav from '../../components/AdminSideNav.vue'
import UserMenu from '../../components/AdminUserMenu.vue'
import {mapState} from "vuex"
import axios from "axios"

export default {
    components:{
      SideNav,
      UserMenu,
  
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
      singleUser:"",
      text:"",
      dialog:false,
      deleteLoading:false

        }
    },
    computed:{
        ...mapState({
            user:"user",
            users:"users"
        }),
         filteredUsers(){
      const searchUser = this.search.toLowerCase().trim();
      const users = this.users
      if (!users) return this.users;

      return this.users.filter(
        (user) => user.firstName.toLowerCase().indexOf(searchUser) > -1
      );
    },

   
    },
    created(){
        this.$store.dispatch("fetchUser")
        this.$store.dispatch("adminUsers")
    },

      mounted(){
           if(localStorage.getItem("token") == null){
          this.$router.push("/admin/login")
    }
    },
    methods:{
       refresh(){
           alert('page refreshed')
           this.$store.dispatch("fetchUserAdmin")
           this.$store.dispatch("adminUsers")
       },
       suspendUser(user){
         this.suspendLoading= true
         axios({
           method:"PUT",
           url:"https://greeneratech.herokuapp.com/api/admin/suspend/user/"+user.id,
            headers:{
              "Authorization":"Bearer "+localStorage.getItem("token")
            }
         }).then((response)=>{
          console.log(response)
          const status = response.data.data
           axios({
            method:"GET",
            url:"https://greeneratech.herokuapp.com/api/admin",
            headers:{
              "Authorization":"Bearer "+localStorage.getItem("token")
            }
           }).then((response)=>{
            console.log(response)
            sessionStorage.setItem("users",JSON.stringify(response.data.users))
             this.suspendLoading = false
             console.log(response.data.data)
           this.$swal({
              icon:"success",
              title:status+" successfully",
              text:user.firstName+ " has been " +status+ " successfully",
              type:"success",
              showConfirmButton:true,
           }).then((result)=>{
          if(result.isConfirmed){
            location.reload()
          }
        })
           })
         })
       },
       closeModal(){
           this.buyModal = false
       },
        sortByName(){
      this.$store.dispatch("sortByName")
    },
    areYouSure(user){
      this.dialog = true
      this.text = "Are you sure you want to delete "+ user.firstName +"?"
      this.singleUser = user
    },
    deleteUser(){
      this.deleteLoading = true
      axios({
        method:"DELETE",
        url:"https://greeneratech.herokuapp.com/api/admin/delete/user/"+this.singleUser.id,
        headers:{
              "Authorization":"Bearer "+localStorage.getItem("token")
            }
      }).then((response)=>{
        console.log(response)
        console.log(response)
           axios({
            method:"GET",
            url:"https://greeneratech.herokuapp.com/api/admin",
            headers:{
              "Authorization":"Bearer "+localStorage.getItem("token")
            }
           }).then((response)=>{
            console.log(response)
            sessionStorage.setItem("users",JSON.stringify(response.data.users))
            this.deleteLoading = false
            this.dialog = false
           this.$swal({
          text:"User has been deleted successfully",
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
      })
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