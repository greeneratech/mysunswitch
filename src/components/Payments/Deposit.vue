<template>
    <v-card rounded="8" class="pa-5 pt-12 mx-auto" max-width="400px" height="400px">
        <h2 class="mb-8">Enter the amount you would like to deposit:</h2>
        <v-text-field outlined label="Enter amount" v-model="amount" />
         <flutterwave
            :is-production="isProduction"
            name="Toheeb"
            email="tobilobaojuolape@gmail.com"
            :amount="amount"
            :reference="referenceFlutter"
            flw-key="FLWPUBK-7162dd26aa9cc5bc0b4d5df920486832-X"
            :callback="callbackFlutter"
            :close="close"
            currency="NGN"
            country="NG"
            :payment_method="paymentMethod"
          />
    </v-card>
</template>



<script>
import Flutterwave from "./FlutterwaveModal.vue"

export default{
    data(){
        return{
            amount:"",
            flutterwaveRef: "",
        }
    },
    components:{
        Flutterwave
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

     close: () => {
      console.log("You closed checkout page");
    },

    }
    
}
</script>
