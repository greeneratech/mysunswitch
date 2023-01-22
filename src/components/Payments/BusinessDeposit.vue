<template>
    <v-card rounded="8" class="pa-5 pt-12 mx-auto" max-width="400px" height="400px">
        <h2 class="mb-8">Enter the amount you would like to deposit:</h2>
        <v-text-field color="#006838" type="number" @keyup="enableButton"  outlined label="Enter amount" v-model="amount" />
         <flutterwave
            :is-production="isProduction"
            :name="name"
            :email="email"
            :amount="amount"
            :reference="referenceFlutter"
            flw-key="FLWPUBK-7162dd26aa9cc5bc0b4d5df920486832-X"
            :callback="callbackFlutter"
            :close="close"
            currency="NGN"
            country="NG"
            :loading="loading"
            :payment_method="paymentMethod"
            :disabled="disabled"
          />
    </v-card>
</template>



<script>
import Flutterwave from "./FlutterwaveModal.vue"
import axios from "axios"
import { apiHeaders, apiURL } from "../../configs"

export default{
    data(){
        return{
            amount:"",
            flutterwaveRef: "",
            loading:false,
            paymentMethod:"card",
            isProduction:true,
            disabled:true,
            name:"",
            email:""
        }
    },
    components:{
        Flutterwave
    },

     created(){
      let user = JSON.parse(sessionStorage.getItem('vuex'))
      this.email = user.email
      this.name = user.firstName
    },
    computed:{
        referenceFlutter() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    },
    watch:{
      flutterwaveRef() {
      this.changesInDatabase();
    },
    },
    methods:{
      callbackFlutter(response) {
      this.flutterwaveRef = response.referenceFlutter;
    },

    enableButton(){
      if(this.amount > 0 || this.amount == " " || this.amount == null){
        this.disabled = false
        console.log(this.amount)
      } else{
        this.disabled = true
        console.log(this.amount)
      }
    },

     changesInDatabase(){
       this.loading = true
       axios({
         method:"POST",
         url: apiURL("business/deposit"),
         data:{
           amount:this.amount
         },
         headers: apiHeaders.contentTypeAndAuth(),
       }).then((response)=>{
         console.log(response)
         sessionStorage.setItem('vuex',JSON.stringify(response.data.user))
         this.loading = false
         location.reload()
       })
     },

     close: () => {
      console.log("You closed checkout page");
    },

    }
    
}
</script>


<style scoped>

input[type=number]{
   font-size:40px;
   text-align:center;
   width:50%;
   margin:auto
}


input[type=number]:focus{
   outline:none;
   border:none
}


</style>