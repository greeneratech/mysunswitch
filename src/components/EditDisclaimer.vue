<template>
    <v-app>
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <!-- <v-col class="hidden-md-and-down" lg=3 md=3 >
      <SideNav :url="url"/>
      </v-col> -->

      <v-col lg=8 md=8 class="mx-auto">
          <v-card class="rounded-lg pb-7">
           
              <h2 style="color:white;background:#006838;padding:10px">Edit Disclaimer</h2>
               <v-form style="max-width:900px;margin:auto;padding:30px">
                  <v-btn text @click="closeDisclaimer"><v-icon>mdi-arrow-left</v-icon>Back</v-btn>
                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Disclaimer Title</label>
                      <br/>
                      <input
                        type="text"
                        placeholder="Disclaimer title"
                        v-model="singleDisclaimer.title"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  

                   <v-card
                    class="py-6 px-6"
                    height="200px"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Description</label>
                      <br/>
                      <textarea
                        type="text"
                        placeholder="Description"
                        v-model="singleDisclaimer.description"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                

                 

                  
        

                  <v-btn :loading="faqloading" @click="editDisclaimer" class="rounded-lg white--text mt-5" block x-large color="#199958"><v-icon class="mr-5">mdi-pen</v-icon>Edit FAQ</v-btn>






            </v-form>

          </v-card>
        </v-col>
        </v-row>
      </v-main>
      <!-- <v-overlay v-if="faqloading" class="text-center">
        <v-progress-circular indeterminate :size="50"></v-progress-circular>
        <p>Loading...</p>
      </v-overlay> -->
    </v-app>
</template>





<script>
//import SideNav from '../../components/AdminSideNav.vue'
// import UserMenu from '../../components/AdminUserMenu.vue'
// import {mapState} from "vuex"
import axios from "axios"
import { apiHeaders, apiURL } from "../configs"

export default {
    components:{
      // SideNav,
    //   UserMenu,
  
    },
    data(){
        return{
           walletBalance:0,
           url:window.location.pathname.slice(1),
           capBalance:0,
           drawer: false,
          mini: false,
          modal:false,
          buyModal:false,
          usage:60,
          items: [
        { title: 'By Name' },
        { title: 'By recent activities' },
      ],
      suspendLoading:false,
      search:"",
      projectVideo:"",
      title:"",
      description:"",
      startDate:"",
      endDate:"",
      cellNumber:0,
      cellPrice:0,
      cellProfit:0,
      nextPayment:"",
      faqloading:false

        }
    },
    props:{
        singleDisclaimer:{
            type:Object,
            default:null
        }
    },
    computed:{
    },
    methods:{
        editDisclaimer(){
            this.faqloading = true
            axios({
                method:"PUT",
                url: apiURL("admin/disclaimers/update/"+this.singleDisclaimer.id),
                data:{
                    question:this.singleDisclaimer.title,
                    answer:this.singleDisclaimer.description,
                    title:this.singleDisclaimer.title,
                    description:this.singleDisclaimer.description
                },
                headers: apiHeaders.contentTypeAndAuth(),
            }).then((response)=>{
                console.log(response)
                this.faqloading = false
                this.$swal({
                    title: "Success!",
                    text: "Disclaimer updated successfully",
                    type: "success",
                    confirmButtonText: "OK",
                    icon:"success"
                  }).then(() => {
                    this.$store.dispatch("fetchDisclaimer")
                    this.$router.push("/admin/disclaimers")
                  });
            })
        },
     
       closeDisclaimer(){
           this.$emit("closeDisclaimer")
       }
    }

} 




</script>



<style>
@media screen and (min-width:1000px){
.businessCapValue{
    font-size:48px;
}
.gradient{
    background: linear-gradient(101.06deg, #27AE60 1.67%, #006838 93.52%);
    border-radius:10px !important
}

.walletBalance{
    font-size:36px;
    color:white
}

.radius6{
    border-radius:6px
}
.orangeText{
    color:#FF7B00 !important;
    font-size:18px !important;
    margin:0px !important;
    padding:0px !important
}
.greenDate{
    color:#006838 !important;
    font-size:23px !important;
    margin:0px !important;
    padding:0px !important
}

.v-navigation-drawer{
    border:40px !important
}
.centerBuySolar{
    width:35%;
    margin:auto
}

.projectImage{
    margin:45px 40px 0px 40px;
  border-radius:10px;
  height:96px !important;
  width:96px !important
}
.projectDescription{
    width:70%
}
}

@media screen and (max-width:900px){
    .centerBuySolar{
    width:90%;
    margin:auto
    }

  .projectImage{
  margin:50px 40px 0px 40px;
  border-radius:10px;
  height:120px !important;
  width:120px !important
}
}

</style>