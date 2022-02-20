<template>
    <v-app>
         <UserMenu />
      <v-main class="pa-8 mb-8">
      <v-row no-gutters>
      <v-col class="hidden-md-and-down" lg=3 md=3 >
      <SideNav :url="url"/>
      </v-col>

      <v-col lg=9 md=9 class="mx-auto">
      <h1>Projects</h1>
       <div > 
        <div class="dashboardCard mt-2">
            <div class="projectColumn mb-7">
            <v-card style="border-radius:10px" class="pa-8">
              <h2>Ongoing Project </h2>
              <div class="ma-2 d-flex mt-4 overflow-auto">
              <div v-for="(project,i) in projects" :key="i">
                <v-card style="border-radius:10px" class="mb-7 pa-4 mr-5">
                    <img style="border-radius:10px"  :src="project.image" height="183px" width="183px"/>
                    <p>{{project.name}}</p>
                    <v-btn width="60%" text color="#FF7B00">View Details<v-icon>mdi-arrow-right</v-icon></v-btn>
                </v-card>
              </div>
              </div>
            
          </v-card>
          </div>
          <div class="upcomingColumn">
            <v-card class="pa-7" style="border-radius:10px">
                <h2 style="color:#199958">Live Project</h2>
                 <hr/>
                 <div style="margin-bottom:90px">
                <h4 style="margin-top:24px;font-weight:500">PROJECT NAME</h4>
                <h3>OBINZE Crowdsale IV</h3>
                 </div>
                 <h4 class="d-flex justify-space-between mb-3">
                    <span style="font-weight:500">
                     MONTH<br/>
                     <b>APRIL</b>
                    </span>

                    <span style="font-weight:500">
                        YEAR<br/>
                     <b>2022</b>
                    </span>
                </h4>
                <hr/>

                <v-btn class="mt-4 white--text" color="#199958" style="border-radius:10px" block x-large><v-icon>mdi-cash</v-icon> Invest</v-btn>

                
            </v-card>
          </div>
          
        </div>
          </div>
        </v-col>
        </v-row>
      </v-main>
    </v-app>
</template>





<script>
import SideNav from '../components/SideNav.vue'
import UserMenu from '../components/UserMenu.vue'
import {mapState} from "vuex"

export default {
    components:{
      SideNav,
      UserMenu
    },
    data(){
        return{
           walletBalance:0,
           url:window.location.pathname.slice(1),
           capBalance:0,
           projectName:"Power Up Eziobodo",
           startDate:"17/05/2021",
           endDate:"17/06/2021",
           drawer: false,
           mini: false,
           projects:
           [
               {
            name:"Dominican Estate",image:"https://images.theconversation.com/files/96959/original/image-20151001-23072-142qtha.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
           },
           {
            name:"New Owerri Town",image:"https://guardian.ng/wp-content/uploads/2016/05/solar-energy.jpg",
           },
            {
            name:"New Owerri Town",image:"https://guardian.ng/wp-content/uploads/2016/05/solar-energy.jpg",
           }
           ]
        }
    },
    computed:{
        ...mapState({
            user:"user"
        })
    },
    created(){
        this.$store.dispatch("fetchUser")
    }

}




</script>

