<template>
  <v-card flat color="#E5E5E5">
    <div class="d-flex justify-space-between  ma-4 mx-9">
    <div>
    <div>
      <a href="/">
        <img src="../assets/images/Rectangle (3).png" />
        </a>
    </div>
    </div>
    <div class="hidden-md-and-down">
    <div class="d-flex justify-center mt-5">
    <div>
        <v-btn text>SERVICES</v-btn>
    </div>

    <div>
        <v-btn text>PROJECTS</v-btn>
    </div>

    <div>
        <v-btn text>ABOUT US</v-btn>
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
          <v-list-item>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>About Us</v-list-item-title>
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

}
</script>

<style>

</style>