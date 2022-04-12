<template>
  <v-app>
    <UserMenu />
    <v-main class="pa-8 mb-8">
      <v-row no-gutters>
        <v-col class="hidden-md-and-down" lg="2" md="2">
          <SideNav :url="url" />
        </v-col>

        <v-col lg="9" md="9" class="mx-auto">
          <h1 class="d-flex justify-space-between">
            <v-btn @click="$router.go(-1)" text
              ><v-icon>mdi-arrow-left</v-icon>Back</v-btn
            >
          </h1>

          <div>
        
                <div class="dashboardCard mt-6 ml-2">
                  <div class="projectColumn mb-7">
                    <v-card flat style="border-radius: 10px" class="pa-8">
                    
                      <div style="max-width:340px" class="ma-2 text-center mt-4">
                        <div v-for="(project, i) in single" :key="i">
                          <v-card
                            style="border-radius: 10px;max-width:340px"
                            class="mb-7 pa-4 mr-5 "
                           
                          >
                            <img
                              style="border-radius: 10px"
                              :src="project.image"
                              height="183px"
                              width="183px"
                            />
                            <p class="mt-5 ma-0 pa-0">Project Name</p>
                            <h2>{{ project.name }}</h2>
                            <hr style="margin:auto" width="70%"/>

                             <p class="mt-5 ma-0 pa-0">Percentage Sold</p>
                            <h2>{{ project.percentage }}%</h2>
                            <hr style="margin:auto" width="70%"/>

                             <p class="mt-5 ma-0 pa-0">Cost of each cell (NGN)</p>
                            <h2>{{ project.cellPrice }}</h2>
                            

                            <div class="mt-12">
                            <v-btn @click="buySolar(project.cellPrice)" width="60%" color="#199958" class="white--text">
                             <v-icon>mdi-cash</v-icon> Buy Solar Cells
                              </v-btn
                            >
                            </div>
                          </v-card>
                        </div>
                      </div>
                    </v-card>
                  </div>
                  
                </div>

                 <v-dialog persistent fullscreen class="pa-2 mx-auto" max-width="400px" height="400px" v-model="buyModal">
          
            <v-card>
                    <div class="pa-9 d-flex justify-end">
                       <v-btn small fab @click="buyModal = false"><v-icon>mdi-close</v-icon></v-btn>
                    </div>
            <div class="centerBuySolar">
            <BuySolar :currency="user.currency" :price="price" :accountBalance="user.accountBalance" @closeModal="closeModal"/>
            </div>
            </v-card>
        </v-dialog>
            

            
                <div class="mt-6 ma-2">
                  <div class="mb-7">


                    <!--Web view for my projects -->





                    <!--Mobile view formy projects -->
                   

      



                  </div>
                  
                </div>
             
          </div>
        </v-col>
      </v-row>
      <v-overlay :value="loading">
        <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
      </v-overlay>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from "../../components/SideNav.vue";
import UserMenu from "../../components/UserMenu.vue";
import BuySolar from "../../components/Payments/BuySolar.vue";
import { mapState } from "vuex";

export default {
  components: {
    SideNav,
    UserMenu,
    BuySolar
  },
  data() {
    return {
      tab: null,
      walletBalance: 0,
      url: window.location.pathname.slice(1),
      capBalance: 0,
      projectName: "Power Up Eziobodo",
      startDate: "17/05/2021",
      endDate: "17/06/2021",
      drawer: false,
      mini: false,
      price:0,
      buyModal:false,
      // projects: [
      //   {
      //     name: "Dominican Estate",
      //     image:
      //       "https://images.theconversation.com/files/96959/original/image-20151001-23072-142qtha.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      //   },
      //   {
      //     name: "New Owerri Town",
      //     image:
      //       "https://guardian.ng/wp-content/uploads/2016/05/solar-energy.jpg",
      //   },
      //   {
      //     name: "New Owerri Town",
      //     image:
      //       "https://guardian.ng/wp-content/uploads/2016/05/solar-energy.jpg",
      //   },
      // ],

      headers: [
        {
          text: "PROJECT NAME",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "MONTH", value: "month" },
        { text: "YEAR", value: "year" },
        { text: "CELLS BOUGHT", value: "cells" },
        { text: "TOTAL PROJECT CELLS", value: "total" },
        { text: "PROJECT ROI", value: "roi" },
      ],
      desserts: [
        {
          name: "OBINZE Crowdsale IV",
          month: "APRIL",
          year: 2021,
          cells: 50,
          total: 600,
          roi: "33%",
        },
        {
          name: "Eziobodo Crowdsale III",
          month: "SEPTEMBER",
          year: 2020,
          cells: 25,
          total: 300,
          roi: "25%",
        },
        {
          name: "OBINZE Crowdsale IV",
          month: "MARCH",
          year: 2020,
          cells: 10,
          total: 450,
          roi: "20%",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      user: "user",
      projects:"projects",
      loading:"loading",
      single:"single"
    }),
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchSingleProject",this.$route.params.id)
  },
  methods: {
    goBack() {
      this.$route.go(-1);
    },
    buySolar(p){
        this.price = p;
        this.buyModal = true;
    }
  },
};
</script>
