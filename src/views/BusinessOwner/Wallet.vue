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
          <v-card class="cardHeight pa-7 gradient text-center">
              <p class="white--text walletValue">Wallet Balance </p>
             <h2 class="text-center balanceBalance"> {{user.currency}} {{user.accountBalance}}</h2>
             <p class="balanceName">{{user.firstName}} {{user.lastName}}</p>
                 <div class="buttonPadding">
           <div class="d-flex">
              <v-btn @click="modal=true" color="white" style="color:#006838;width:50%" class="mr-3 radius6" x-large>
                 
                 Deposit
              </v-btn>
           
                <v-btn style="width:50%" color="#199958" class="mr-3 white--text radius6" x-large>
                  Withdrawal
              </v-btn>
        </div>
        </div>
          </v-card>
        </div>
        <div class="dashboardCard">
            <div class="capColumn">
            <v-card class="capHeight pa-7 gradient">
              <p class="white--text capText">CAP POINTS </p>
             <h2 class="capValue"> {{user.capPoint}} <span style="float:right;color:white"> CAPS</span></h2>
          </v-card>
          </div>
          
        </div>
          </div>
        </v-col>
        </v-row>
      </v-main>


        <!-- My Models -->
        <v-dialog class="pa-3 mx-auto" max-width="400px" height="400px" v-model="modal">
            <Deposit />
        </v-dialog>




    </v-app>
</template>





<script>
import SideNav from '../../components/BusinessSideNav.vue'
import UserMenu from '../../components/BusinessNav.vue'
import {mapState} from "vuex"
import Deposit from "../../components/Payments/BusinessDeposit.vue"

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
        this.$store.dispatch("fetchBusinessUser")
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