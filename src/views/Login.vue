<template>
  <v-app>
    <NavMenu/>
    <v-main>
      <v-row no-gutters style="margin-top:90px">
           <v-col class="hidden-md-and-down text-center">
          <v-img width="463px" height="343px" style="margin:auto" src="../assets/images/Mobile login-rafiki.svg" />
          <h2 class="hidden-md-and-down" style="font-size:64px;color:#199958">Welcome Back </h2>
        </v-col>
        <v-col>
             <v-card style="margin:auto;max-width:500px" class="ma-auto">
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
import NavMenu from "../components/NavMenu.vue";

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
  created() {
    window.scrollTo(0, 0);
  },
  // Signing in with social media accounts
  mounted() {
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
        url: "http://greeneratech.herokuapp.com/api/authenticate/signin",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then((response)=>{
        console.log(response)
        if(response.data.error.length==0){
        //    this.$swal({
        //   title: "Registration Successful!",
        //   text: response.data.data.message,
        //   icon: "success",
        //   confirmButtonText: "Ok",
        // });
          this.loading = false
          this.$router.push("/dashboard")
        }


        else if(response.data.error != [] || response.data.error.email != []){
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

<style scoped>
.or {
  text-align: center;
}
.line {
  height: 1px;
  background: black;
}
.orText {
  position: relative;
  top: 10px;
  color: black;
  font-size: 13px;
  background: white;
  display: inline-block;
  padding: 0 20px;
  border-radius: 30px;
}
.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
  color: white;
}
@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>