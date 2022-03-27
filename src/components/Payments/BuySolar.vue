<template>
<v-app>
    <div class="mb-12">
        <p class="text-center text-h4 font-weight-bold">Buy Solar Cells</p>
        <div>
          <v-card class="cardHeight py-12 gradient text-center">
              <p class="white--text walletValue">Wallet Balance ({{currency}}) </p>
             <h2 class="text-center balanceBalance">{{accountBalance}}</h2>
             <p class="balanceName"></p>
          </v-card>

          <div class="mt-7">
              <p class="text-h5 font-weight-bold text-center">ENTER NUMBER OF CELLS</p>
              <div class="d-flex justify-space-between">
                  <v-btn small @click="cells > 0 ? cells--:cells" fab><v-icon>mdi-minus</v-icon></v-btn>
                  <input min="0"  type="number" v-model="cells"/>
                  <v-btn small @click="cells++" fab><v-icon>mdi-plus</v-icon></v-btn>
              </div>

              <div class="mt-8">
               <p class="text-h5 font-weight-bold text-center">ESTIMATED COST (NGN)</p>
               <p class="font-weight-bold text-h4 text-center">{{cells*250}}</p>

               <p style="margin:auto" class="mt-7 d-flex pa-3 justify-center">
                  <v-icon class="mr-2">mdi-information-outline</v-icon>make sure there is enough funds in your wallet to complete your transaction
                </p>

                <v-btn :loading="loading" @click="makePayment()" color="#199958" block x-large class="white--text mb-4" style="border-radius:10px"><v-icon class="mr-5">mdi-account-cash-outline</v-icon> Buy solar cells</v-btn>

                 <v-btn @click="closeModal" block x-large class="black--text" style="border-radius:10px"><v-icon class="mr-5">mdi-close-circle</v-icon> Close</v-btn>
                </div>

          </div>
        </div>
        
          </div>
</v-app>
</template>







<script>
import axios from "axios"


export default {
    data(){
        return{
            cells:0,
            loading:false
        }
    },
    props:{
     accountBalance:{
        type:String
     },
     currency:{
         type:String
     }
    },
    methods:{
        closeModal(){
            this.$emit("closeModal")
        },
        makePayment(){
            if(this.cells != 0 && this.accountBalance>this.cells*250 ){
                this.loading = true
                axios({
                    method:"POST",
                    url:"https://greeneratech.herokuapp.com/api/user/investments/invest",
                    data:{
                        investmentId:2,
                        numberOfCells:this.cells
                    },
                    headers: {
                    ContentType: "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
          }
                
        }).then((response)=>{
          console.log(response)
          this.loading = false
        })
            }
            else if(this.cells == 0){
          this.$swal({
          title: "Invalid Entry",
          text: "Sorry, you need to buy atleast one cell",
          icon: "warning",
          confirmButtonText: "Try again",
        })
            }
            else{
          this.$swal({
          title: "Insufficient Balance!",
          text: "Sorry, you do not have enough money in your wallet to buy this amount of energy",
          icon: "warning",
          confirmButtonText: "Try again",
        })
            }
        }
    }
}





</script>