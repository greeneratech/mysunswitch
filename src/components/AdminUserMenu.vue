<template>
  <v-card flat color="#E5E5E5">
    <div class="d-flex justify-space-between  ma-4 mx-9">
    <div>
    <div>
      <a href="/admin/dashboard">
        <img height="69px"
          width="69px" src="../assets/images/Greenera_logo_svg.svg" />
        </a>
    </div>
    </div>
    <div class="hidden-md-and-down">
    <div class="d-flex justify-space-around">
        <div class="ma-4"><p>Welcome, <router-link style="text-decoration:none;color:#FF7B00" to="/profile">Admin ABC</router-link></p></div>
    <div>
        <v-btn medium class="accountBorder" elevation="1" fab><v-icon color="#C4C4C4">mdi-account</v-icon></v-btn>
        <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="#C4C4C4">mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
              to="/dashboard"
              >
                <v-list-item-title>Go to User</v-list-item-title>
              </v-list-item>
              <v-list-item
              @click="logOut"
              >
                <v-list-item-title>Log out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </div>




    <div class="mt-3">
        <v-btn medium icon class="mr-8">
            <v-badge color="#C4C4C4" dot overlap>
            <v-icon>
            mdi-bell
            </v-icon>
            </v-badge>
            </v-btn>
    </div>


    </div>
    </div>
    <div class="hidden-lg-and-up justify-end mt-2">
    <v-btn icon x-large color="black" @click="drawer =! drawer"><v-icon>mdi-menu</v-icon></v-btn>
    </div>
    </div>

     <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >
          <v-list-item to="/admin/dashboard">
             <v-list-item-icon><v-icon>mdi-account-cog</v-icon></v-list-item-icon>
            <v-list-item-title>Manage Users</v-list-item-title>
          </v-list-item>

          <v-list-item to="/admin/projects">
               <v-list-item-icon><v-icon>mdi-lightning-bolt</v-icon></v-list-item-icon>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item to="/admin/payments">
             <v-list-item-icon><v-icon>mdi-cash</v-icon></v-list-item-icon>
            <v-list-item-title>View Payments</v-list-item-title>
          </v-list-item>

          <v-list-item to="/admin/faqs">
             <v-list-item-icon><v-icon>mdi-frequently-asked-questions</v-icon></v-list-item-icon>
            <v-list-item-title>Manage FAQs</v-list-item-title>
          </v-list-item>

          <v-list-item to="/admin/disclaimers">
             <v-list-item-icon><v-icon>mdi-file-table-box-multiple-outline</v-icon></v-list-item-icon>
            <v-list-item-title>Manage Disclaimers</v-list-item-title>
          </v-list-item>

            <v-list-item to="/admin/t-and-c">
             <v-list-item-icon><v-icon>mdi-file-cog-outline</v-icon></v-list-item-icon>
            <v-list-item-title>Manage T & C's</v-list-item-title>
          </v-list-item>

            <v-list-item to="/admin/team">
             <v-list-item-icon><v-icon>mdi-account-multiple-plus-outline</v-icon></v-list-item-icon>
            <v-list-item-title>Update Team Details</v-list-item-title>
          </v-list-item>

           <v-list-item to="/admin/bank">
             <v-list-item-icon><v-icon>mdi-cash-multiple</v-icon></v-list-item-icon>
            <v-list-item-title>Manage Bank Account</v-list-item-title>
          </v-list-item>

           <v-list-item @click="logOut">
             <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-overlay :value="loading" absolute>
      <v-progress-circular indeterminate></v-progress-circular>
    </v-overlay>


  </v-card>
</template>

<script>
import axios from 'axios'


export default {
  data(){
    return{
      drawer:false,
      group:null,
      loading:false
    }
  },
  watch: {
      group () {
        this.drawer = false
      },
    },

methods:{
    logOut(){
      this.loading = true
    axios({
      method:"POST",
      url:"https://greeneratech.herokuapp.com/api/authenticate/signout",
      data:{
        token:localStorage.getItem("token")
      },
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    }).then(()=>{
      localStorage.removeItem("token")
      this.$router.push("/login")
      sessionStorage.removeItem("vuex")
      this.loading = false

    }) .catch(()=>{
       localStorage.removeItem("token")
      this.$router.push("/login")
      sessionStorage.removeItem("vuex")
      this.loading = false
    })
}
}

}
</script>

<style>

.accountBorder{
    border:solid 5px #C4C4C4
}



</style>