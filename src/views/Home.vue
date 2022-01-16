<template>
   <v-app>
     <HomeMenu />
     <ImageComponent />
     <Cta />
     <Projects />
     <Email />
     <Footer />
     </v-app>
</template>



<script>
import HomeMenu from '../components/Home/HomeMenu.vue'
import ImageComponent from "../components/Home/ImageComponent.vue"
import Cta from "../components/Home/Cta.vue"
import Projects from "../components/Home/Projects.vue"
import Email from "../components/Home/Email.vue"
import Footer from "../components/Home/Footer.vue"

export default {
  name: 'Home',
  components: {
    HomeMenu,
    ImageComponent,
    Cta,
    Projects,
    Email,
    Footer
  }
}
</script>
