<template>
  <v-app>
    <NavMenu/>
    <v-main class="pa-4">
      <v-row style="margin-top:20px" class="noSide">
      <v-col class="text-center">
      <v-img  style="margin:auto;width:100%" class="hidden-lg-and-up" src="../assets/images/Forgot password-amico.svg" />
      <v-img  style="margin:auto;width:60%" class="hidden-md-and-down" src="../assets/images/Forgot password-amico.svg" />
      <h2 style="font-size:34px">Lost Password?</h2>
      <p style="color:#FFA710">Don’t worry, we’ll help you reset it</p>
      </v-col>
      <v-col>
      <v-container>
            <v-card style="border-radius:20px">
            <v-row no-gutters>
                <v-col style="padding:10%">
                <v-btn class="mb-6" width="5%" text @click="goBack()">
                <v-icon class="mr-2">mdi-arrow-left</v-icon>
                Back
                </v-btn>
                  <p style="font-size:16px; text-align:left; margin-top:-20px">
                    Enter the email associated with your Greenera account:
                  </p>
                  <v-form ref="form" v-model="valid" @submit.prevent="resetPassword" :lazy-validation="lazy">
                    <v-text-field
                      v-model="email"
                      color="#2d860f"
                      :rules="emailRules"
                      label="Email Address"
                      required
                      outlined
                      style="height:65px;border-radius:8px"
                      
                    />
                  </v-form>

                  
                    <v-spacer />
                    <v-btn
                      elevation="24"
                      x-large
                      block
                      :disabled="!valid"
                      :loading="loading"
                      color="#2d860f"
                      style="font-size:14px;border-radius:8px"
                      class="mt-4 px-5 white--text"
                      @click="resetPassword"
                    >
                      Send Email
                    </v-btn>
                      <p
              class="text-center mt-6"
              style="font-size:14px;margin-bottom:0px;padding-bottom:0px"
              to="/login"
            >
              Don't have an account? <router-link style="text-decoration:none;color:#FF7B00" to="/signup">Create Account</router-link>
            </p>
            <v-btn outlined large to="/signup" style="border-radius:12px;margin-top:10px" block color="#FF7B00">
             Create Account

            </v-btn>




                  <v-dialog v-model="success" width="500px" height="500px" :timeout="timeout">
                  <v-card color="#2d860f" style="margin:auto" class="pa-7 text-center">
                  <v-icon size="100px" color="white" fab>mdi-email-check</v-icon>
                  <h2 class="white--text mb-2" style="font-size:22px">{{text}}</h2>
                  <p class="white--text"> Please check your inbox for an email from us </p>
                    <v-btn target="_blank" large color="white" style="color:#2d860f;border-radius:8px" href="https://gmail.com">
                      Open email
                    </v-btn>
                  
                  </v-card>
                
                  </v-dialog>

                  <v-dialog v-model="failure" width="500px" height="500px" :timeout="timeout">
                  <v-card color="red" style="margin:auto" class="pa-7 text-center">
                  <v-icon size="100px" color="white" fab>mdi-close-circle</v-icon>
                  <p class="white--text">Sorry, this email is not associated with any account on Tell! Books </p>
                    <v-btn large color="white" style="color:red;border-radius:8px" @click="failure =! failure">
                      Close
                    </v-btn>
                  
                  </v-card>
                
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card>
      </v-container>
      </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import NavMenu from "../components/NavMenu.vue";
import { apiURL } from '../configs';

export default {
  name: "ForgotPassword",
  components: {
    NavMenu,
  },
  data() {
    return {
      loading: false,
      success: false,
      failure:false,
      person:"",
      text: "",
      timeout: 2500,
      valid: true,
      lazy: false,
      emailRules: [
        v => !!v || "Email address is required",
        v => /.+@.+\..+/.test(v) || "Please enter a valid email address"
      ],
      email: ""
    };
  },
   created(){
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },

    resetPassword(){
      this.loading = true
    if(this.email ==""){
           this.$swal({
          title: "Error",
          text: "Please enter email",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
    }
      else{
        axios({
        method: "POST", 
        url: apiURL("password/email"),
        data: {
          email: this.email,
        },
      }).then((response)=>{
        console.log(response)
        if(response.data.message != ''){
           this.$swal({
          title: "Email sent successfully!",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
          this.loading = false
        }


        else{
           this.$swal({
          title: "Error",
          text: response.data.error.email ?? response.data.error[0],
          icon: "error",
          confirmButtonText: "Ok",
        });

          this.loading = false
        }
      
      
      }).catch((error)=>{
        console.log(error)
          this.$swal({
          title: "Error",
          text: "The login details you entered is invalid",
          icon: "error",
          confirmButtonText: "Ok",
        });
        this.loading = false
      })
      }
    }
    
  }
};
</script>


<style scoped>
.resetPassword input{
	margin-bottom: 10px;
	background: #F3F3F3 0% 0% no-repeat padding-box;
	border-radius: 3px;
	border:none;
		width: 95%;
		height: 42px;
		opacity: 1;
		font-size: 15px;
		font-family: Montserrat-Regular;
		padding-left: 10px;
		padding-right: 10px;
}
</style>