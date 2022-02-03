<template>
    <v-app>
        <NavMenu/>
        <v-main class="text-center">
            <v-img width="300px" height="307px" style="margin:10% auto auto auto;" src="../assets/images/cuate.png"/>
            <h1>Page Unavailable </h1>
            <v-btn to="/">Go Home</v-btn>
        </v-main>
    </v-app>
</template>




<script>
import NavMenu from "../components/NavMenu.vue"

export default{
   components:{
       NavMenu
   }
}
</script>
