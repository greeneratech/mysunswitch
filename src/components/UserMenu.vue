<template>
  <v-card flat color="#E5E5E5">
    <div class="d-flex justify-space-between  ma-4 mx-9">
    <div>
    <div>
      <a href="/">
        <img height="69px"
          width="69px" src="../assets/images/Greenera_logo_svg.svg" />
        </a>
    </div>
    </div>
    <div class="hidden-md-and-down">
    <div class="d-flex justify-space-around">
    <div class="mt-3">
        <v-btn medium icon class="mr-8">
            <v-badge color="#C4C4C4" dot overlap>
            <v-icon>
            mdi-bell
            </v-icon>
            </v-badge>
            </v-btn>
    </div>

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
              @click="logOut"
              >
                <v-list-item-title>Log out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
          <v-list-item to="/dashboard">
             <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/profile">
               <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item to="/projects">
             <v-list-item-icon><v-icon>mdi-lightning-bolt-outline</v-icon></v-list-item-icon>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item to="/wallet">
             <v-list-item-icon><v-icon>mdi-cash</v-icon></v-list-item-icon>
            <v-list-item-title>Balance</v-list-item-title>
          </v-list-item>

           <v-list-item to="/history">
             <v-list-item-icon><v-icon>mdi-history</v-icon></v-list-item-icon>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


  </v-card>
</template>

<script>
export default {
  data(){
    return{
      drawer:false,
      group:null
    }
  },
  watch: {
      group () {
        this.drawer = false
      },
    },

methods:{
    logOut(){
    alert('how do you sleep when you lie to me?')
}
}

}
</script>

<style>

.accountBorder{
    border:solid 5px #C4C4C4
}



</style>