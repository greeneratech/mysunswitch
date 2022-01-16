<template>
  <v-app>
      <NavMenu class="hidden-md-and-down"/>
    <v-main style="margin-top:192px">
      <v-row no-gutters>
           <v-col class="text-center hidden-md-and-down">
          <v-img width="500px" height="460px" style="margin:auto" src="../assets/images/Sign up-amico.svg" />
          <p style="margin:auto;width:60%;text-align:start;font-weight:700;font-size:64px;color:#828282">You are on your way to become part of the future of clean energy. </p>
        </v-col>
        <v-col style="margin-top:-140px">
             <v-card class="ma-5">
          <v-container style="padding:10%">
            <h1 style="font-size:48px;color:#FF7B00" class="font-weight-bold">
              Sign up
            </h1>

            <p style="font-size:14px">
              Enter your details correctly below, and proceed
            </p>

            <v-alert v-model="snackbar" type="error">
              {{ error }}
            </v-alert>

            <v-form @submit.prevent="pressed()">

                <v-form @submit.prevent="pressed()">
                    <label>First Name</label>
                    <v-text-field
                      v-model="fName"
                      outlined
                      single-line
                      label="First Name"
                      type="text"
                      color="#f66c1f"
                      style="border-radius:8px;margin-bottom:-15px"
                      @submit.prevent="pressed()"
                    />
                  </v-form>

                <v-form @submit.prevent="pressed()">
                    <label>Last Name</label>
                    <v-text-field
                      v-model="lName"
                      outlined
                      label="Last Name"
                      single-line
                      type="text"
                      color="#f66c1f"
                      style="border-radius:8px;margin-bottom:-15px"
                      @submit.prevent="pressed()"
                    />
                  </v-form>
            
                  <v-form @submit.prevent="pressed()">
                    <label>Email address</label>
                    <v-text-field
                      v-model="email"
                      outlined
                      single-line
                      label="Email"
                      type="text"
                      color="#f66c1f"
                      style="border-radius:8px;margin-bottom:-15px"
                      @submit.prevent="pressed()"
                    />
                  </v-form>
            
              <v-form @submit.prevent="pressed()">
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
                  @submit.prevent="pressed()"
                />
              </v-form>

               <v-form @submit.prevent="pressed()">
                  <label>Confirm Password</label>
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
                  @submit.prevent="pressed()"
                />
              </v-form>


              <v-btn
                block
                color="#FF7B00"
                class="animate__animated animate__fadeInUp white--text"
                @click="pressed"
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
            <p
              class="text-center mt-6"
              style="font-size:14px;margin-bottom:0px;padding-bottom:0px"
              to="/login"
            >
              Already have an account? <router-link style="text-decoration:none;color:#199958" to="/login">Sign in</router-link>
            </p>
            <v-btn outlined to="/login" large style="color:#199958;border-radius:12px;margin-top:10px" block color="#FF7B00">
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
import NavMenu from "../components/NavMenu.vue"

export default {
  name: "Signup",
  components:{
    NavMenu
  },
  data() {
    return {
      loading: false,
      fName:"",
      lName:"",
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