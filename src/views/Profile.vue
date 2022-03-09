<template>
  <v-app>
    <UserMenu />
    <v-main class="pa-8 mb-8">
      <v-row no-gutters>
        <v-col class="hidden-md-and-down" lg="2" md="2">
          <SideNav :url="url" />
        </v-col>

        <v-col lg="9" md="9" class="mx-auto">
          <div class="d-flex justify-space-between mb-5">
            <h2>Profile</h2>
            <v-btn text @click="goBack"
            class="hidden-md-and-up"
              ><v-icon>mdi-arrow-left</v-icon>Back</v-btn
            >
          </div>
          <div class="dashboardCard">
            <div class="cardColumn">
              <v-card style="border-radius:10px" class="pa-7 profile mb-7 pb-12">
                <div class="text-center mb-10">
                  <v-avatar size="160" color="#EBEBEB">
                    <span class="white--text text-h5">OA</span>
                  </v-avatar>

                  <div>

                  <v-btn text class="grey--text mt-9"
                    >Change Photo
                    <v-icon color="#FF7B00" class="ml-3"
                      >mdi-camera</v-icon
                    ></v-btn
                  >
                   </div>

                </div>
                <v-form>
                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>First Name</label>
                      <br/>
                      <input
                        type="text"
                        placeholder="First Name"
                        v-model="user.firstName"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Last Name</label>
                       <br/>
                      <input
                        type="text"
                        placeholder="Last Name"
                        v-model="user.lastName"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Email</label>
                       <br/>
                      <input
                        type="text"
                        placeholder="Email"
                        v-model="user.email"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Phone Number</label>
                       <br/>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        v-model="user.phone"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Location</label>
                       <br/>
                      <input
                        type="text"
                        placeholder="location"
                        v-model="user.location"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-btn
                    @click="updateProfile()"
                    style="border-radius: 8px"
                    color="#FF7B00"
                    class="my-7 white--text"
                    x-large
                    block
                    :loading="loading"
                    >Save Changes</v-btn
                  >
                </v-form>
              </v-card>
            </div>

             <div class="cardColumn profileButtons">
              <v-btn
                class="text-center mb-4 d-flex justify-space-around"
                depressed
                elevation=1
                block
                x-large
                color="white"
                style="border-radius: 9px; color: #ff7b00;height:66px"
                ><v-icon color="#FF7B00">mdi-key</v-icon>
                <span>
                Password Reset
                </span>
                </v-btn
              >
              <v-btn
                class="text-center mb-4 d-flex justify-space-around"
                depressed
                elevation=1
                block
                x-large
                color="white"
                style="border-radius: 9px; color: #ff7b00;height:66px"
                ><v-icon color="#FF7B00">mdi-headset</v-icon>
                <span>Help &
                Feedback</span></v-btn
              >
              <v-btn
                class="text-center mb-4 d-flex justify-space-around"
                depressed
                block
                x-large
                color="#FF7B00"
                style="border-radius: 9px; color: white;height:66px"
                ><v-icon color="white" class="mr-7">mdi-logout</v-icon>
                <span>
                Sign
                out
                </span>
                </v-btn
              >
              </div>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import UserMenu from "../components/UserMenu.vue";
import SideNav from "../components/SideNav.vue";
import { mapState } from "vuex";
import axios from "axios"

export default {
  data() {
    return {
      url: window.location.pathname.slice(1),
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      loading:false
    };
  },
  computed: {
    ...mapState({
      user: "user",
    }),
  },
  components: {
    UserMenu,
    SideNav,
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updateProfile(){
      this.loading = true
      axios({
        method: "POST", 
        url: "http://greeneratech.herokuapp.com/api/user/update",
        data: {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email:this.user.email,
          phoneNumber:this.user.phone,
          location:this.user.location,
          photo:"https://i.ibb.co/PD6B8zm/pngkey-com-avatar-png-1150152.png"
        },
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
      }).then((response)=>{
       console.log(response)
       this.loading = false
      }).catch((error)=>{
        this.loading = false
        console.log(error)
      })
    }
  },
};
</script>
