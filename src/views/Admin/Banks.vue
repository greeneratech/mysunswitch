<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg=3 md=3 >
      <SideNav :url="url"/>
      </v-col>

      <v-col lg=8 md=8 class="mx-auto">
          <v-card class="rounded-lg pb-7">
              <h2 style="color:white;background:#006838;padding:10px">Manage Bank Accounts </h2>
              <div class="d-flex pa-5">
              <v-text-field label="Search" v-model="search" color="#006838" class="rounded-xl" outlined prepend-inner-icon="mdi-magnify"/>
              <v-btn text class="mt-2"><v-icon>mdi-filter</v-icon>Sort by</v-btn>
              <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field  v-bind="attrs"
          v-on="on" color="#006838" outlined readonly class="rounded-xl" append-icon="mdi-dots-vertical"/>
      </template>

      <v-list>
        <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title @click="sortByBankName">{{ item.title }}</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
              </div>

          <div v-for="(bank,i) in filteredBanks" :key="i">
            <v-card class="ma-5  pa-4 flexLarge justify-space-between rounded-lg">
              <div class="pa-4 pt-3">
                <p class="pa-0 ma-0 font-weight-bold" v-if="bank.user">{{bank.user.email}} | {{bank.accountNumber}}</p>
                <p class="ma-0 pa-0">{{bank.bankName}}</p>
              </div>
               <div class="largeFlex mt-4">
                  <v-btn @click="activateBank(bank.id,bank.status)"  x-large  :color="bank.status == 0 ? '#199958':'#FF7B00'" class="rounded-lg white--text mr-4">
                      {{bank.status==0 ? 'Activate':'Deactivate'}}
                      </v-btn>
                </div>
            </v-card>
          </div>
          </v-card>
          <div class="mt-5 text-right">
            <v-btn x-large class="rounded-lg black--text" color="white" @click="refresh"><v-icon class="mr-6">mdi-refresh</v-icon>Refresh</v-btn>
          </div>
        </v-col>
        </v-row>
      </v-main>
      <v-overlay v-if="bankloading" class="text-center">
        <v-progress-circular indeterminate :size="50"></v-progress-circular>
        <p>Loading...</p>
      </v-overlay>

       <v-overlay v-if="btnloading" class="text-center">
        <v-progress-circular indeterminate :size="50"></v-progress-circular>
        <p>Loading...</p>
      </v-overlay>
      <v-dialog width="400px" v-model="dialog">
        <v-card height="190px" width="400px" class="pt-6 text-center pa-3 white--text" color="#006838">
          <h2> Delete {{singleUser.firstName}} </h2>
             <p>{{text}}</p>
        <v-btn :loading="deleteLoading" @click="deleteUser()">Yes</v-btn> 
        <v-btn @click="dialog=false" class="ml-3" outlined>No</v-btn>
        </v-card>
     
      </v-dialog>
    </v-app>

</template>





<script>
import SideNav from '../../components/AdminSideNav.vue'
import UserMenu from '../../components/AdminUserMenu.vue'
import {mapState} from "vuex"
import axios from "axios"
import { apiHeaders, apiURL } from '../../configs'

export default {
    components:{
      SideNav,
      UserMenu,
  
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
          usage:60,
          items: [
        { title: 'By Name' },
        { title: 'By recent activities' },
      ],
      search:"",
      singleUser:"",
      text:"",
      dialog:false,
      deleteLoading:false,
      btnloading:false
      

        }
    },
    computed:{
        ...mapState({
            user:"user",
            users:"users",
            banks:"banks",
            bankloading:"bankloading"
        }),
         filteredBanks(){
      const searchBank = this.search.toLowerCase().trim();
      const banks = this.banks
      if (!banks) return this.banks;

      return this.banks.filter(
        (bank) => bank.accountName.toLowerCase().indexOf(searchBank) > -1
      );
    },

   
    },
    created(){
        this.$store.dispatch("fetchUser")
        this.$store.dispatch("fetchBanks")
    },

    mounted(){
        if(sessionStorage.getItem('token') == null){
          this.$router.push('/admin/login')
        }
    },
    methods:{
       refresh(){
           alert('page refreshed')
           this.$store.dispatch("fetchUser")
           this.$store.dispatch("fetchBanks")
       },
       
       closeModal(){
           this.buyModal = false
       },
        sortByBankName(){
      this.$store.dispatch("sortByBankName")
    },

    activateBank(id,status){
         this.btnloading = true
         let newStatus = status == 0 ? 1 : 0
        axios({
          method:"PUT",
          url: apiURL("admin/userBank/activate/"+id),
          headers: apiHeaders.contentTypeAndAuth(),
          data:{
              status:newStatus
          }
        }).then((response)=>{
          console.log(response)
          this.btnloading = false
          this.$store.dispatch('fetchBanks')
          if(newStatus == 0){
              this.$swal({
                title: "Bank deactivated",
                text: "Bank has been deactivated",
                icon: "success",
                button: "OK",
              })
          } 
          else{
                this.$swal({
                    title: "Bank activated",
                    text: "Bank has been activated",
                    icon: "success",
                    button: "OK",
                })
          }
        }).catch((error)=>{
            this.$swal({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    button: "OK",
                })
        })
    }
   


   
    }

}




</script>



<style>
@media screen and (min-width:1000px){
.businessCapValue{
    font-size:48px;
}
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

.avatarSize{
  height:215px !important;
  width:215px !important
}
}

@media screen and (max-width:900px){
    .centerBuySolar{
    width:90%;
    margin:auto
    }

  .avatarSize{
  margin:50px auto 0px auto;
  height:100px !important;
  width:100px !important
}
}

</style>