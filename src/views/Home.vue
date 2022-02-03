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



<style>


@media screen and (min-width: 993px) {
  .loginCard{
    display:flex
  }
  .logoPosition {
    padding: 30px 40px 20px 60px;
  }
  .headingText{
    font-size:64px;
    color:white;
    width:80%
  }
  .imageContainer{
    padding:79px;
    position:absolute;
    top:5%;
    width:90%;
    margin:auto
  }
  .imageContainer p{
    font-size:24px
  }
   .dashboard{
    width:50%
  }
  .sunshine{
    color:#FF7B00;
    font-weight:800;
    padding:30px 90px 0px 90px;
    line-height:80px;
    font-size:55px;
    width:70%;
    margin:0px auto 0px auto;
  }
   .buySolar{
    font-size:20px;
    width:50%;
    margin:auto auto 40px auto
  }

   .welcomeBack{
    font-size:64px
  }

  .statistics{
    margin-top:180px;
    width:50%;
    margin:auto;
    margin:auto;
    display:flex;
    justify-content: space-between;
  }
  .statCircle{
    height:170px;
    width:170px;
  }
}

@media screen and (max-width: 992px) {

  .logoPosition {
    padding: 20px;
  }
  .headingText{
    font-size:50px;
    color:white;
  }
  .imageContainer{
    padding:90px 38px 30px 38px;
    width:80%
  }
   .imageContainer p{
    font-size:20px
  }
  .dashboard{
    width:80%
  }
  .sunshine{
    color:#FF7B00;
    font-weight:800;
    font-size:47px;
    width:80%;
     margin:-100px auto 0px auto;
  }
  .buySolar{
    font-size:20px;
    width:80%;
    margin:auto auto 40px auto
  }
  .statistics{
    margin-top:180px;
    width:80%;
    margin:auto;
    display:flex;
    justify-content: space-between;
  }
   .statCircle{
    height:170px;
    width:170px;
  }
  .noSide{
    display:block
  }
}


/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .logoPosition {
    padding:20px !important
  }
  .headingText{
    font-size:50px;
    color:white;
  }
  .imageContainer{
    padding:90px 0px 30px 30px;
  }
 .imageContainer p{
    font-size:20px
  }
  .dashboard{
    width:90%
  }

   .welcomeBack{
    font-size:30px
  }

  .sunshine{
    color:#FF7B00;
    font-weight:800;
    font-size:40px;
    width:100%;
    padding:20px;
    margin:0px auto 0px auto;
  }
  .buySolar{
    font-size:20px;
    width:80%;
    margin:auto auto 40px auto
  }

    .statistics{
    margin-top:180px;
    width:80%;
    margin:auto;
  }

}

@media screen and (max-width: 378px) {
   .headingText{
    font-size:40px;
    color:white;
  }
  .hideLine{
    display:none
  }
  .welcomeBack{
    font-size:30px
  }

   .statistics{
    margin-top:180px;
    width:80%;
    margin:auto;
    display:block
  }

  .statCircle{
   margin:auto
  }

}


@media screen and (max-width: 252px) {
   .headingText{
    font-size:35px;
    color:white;
  }
}

</style>