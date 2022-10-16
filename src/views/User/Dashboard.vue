<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg=2 md=2 >
      <SideNav :url="url"/>
      </v-col>

      <v-col lg=9 md=9 class="mx-auto">
      <h1 style="color:#006838" class="text-h3 font-weight-bold">Hi, {{user.firstName}}</h1>
      <p>The sun is up, the rest is up to you </p>
       <div class="dashboardCard"> 
         <div class="dashboardColumn">
          <v-card height="230px" class="pa-7 gradient mb-5">
              <p class="mb-0 pb-0 white--text text-center">Wallet Balance ({{user.currency}}) </p>
             <h2 class="mt-0 pt-0 mb-3 walletBalance text-center"> {{user.accountBalance}}</h2>

             <div class="buttonPadding">
           <div class="d-flex">
              <v-btn @click="modal=true" color="white" style="color:#006838;width:50%" class="mr-3 radius6" x-large>
                 
                 Deposit
              </v-btn>
           
                <v-btn @click="withdraw = true" style="width:50%" color="#199958" class="mr-3 white--text radius6" x-large>
                  Withdrawal
              </v-btn>
        </div>
        </div>
          </v-card>
          <v-card class="pa-7" height="140px" style="border-radius:10px" color="#199958">
              <p class="white--text text-center">CAP POINTS (CAPS)</p>
             <h2 class="walletBalance  text-center">
                 <span>{{user.capPoint}}</span>
                 </h2>
          </v-card>
          


         <div class="hidden-lg-and-up mt-6">
            <v-card class="pa-6 py-6" style="border-radius:10px" elevation="4">
                <iframe v-if="projects" width="100%" height="250px" style="border-radius:20px;margin:0px auto 0px auto"  :src="projects[0].descriptionMediaLink">
                      </iframe>
                
            
                 <div class="mt-3">
                     <div>
                         <h2 v-if="projects">
                             {{projects[0].name}}
                         </h2>
                         <p>To be part of the ongoing project, kindly click the button below</p>
                    </div>
                    <v-btn @click="buyModal=true" color="#199958" block x-large class="white--text" style="border-radius:10px"><v-icon class="mr-5">mdi-account-cash-outline</v-icon> Buy solar cells</v-btn>
                 </div>

            </v-card>
        </div>

        <!-- <div class="mt-6">
            <v-card class="pa-6 py-10" style="border-radius:10px" elevation="4">
                 <p class="orangeText">Current Project </p>
                 <h1 style="color:#006838">{{projectName}}</h1>
                 <hr width="90%"/>
                 <div class="d-flex justify-space-between mt-3">
                     <div>
                         <p class="orangeText">Start Date</p>
                         <h2 class="greenDate">
                             {{startDate}}
                         </h2>
                    </div>
                     <div>
                         <p class="orangeText">End Date</p>
                         <h2 class="greenDate">
                             {{startDate}}
                         </h2>
                    </div>
                    <div>
                    </div>
                 </div>

            </v-card>
        </div> -->

        <!-- <div class="hidden-lg-and-up mt-7">
            <div class="mb-4">
              <v-btn @click="modal=true" color="white" block style="color:#006838" class="mr-3 radius6" x-large>
                  <v-icon class="mr-3">mdi-cash-plus</v-icon>
                 Deposit
              </v-btn>
              </div>
               
            <div>
                <v-btn  block color="#006838" class="mr-3 white--text radius6" x-large>
                    <v-icon class="mr-3">mdi-cash-minus</v-icon>
                  Withdrawal
              </v-btn>
            </div>
        </div> -->


         </div>
         <div class="smallColumn hidden-md-and-down">
             <div>
            <v-card class="pa-6 py-6" style="border-radius:10px" elevation="4">
                <iframe v-if="projects" width="100%" height="300px" style="border-radius:20px;margin:0px auto 0px auto"  :src="projects[0].descriptionMediaLink">
                      </iframe>
                
            
                 <div class="mt-3">
                     <div>
                         <h2 v-if="projects">
                             {{projects[0].name}}
                         </h2>
                         <p>To be part of the ongoing project, kindly click the button below</p>
                    </div>
                    <v-btn @click="buyModal=true" color="#199958" block x-large class="white--text" style="border-radius:10px"><v-icon class="mr-5">mdi-account-cash-outline</v-icon> Buy solar cells</v-btn>
                 </div>

            </v-card>
        </div>


        <!-- My Models -->

        <v-dialog class="pa-3 mx-auto" max-width="400px" height="400px" v-model="modal">
            <Deposit />
        </v-dialog>


          <v-dialog class="pa-3 mx-auto" max-width="400px" height="400px" v-model="withdraw">
            <Withdrawal />
        </v-dialog>

         <!-- My Models -->

        <v-dialog persistent fullscreen class="pa-2 mx-auto" max-width="400px" height="400px" v-model="buyModal">
          
            <v-card>
                    <div class="pa-9 d-flex justify-end">
                       <v-btn small fab @click="buyModal = false"><v-icon>mdi-close</v-icon></v-btn>
                    </div>
            <div class="centerBuySolar">
            <BuySolar :currency="user.currency" :price="price" :accountBalance="user.accountBalance" @closeModal="closeModal"/>
            </div>
            </v-card>
        </v-dialog>







        </div>
         </div>
        </v-col>
        </v-row>
      </v-main>
    </v-app>
</template>





<script>
import SideNav from '../../components/SideNav.vue'
import UserMenu from '../../components/UserMenu.vue'
import {mapState} from "vuex"
import Deposit from "../../components/Payments/Deposit.vue"
import BuySolar from "../../components/Payments/BuySolar.vue"
import Withdrawal from "../../components/Payments/Withdrawal.vue"

export default {
    components:{
      SideNav,
      UserMenu,
      Deposit,
      BuySolar,
      Withdrawal
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
          price:200,
          withdraw:false

        }
    },
    computed:{
        ...mapState({
            user:"user",
            projects:"projects"
        })
    },
    created(){
        this.$store.dispatch("fetchUserData",sessionStorage.getItem("token"))
         this.$store.dispatch("fetchProjects")
         console.log(sessionStorage.getItem("token"))

    },

    mounted(){
           if(sessionStorage.getItem("token") == null){
          this.$router.push("/login")
    }
    },
    methods:{
       refresh(){
           alert('page refreshed')
           this.$store.dispatch("fetchUser")
       },
       closeModal(){
           this.buyModal = false
       }
    }

}




</script>



<style>

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

@media screen and (max-width:900px){
    .centerBuySolar{
    width:90%;
    margin:auto
    }
}

@media screen and (min-width:1000px){
    .centerBuySolar{
    width:90%;
    margin:auto
    }
    .buttonPadding{
        padding:0px 60px
    }
}

</style>