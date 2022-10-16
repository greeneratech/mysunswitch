<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <!-- <v-col class="hidden-md-and-down" lg=3 md=3 >
      <SideNav :url="url"/>
      </v-col> -->

      <v-col lg=8 md=8 class="mx-auto">
          <v-card class="rounded-lg pb-7">
           
              <h2 style="color:white;background:#006838;padding:10px">New Project </h2>
               <v-form style="max-width:900px;margin:auto;padding:30px">
                  <v-btn text @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon>Back</v-btn>
                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Project Video Link</label>
                      <br/>
                      <input
                        type="text"
                        placeholder="Video link here"
                        v-model="projectVideo"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Project Name</label>
                      <br/>
                      <input
                        type="text"
                        placeholder="Project Name"
                        v-model="projectName"
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
                        v-model="projectDescription"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Number of Cell(s) Available</label>
                      <br/>
                      <input
                        type="number"
                        placeholder="Number of Cell(s) Available"
                        v-model="cellNumber"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Price per cell (NGN)</label>
                      <br/>
                      <input
                        type="number"
                        placeholder="Price per cell (NGN)"
                        v-model="cellPrice"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                   <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Profit per cell (NGN)</label>
                      <br/>
                      <input
                        type="number"
                        placeholder="Profit per cell (NGN)"
                        v-model="cellProfit"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Start Date (DD/MM/YYYY)</label>
                      <br/>
                      <input
                        type="date"
                        placeholder="Start Date (DD/MM/YYYY)"
                        v-model="startDate"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                   <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>End Date (DD/MM/YYYY)</label>
                      <br/>
                      <input
                        type="date"
                        placeholder="End Date (DD/MM/YYYY)"
                        v-model="endDate"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                    <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Next payment Due on (DD/MM/YYYY)</label>
                      <br/>
                      <input
                        type="date"
                        placeholder="End Date (DD/MM/YYYY)"
                        v-model="nextPayment"
                        style="width:100%"
                      />
                    </div>
                  </v-card>

                  <v-btn :loading="createLoading" @click="createProject" class="rounded-lg white--text" block x-large color="#199958"><v-icon class="mr-5">mdi-plus</v-icon>Create Project</v-btn>







            </v-form>

          </v-card>
        </v-col>
        </v-row>
      </v-main>
      <v-overlay v-if="suspendLoading" class="text-center">
        <v-progress-circular indeterminate :size="50"></v-progress-circular>
        <p>Loading...</p>
      </v-overlay>
    </v-app>
</template>





<script>
//import SideNav from '../../components/AdminSideNav.vue'
import UserMenu from '../../components/AdminUserMenu.vue'
import {mapState} from "vuex"
import axios from "axios"

export default {
    components:{
      // SideNav,
      UserMenu,
  
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
      projectName:"",
      projectDescription:"",
      startDate:"",
      endDate:"",
      cellNumber:0,
      cellPrice:0,
      cellProfit:0,
      nextPayment:"",
      createLoading:false

        }
    },
    computed:{
        ...mapState({
            user:"user",
            users:"users",
            allProjects:"allProjects"
        })
    },
    created(){
        this.$store.dispatch("fetchUser")
        this.$store.dispatch("adminUsers")
        this.$store.dispatch("fetchAllProjects")
         if(sessionStorage.getItem('token') == null){
          this.$router.push('/admin/login')
        }
    },
    methods:{
      createProject(){
        this.createLoading = true
        axios({
          method:"POST",
          url:"https://greeneratech.herokuapp.com/api/admin/investments/create",
          headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+sessionStorage.getItem("token")
          },
          data:{
            name:this.projectName,
            description:this.projectDescription,
            descriptionMediaLink:this.projectVideo,
            startDate:this.startDate,
            endDate:this.endDate,
            numberOfCells:this.cellNumber,
            cellPrice:this.cellPrice,
            cellProfit:this.cellProfit,
            nextPaymentDueOn:this.nextPayment
          }
        }).then((response)=>{
          console.log(response)
          this.createLoading = false
          this.$swal({
            title: "Project Created",
            text: "Project has been created successfully",
            type: "success",
            icon:"success",
            confirmButtonText: "OK"
          }).then((result)=>{
            if(result.isConfirmed){
              this.$router.push('/admin/projects')
            }
          })
          this.$store.dispatch("fetchAllProject")
        }).catch((error)=>{
          console.log(error)
          this.$swal({
            type:"error",
            icon:"error",
            title:"Error",
            text:"An error occured while creating project"
          }).then((result)=>{
            if(result.isConfirmed){
              this.createLoading = false
            }
          })
        })
      },
       closeModal(){
           this.buyModal = false
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