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
          <v-card height="180px" class="pa-7 gradient mb-5">
              <p class="white--text text-center">Wallet Balance ({{user.currency}}) </p>
             <h2 class="walletBalance text-center"> {{user.accountBalance}}</h2>
          </v-card>
          <v-card class="pa-7" height="140px" style="border-radius:10px" color="#199958">
              <p class="white--text text-center">CAP POINTS (CAPS)</p>
             <h2 class="walletBalance  text-center">
                 <span>{{user.capPoint}}</span>
                 </h2>
          </v-card>
          <div class="hidden-md-and-down">
           <div class="mt-7 d-flex">
              <v-btn @click="modal=true" color="white" style="color:#006838;width:50%" class="mr-3 radius6" x-large>
                  <v-icon class="mr-3">mdi-cash-plus</v-icon>
                 Deposit
              </v-btn>
           
                <v-btn style="width:50%" color="#006838" class="mr-3 white--text radius6" x-large>
                    <v-icon class="mr-3">mdi-cash-minus</v-icon>
                  Withdrawal
              </v-btn>
        </div>
        </div>


         <div class="hidden-lg-and-up mt-6">
            <v-card class="pa-6 py-6" style="border-radius:10px" elevation="4">
                <v-img src="../assets/images/homepage.png" />
                
            
                 <div class="mt-3">
                     <div>
                         <h2>
                             New Owerri Town
                         </h2>
                         <p>To be part of the ongoing project, kindly click the button below</p>
                    </div>
                    <v-btn color="#199958" block x-large class="white--text" style="border-radius:10px"><v-icon class="mr-5">mdi-account-cash-outline</v-icon> Buy solar cells</v-btn>
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

        <div class="hidden-lg-and-up mt-7">
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
        </div>


         </div>
         <div class="smallColumn hidden-md-and-down">
             <div>
            <v-card class="pa-6 py-6" style="border-radius:10px" elevation="4">
                <v-img src="../assets/images/homepage.png" />
                
            
                 <div class="mt-3">
                     <div>
                         <h2>
                             New Owerri Town
                         </h2>
                         <p>To be part of the ongoing project, kindly click the button below</p>
                    </div>
                    <v-btn color="#199958" block x-large class="white--text" style="border-radius:10px"><v-icon class="mr-5">mdi-account-cash-outline</v-icon> Buy solar cells</v-btn>
                 </div>

            </v-card>
        </div>


        <!-- My Models -->

        <v-dialog class="pa-3 mx-auto" max-width="400px" height="400px" v-model="modal">
            <Deposit />
        </v-dialog>







        </div>
         </div>
        </v-col>
        </v-row>
      </v-main>
    </v-app>
</template>





<script>
import SideNav from '../components/SideNav.vue'
import UserMenu from '../components/UserMenu.vue'
import {mapState} from "vuex"
import Deposit from "../components/Payments/Deposit.vue"

export default {
    components:{
      SideNav,
      UserMenu,
      Deposit
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
          modal:false

        }
    },
    computed:{
        ...mapState({
            user:"user"
        })
    },
    created(){
        this.$store.dispatch("fetchUser")
    },
    methods:{
       refresh(){
           alert('page refreshed')
           this.$store.dispatch("fetchUser")
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

</style>