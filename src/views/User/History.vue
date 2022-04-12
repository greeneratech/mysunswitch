<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg=2 md=2 >
      <SideNav :url="url"/>
      </v-col>

      <v-col lg=9 md=9 class="mx-auto">
      <h1 class="d-flex justify-space-between">
            <span>History</span>
            <v-btn @click="$router.go(-1)" text
              ><v-icon>mdi-arrow-left</v-icon>Back</v-btn
            >
          </h1>
       <div> 
           <v-card style="border-radius:10px">

               <!--Web view -->

                <v-simple-table class="hidden-md-and-down">
    <template v-slot:default>
      <thead>
        <tr>
          <th style="font-size:17px;font-weight:bold;color:black" class="text-left">
           DATE/TIME
          </th>
          <th style="font-size:17px;font-weight:bold;color:black" class="text-left">
            TRANSACTION TYPE
          </th>
          <th style="font-size:17px;font-weight:bold;color:black" class="text-left">
            AMOUNT
          </th>

          <th style="font-size:17px;font-weight:bold;color:black" class="text-left">
            STATUS
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,i) in transactions"
          :key="i"
        >
          <td>{{item.created_at.slice(0,10)}} {{ item.created_at.slice(11,16) }}</td>
          <td>{{ item.type }}</td>
           <td>{{item.baseCurrency}} {{item.baseAmount}}</td>
           <td>
               <v-btn width="120px" depressed class="white--text" :color="item.status == 'PENDING' ? '#FF7B00':'#006838'">{{item.status}}</v-btn>
               </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>





               <!--Mobile view -->
               <div class="hidden-lg-and-up">
                   <div class="pa-4">
                       <div v-for="(transaction,i) in transactions" :key="i">
                           <div class="pa-2 py-4">
                           <div class="d-flex justify-space-between">
                              <div class="font-weight-medium">
                              <span>{{transaction.created_at.slice(0,10)}}</span> <span>{{transaction.created_at.slice(11,16)}}</span>
                              </div>
                              <div class="font-weight-bold">
                                  {{transaction.baseCurrency}} {{transaction.baseAmount}}
                              </div>
                              </div>
                              <div class="d-flex mt-6 justify-space-between">
                                  <div style="font-size:15px; width:60%">
                                  {{transaction.type}}
                                  </div>

                                  <div>
                                      <v-btn depressed class="white--text" :color="transaction.status == 'PENDING' ? '#FF7B00':'#006838'">{{transaction.status}}</v-btn>
                                  </div>
                              </div>
                              </div>
                              <div class="mt-2">
                              <hr/>
                              </div>
                       </div>
                   </div>
                   <div class="mt-6" style="float:right">
                   <v-btn depressed style="border-radius:10px" color="#F2F2F2" class="mr-4" large><v-icon>mdi-arrow-left</v-icon>Previous</v-btn>
                   <v-btn depressed style="border-radius:10px" color="#F2F2F2" large>Next<v-icon>mdi-arrow-right</v-icon></v-btn>
                   </div>





               </div>
            </v-card>
       
        
          </div>
        </v-col>
        </v-row>
         <v-overlay :value="loading">
        <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
      </v-overlay>
      </v-main>
    </v-app>
</template>





<script>
import SideNav from '../../components/SideNav.vue'
import UserMenu from '../../components/UserMenu.vue'
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
        // transactions:[
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"OBINZE Crowdsale Funding",status:"pending"},
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"Withdrawal",status:"completed"},
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"Deposit",status:"completed"},
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"OBINZE Crowdsale Funding",status:"completed"},
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"OBINZE Crowdsale Funding",status:"completed"},
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"OBINZE Crowdsale Funding",status:"completed"},
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"OBINZE Crowdsale Funding",status:"completed"},
        //     {date:"10/02/23",time:"14:23",price:"NGN 5600",name:"OBINZE Crowdsale Funding",status:"completed"},

        // ]
        }
    },
    computed:{
        ...mapState({
            user:"user",
            transactions:"history",
            loading:"loading"
        }),
     

        historyData(){
          return this.transactions
        }
    },
    created(){
        this.$store.dispatch("fetchUser")
        this.$store.dispatch("fetchHistory")
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