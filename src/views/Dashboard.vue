<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg=3 md=3 >
      <SideNav :url="url"/>
      </v-col>

      <v-col lg=8 md=8 class="mx-auto">
      <h1>Hi, {{user.firstName}}</h1>
      <p>The sun is up, the rest is up to you </p>
       <div class="dashboardCard"> 
        <div class="cardColumn">
          <v-card class="pa-7 gradient mb-7">
              <p class="white--text">Wallet Balance </p>
             <h2 class="walletBalance"> {{user.currency}} {{user.accountBalance}}</h2>
          </v-card>
        </div>
        <div class="cardColumn">
          <v-card class="pa-7" style="border-radius:10px" color="#199958">
              <p class="white--text">CAP POINTS </p>
             <h2 class="walletBalance d-flex justify-space-between">
                 <span>{{user.capPoint}}</span>
                 <span>CAPS</span>
                 </h2>
          </v-card>
          </div>
          </div>

          <div class="mt-7 d-flex overflow-x-auto">
              <v-btn color="#006838" class="mr-3 white--text radius6" x-large>
                  <v-icon>mdi-cash-minus</v-icon>
                  Withdraw
              </v-btn>

                <v-btn  color="#006838" class="mr-3 white--text radius6" x-large>
                    <v-icon>mdi-cash-plus</v-icon>
                  Deposit
              </v-btn>

               <v-btn color="#FF7B00" class="radius6" x-large>
                   <v-icon>mdi-sync</v-icon>
                  Refresh
              </v-btn>
        </div>

        <div class="mt-6">
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

export default {
    components:{
      SideNav,
      UserMenu
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
        }
    },
    computed:{
        ...mapState({
            user:"user"
        })
    },
    created(){
        this.$store.dispatch("fetchUser")
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