<template>
    <v-card rounded="8" class="pa-5 pt-12 mx-auto" max-width="400px" height="400px">
        <h2 class="mb-8">Enter the amount you would like to withdraw:</h2>
        <v-form @submit.prevent="performWithdrawal">
        <v-text-field color="#006838" type="number" @keyup="enableButton"  outlined label="Enter amount" v-model="amount" />
        </v-form>
         <v-btn x-large block color="#FF7B00" class="white--text font-bold" :loading="loading" :disabled="disabled" @click="performWithdrawal">Withdraw </v-btn>
    </v-card>
</template>



<script>
import axios from "axios"

export default{
    data(){
        return{
            amount:0,
            loading:false,
            disabled:true,
            email:"",
            name:""
        }
    },
    components:{
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
    created(){
      let user = JSON.parse(sessionStorage.getItem('vuex'))
      this.email = user.email
      this.name = user.firstName
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
     close: () => {
      console.log("You closed checkout page");
    },

    performWithdrawal(){
        this.loading = true
        axios({
            method: "POST",
            url: "https://greeneratech.herokuapp.com/api/user/withdraw",
            headers:{
                Authorization:"Bearer "+sessionStorage.getItem('token')
            },
            data:{
                amount:this.amount
            }
        }).then(()=>{
            axios({
                method:"GET",
                url:"https://greeneratech.herokuapp.com/api/user",
                 headers:{
                Authorization:"Bearer "+sessionStorage.getItem('token')
            },
            }).then((response)=>{
                 this.loading = false
                  this.$swal({
                title: "Success",
                text: "You have successfully withdrawn "+this.amount+" from your account",
                icon: "success",
                button: "OK",
                confirmButtonText:"Ok"
            })
                sessionStorage.setItem('vuex',JSON.stringify(response.data))
                console.log(response)
                 location.reload()
            })

        }).catch((error)=>{
            this.loading = false
            console.log(error)
            this.$swal({
                title: "Error",
                text: "Something went wrong!",
                icon: "error",
                button: "OK",
                confirmButtonText:"Try again"
            })
        })
    }

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