<template>
  <v-app>
    <NavMenu/>
    <v-main class="mb-12">
      <v-row class="noSide" no-gutters style="margin-top:90px">
           <v-col class="text-center">
          <v-img width="463px" height="343px" style="margin:auto" src="../../assets/images/Mobile login-rafiki.svg" />
          <h2 class="welcomeBack" style="color:#199958">Welcome Back </h2>
        </v-col>
        <v-col>
             <v-card style="margin:auto;max-width:500px;border-radius:20px" class="ma-auto">
          <v-container style="padding:10%">
            <h1 style="font-size:48px" class="font-weight-bold">
              Sign in
            </h1>

            <p style="font-size:14px">
              Enter your details correctly below
            </p>

            <v-alert v-model="snackbar" type="error">
              {{ error }}
            </v-alert>

            <v-form @submit.prevent="login()">
            
                  <v-form @submit.prevent="login()">
                    <label>Email address</label>
                    <v-text-field
                      v-model="email"
                      outlined
                      single-line
                      label="Email"
                      type="email"
                      color="#f66c1f"
                      style="border-radius:8px;margin-bottom:-15px"
                      @submit.prevent="login()"
                    />
                  </v-form>
            
              <v-form @submit.prevent="login()">
                  <label>Password</label>
                <v-text-field
                  v-model="password"
                  outlined
                  single-line
                  color="#f66c1f"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Password"
                  @click:append="show = !show"
                  style="border-radius:8px;margin-bottom:-16px"
                  @submit.prevent="login()"
                />
              </v-form>
              <v-btn
                block
                color="#006838"
                class="animate__animated animate__fadeInUp white--text"
                @click="login"
                x-large
                style="border-radius:8px;font-size:14px; margin-top:-9px"
                :loading="loading"
              >
                Proceed
              </v-btn>
              <!-- <div class="or">
                <h2 class="orText">OR</h2>
                <div class="line"></div>
              </div> -->
            </v-form>

            <router-link style="text-decoration:none" to="/reset-password"><p class="text-center mt-4" style="color:#FF7B00">
              Forgot Password?
            </p></router-link>


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

          </v-container>
             </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import NavMenu from "../../components/NavMenu.vue";
import {mapState} from "vuex"

export default {
  name: "Signup",
  components: {
    NavMenu,
  },
  data() {
    return {
      loading: false,
      email: "",
      displayName: "",
      password: "",
      person: "",
      error: null,
      country: "",
      snackbar: false,
      timeout: 3000,
      y: "top",
      show: false,
      slug: "",
      rules: {
        required: (value) => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match",
      },
    };
  },
  computed:{
    ...mapState({
      user:"user"
    })
  },
  created() {
    window.scrollTo(0, 0);
  },
  // Signing in with social media accounts
  mounted() {
     if(localStorage.getItem("token") !=null){
      this.$router.push("/dashboard")
    }
  },
  //signing with social media ends
  ////////
  //signing up with email and password and automatically creating user profile slug
  methods: {
    login(){
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
      else if(this.password == ""){
          this.$swal({
          title: "Error",
          text: "Please enter your password",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
      }
      else{
        axios({
        method: "POST", 
        url: "https://greeneratech.herokuapp.com/api/authenticate/signin",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then((response)=>{
        console.log(response)
        this.loading = false
        if(response.data.data.message != null){
          this.$swal({
            title:"Please verify your account",
            text:response.data.data.message,
            icon:"success",
            confirmButtonText:"Open Email"
          })
          .then((result)=>{
            if(result.isConfirmed){
              window.open("https://gmail.com",'_blank')
            }
          })
        }
        else if(response.data.error.length==0){
        //    this.$swal({
        //   title: "Registration Successful!",
        //   text: response.data.data.message,
        //   icon: "success",
        //   confirmButtonText: "Ok",
        // });
          this.loading = false
          console.log(response.data.data.isBusiness)
         if(response.data.user.isBusiness==true){
          this.$router.push("/business/dashboard")
          }
          else{
          window.location.href= "/dashboard"
          }
          console.log(response.data)
          this.$store.dispatch("fetchUser",response.data.user)
          localStorage.setItem('token',response.data.token)
        }


        else if(response.data.error.length == 0 || response.data.error.email != []){
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
  },
};
</script>
