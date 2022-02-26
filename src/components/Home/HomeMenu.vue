<template>
  <v-card tile elevation="12" class="logoPosition">
    <div class="d-flex justify-space-between">
      <div>
        <a href="/">
        <v-img
          style="margin-left:14.6px"
          height="69px"
          width="69px"
          src="../../assets/images/Greenera_logo_svg.svg"
        />
        </a>
      </div>
      <div class="mt-3 hidden-md-and-down">
        <v-btn text>SERVICES</v-btn>
        <v-btn text>PROJECTS</v-btn>
        <v-btn text>ABOUT US</v-btn>
      </div>

      <div
        class="mt-3 hidden-md-and-down"
        style="margin-right: 48px; margin-top: 10px"
      >
        <v-btn to="/signup" color="#FF7B00">Sign up</v-btn>
        <v-btn to="/login" color="#006838" class="ml-3 white--text"
          >Sign in</v-btn
        >
      </div>
      <div class="hidden-lg-and-up justify-end mt-2 mr-4">
        <v-btn icon x-large color="black" @click="drawer = !drawer"
          ><v-icon>mdi-menu</v-icon></v-btn
        >
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
          active-class="deep-green--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-btn color="#f66c1f" to="/signup">Sign up</v-btn>
          </v-list-item>
            <v-list-item>
            <v-btn color="#006838" class="white--text" to="/login">Sign in</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
  </v-card>
</template>


<script>

export default{
  data(){
    return{
      drawer:false,
      group:null
    }
  }
}
</script>


