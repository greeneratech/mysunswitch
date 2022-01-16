<template>
  <v-app>
    <v-main style="margin-top:192px">
      <v-row no-gutters>
           <v-col class="text-center hidden-md-and-down">
          <v-img width="463px" height="343px" style="margin:auto" src="../assets/images/Mobile login-rafiki.svg" />
          <h2 style="font-size:64px;color:#199958">Welcome Back </h2>
        </v-col>
        <v-col style="margin-top:-140px">
             <v-card class="ma-5">
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

            <v-form @submit.prevent="pressed()">
            
                  <v-form @submit.prevent="pressed()">
                    <label>Email address</label>
                    <v-text-field
                      v-model="email"
                      outlined
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
                color="#006838"
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
export default {
  name: "Signup",
  data() {
    return {
      loading: false,
      email: "",
      displayName: "",
      password: "",
      person: "",
      error: null,
      country: "",
      currency: [
        { country: "Nigeria", code: "NGN" },
        { country: "America", code: "USD" },
        { country: "Benin", code: "CFA" },
        { country: "Burkina Faso", code: "CFA" },
        { country: "Burundi", code: "BIF" },
        { country: "Cameroon", code: "CFA" },
        { country: "Canada", code: "CAD" },
        { country: "Congo", code: "CDF" },
        { country: "Cape Verde", code: "CVE" },
        { country: "Dubai", code: "AED" },
        { country: "Europe", code: "Euro" },
        { country: "England", code: "GBP" },
        { country: "Gambia", code: "GMD" },
        { country: "Ghana", code: "GHS" },
        { country: "Guinea", code: "GNF" },
        { country: "Guinea Bissau", code: "CFA" },
        { country: "Ivory Coast", code: "CFA" },
        { country: "Kenya", code: "KES" },
        { country: "Liberia", code: "LRD" },
        { country: "Malawi", code: "MWK" },
        { country: "Mali", code: "CFA" },
        { country: "Malaysia", code: "MYR" },
        { country: "Mozambique", code: "MZN" },
        { country: "Niger", code: "CFA" },
        { country: "Rwanda", code: "RWF" },
        { country: "Sierra Leone", code: "SLL" },
        { country: "Sao Tome", code: "STD" },
        { country: "Saudi Arabia", code: "SAR" },
        { country: "Senegal", code: "CFA" },
        { country: "South Africa", code: "ZAR" },
        { country: "Togo", code: "CFA" },
        { country: "Uganda", code: "UGX" },
        { country: "United States of America", code: "USD" },
        { country: "Zambia", code: "ZMW" },
        { country: "Zimbabwe", code: "ZWD" },
      ],
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