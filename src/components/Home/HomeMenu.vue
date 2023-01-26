<template>
  <v-card tile elevation="12" class="logoPosition">
    <header>
      <h1 class="positionIcon">
        <a href="/">
          <v-img
            width="120px"
            src="../../assets/images/sunswitchlogo.png"
          />
          <span class="sr-only">Sunswitch</span>
        </a>
      </h1>

      <!-- <div class="hidden-md-and-down">
        <v-btn text>SERVICES</v-btn>
        <v-btn text>PROJECTS</v-btn>
        <v-btn text>ABOUT US</v-btn>
      </div> -->

      <ul class="top-nav hidden-md-and-down">
        <li>
          <v-btn to="/signup" color="#FF7B00">Sign up</v-btn>
        </li>
        <li>
          <v-btn to="/login" color="#006838" class="white--text">Sign in</v-btn>
        </li>
      </ul>

      <nav class="hidden-lg-and-up">
        <div class="hidden-lg-and-up justify-end mt-2 mr-4">
          <v-btn icon x-large color="black" @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
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
              <!-- <v-list-item>
                <v-list-item-title>Services</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>About Us</v-list-item-title>
              </v-list-item> -->

              <v-list-item>
                <v-btn color="#f66c1f" to="/signup">Sign up</v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn color="#006838" class="white--text" to="/login">Sign in</v-btn>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </nav>
    </header>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-nav {
  display: flex;
  list-style: none;
  column-gap: 1rem;
}
</style>
