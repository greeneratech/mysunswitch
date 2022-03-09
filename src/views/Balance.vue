<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg=2 md=2 >
      <SideNav :url="url"/>
      </v-col>

      <v-col lg=9 md=9 class="mx-auto">
      <h1>Balance</h1>
       <div > 
        <div class="rightSpace">
          <v-card class="cardHeight py-7 gradient text-center">
              <p class="white--text walletValue">Wallet Balance </p>
             <h2 class="text-center balanceBalance"> {{user.currency}} {{user.accountBalance}}</h2>
             <p class="balanceName">{{user.firstName}} {{user.lastName}}</p>
          </v-card>
        </div>
        <div class="dashboardCard">
            <div class="capColumn">
            <v-card class="capHeight pa-7 gradient">
              <p class="white--text capText">CAP POINTS </p>
             <h2 class="capValue"> {{user.accountBalance}} <span style="float:right;color:white"> CAPS</span></h2>
          </v-card>
          </div>
          <div class="moneyColumn">
            <v-btn block x-large height="64px" elevation=5 color="white mb-5" style="color:#199958;border-radius:12px"><v-icon>mdi-cash</v-icon> Deposit</v-btn>
            <v-btn block x-large height="64px"  elevation=5 class="gradient" style="color:white;border-radius:12px"><v-icon>mdi-cash</v-icon> Withdraw</v-btn>
          </div>
          
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