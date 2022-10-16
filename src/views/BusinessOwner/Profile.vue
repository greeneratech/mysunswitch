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
                    <v-img :loading="loading" :src="user.photo" />
                  </v-avatar>

                  <div>

                  <v-btn :loading="imgloading" @click="uploadImage" text class="grey--text mt-9"
                    >Change Photo
                    <v-icon color="#FF7B00" class="ml-3"
                      >mdi-camera</v-icon
                    ></v-btn
                  >

                  <input type="file" @change="onFileChanged" hidden ref="image" accept="image/*"/>
                   </div>

                </div>
                <v-form>
                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Business Name</label>
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
                        v-model="user.phoneNumber"
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
                :loading="btnloading"
                @click="logOut"
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
import UserMenu from "../../components/BusinessNav.vue";
import SideNav from "../../components/BusinessSideNav.vue";
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
      image:"",
      loading:false,
      imgloading:false,
      btnloading:false
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
    this.$store.dispatch("fetchBusinessUser");
    
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    updateProfile(image){
      this.loading = true
      axios({
        method: "POST", 
        url: "https://greeneratech.herokuapp.com/api/business/update",
        data: {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email:this.user.email,
          phoneNumber:this.user.phoneNumber,
          location:this.user.location,
          businessPower:this.user.businessPower,
          photo:image
        },
        headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}` 
        }
      }).then((response)=>{
      sessionStorage.setItem('vuex',JSON.stringify(response.data.user))
       this.$swal({
        title:"Profile Updated successfully",
        icon:"success",
        confirmButtonText:"Ok"
       })
       this.loading = false
      }).catch((error)=>{
        this.loading = false
        console.log(error)
      })
    },
    uploadImage(){
      this.$refs.image.click()
    },

     onFileChanged(event){
       var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.user.photo = e.target.result;
        }
        // this.uploadImage= event.target.files;
        reader.readAsDataURL(input.files[0]);
      }
       this.imgloading = true
       this.file = this.$refs.image.files[0];
       console.log(this.file)
       let formData = new FormData();
       formData.append("photo", this.file);
       let token = sessionStorage.getItem("token");
       axios.post( 'https://greeneratech.herokuapp.com/api/user/upload-photo',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                     Authorization:"Bearer " + token
                },
              }
            ).then((response) =>{
          console.log(response)
          this.imgloading = false
          this.success = true
          this.title = 'Image Updated!'
          this.message = response.data.message
          console.log()
          this.updateProfile(response.data.data.image_url)
      }).catch((error) =>{
          this.loading = false
          this.failure = true
          this.title = 'Image Not Updated!'
          this.message = error.message
        });
       
    },
    
     logOut(){
      this.btnloading = true
    axios({
      method:"POST",
      url:"https://greeneratech.herokuapp.com/api/authenticate/signout",
      data:{
        token:sessionStorage.getItem("token")
      },
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+sessionStorage.getItem("token")
      }
    }).then(()=>{
      sessionStorage.removeItem("token")
      this.$router.push("/business/login")
      sessionStorage.removeItem("vuex")

    }).catch(()=>{
       sessionStorage.removeItem("token")
      this.$router.push("/login")
      sessionStorage.removeItem("vuex")
      this.loading = false
    })
}

  },
};
</script>
