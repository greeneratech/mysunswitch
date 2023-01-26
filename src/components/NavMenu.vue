<template>
  <v-card flat color="#E5E5E5">
    <header>
      <h1>
        <a href="/">
          <img width="120px" src="../assets/images/sunswitchlogo.png" />
          <span class="sr-only">Sunswitch</span>
        </a>
      </h1>

      <v-btn to="/login" color="#006838" class="ml-3 white--text">Sign in</v-btn>
    </header>
  </v-card>
</template>

<style scoped>
header {
  padding: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  justify-content: space-between;
}
</style>
