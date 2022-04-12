<template>
  <v-app>
    <NavMenu />
    <v-main style="margin-top: 2px">
      <v-row no-gutters class="noSide">
        <v-col class="text-center">
          <v-img
            width="500px"
            height="460px"
            style="margin: auto"
            src="../../assets/images/Sign up-amico.svg"
          />
          <p
            style="
              margin: auto;
              width: 70%;
              text-align: start;
              font-weight: 700;
              font-size: 30px;
              color: #828282;
            "
          >
            For Business Owners
          </p>
        </v-col>
        <v-col >
          <v-card class="ma-5" style="border-radius:20px">
            <v-container style="padding: 10%">
              <h1
                style="font-size: 48px; color: #ff7b00"
                class="font-weight-bold"
              >
                Sign up
              </h1>

              <p style="font-size: 14px">
                Enter your details correctly below, and proceed
              </p>

              <v-alert v-model="snackbar" type="error">
                {{ error }}
              </v-alert>

              <v-form @submit.prevent="signup()">
                <v-form @submit.prevent="signup()">
                  <label>First Name</label>
                  <v-text-field
                    v-model="fName"
                    outlined
                    single-line
                    label="First Name"
                    type="text"
                    color="#f66c1f"
                    style="border-radius: 8px; margin-bottom: -15px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                <v-form @submit.prevent="signup()">
                  <label>Last Name</label>
                  <v-text-field
                    v-model="lName"
                    outlined
                    label="Last Name"
                    single-line
                    type="text"
                    color="#f66c1f"
                    style="border-radius: 8px; margin-bottom: -15px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                <v-form @submit.prevent="signup()">
                  <label>Email address</label>
                  <v-text-field
                    v-model="email"
                    outlined
                    single-line
                    label="Email"
                    type="email"
                    color="#f66c1f"
                    style="border-radius: 8px; margin-bottom: -15px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                 <v-form @submit.prevent="signup()">
                  <label>Phone Number</label>
                  <v-text-field
                    v-model="phoneNumber"
                    outlined
                    single-line
                    label="Phone Number"
                    type="number"
                    color="#f66c1f"
                    style="border-radius: 8px; margin-bottom: -15px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                 <v-form @submit.prevent="signup()">
                  <label>Amount of Business Power (in kvA)</label>
                  <v-text-field
                    v-model="businessPower"
                    outlined
                    single-line
                    label="Business Power"
                    type="number"
                    color="#f66c1f"
                    style="border-radius: 8px; margin-bottom: -15px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                <v-form @submit.prevent="signup()">
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
                    style="border-radius: 8px; margin-bottom: -16px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                <v-form @submit.prevent="signup()">
                  <label>Confirm Password</label>
                  <v-text-field
                    v-model="confirmPassword"
                    outlined
                    single-line
                    color="#f66c1f"
                    :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showConfirm ? 'text' : 'password'"
                    label="Password"
                    @click:append="showConfirm = !showConfirm"
                    style="border-radius: 8px; margin-bottom: -16px"
                    @submit.prevent="signup()"
                  />
                </v-form>

                <v-btn
                  block
                  color="#FF7B00"
                  class="animate__animated animate__fadeInUp white--text"
                  @click="signup"
                  x-large
                  style="border-radius: 8px; font-size: 14px; margin-top: -9px"
                  :loading="loading"
                >
                  Sign up
                </v-btn>
                <!-- <div class="or">
                <h2 class="orText">OR</h2>
                <div class="line"></div>
              </div> -->
              </v-form>
              <p
                class="text-center mt-6"
                style="font-size: 14px; margin-bottom: 0px; padding-bottom: 0px"
                to="/login"
              >
                Already have an account?
                <router-link
                  style="text-decoration: none; color: #199958"
                  to="/business/login"
                  >Sign in</router-link
                >
              </p>
              <v-btn
                outlined
                to="/business/login"
                large
                style="color: #199958; border-radius: 12px; margin-top: 10px"
                block
                color="#FF7B00"
              >
                Sign in
              </v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import NavMenu from "../../components/NavMenu.vue";
import axios from "axios";

export default {
  name: "Signup",
  components: {
    NavMenu,
  },
  data() {
    return {
      loading: false,
      fName: "",
      lName: "",
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
      person: "",
      error: null,
      country: "",
      snackbar: false,
      timeout: 3000,
      y: "top",
      show: false,
      showConfirm:false,
      slug: "",
      rules: {
        required: (value) => !!value || "Required.",
        emailMatch: () => "The email and password you entered don't match",
      },
      phoneNumber:"",
      businessPower:0
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  // Signing in with social media accounts
  mounted() {},
  methods: {
    signup() {
      this.loading = true
      if(this.fName == ""){
         this.$swal({
          title: "Error",
          text: "Please enter your first Name",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
      }
      else if(this.lName == ""){
          this.$swal({
          title: "Error",
          text: "Please enter your last name",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
      }

      else if(this.email ==""){
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

      else if(this.confirmPassword != this.password){
         this.$swal({
          title: "Error",
          text: "Please confirm your password",
          icon: "error",
          confirmButtonText: "Ok",
        })
         this.loading = false
      }


       else if(this.businessPower < 3){
         this.$swal({
          title: "Error",
          text: "We crowdsale only for 4kva and above power needs. It's better you get one-off purchase solar system. Tap the button below instead to own solar cells and earn passive income from it...the more you buy, the more you earn!",
          icon: "error",
          confirmButtonText: "Ok",
        }).then((result)=>{
          if(result.isConfirmed){
            this.$router.push("/signup")
          }
        })
         this.loading = false
      }

      else{
        axios({
        method: "POST",
        url: "https://greeneratech.herokuapp.com/api/authenticate/business/signup",
        data: {
          firstName: this.fName,
          lastName: this.lName,
          password: this.password,
          phoneNumber:this.phoneNumber,
          businessPower:this.businessPower,
          email: this.email,
          password_confirmation: this.confirmPassword,
        },
      }).then((response)=>{
          console.log(response)
        if(response.data.error.length==0){
           this.$swal({
          title: "Registration Successful!",
          text: response.data.data.message,
          icon: "success",
          confirmButtonText: "Open Email",
        }).then((result)=>{
            if(result.isConfirmed){
                window.location.href="https://gmail.com"
            }
        })
          this.loading = false
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
      
      
      })
      }
      
    },
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
