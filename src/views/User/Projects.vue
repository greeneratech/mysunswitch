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
            <span>Projects</span>
            <v-btn @click="$router.go(-1)" text
              ><v-icon>mdi-arrow-left</v-icon>Back</v-btn
            >
          </h1>

          <div>
            <v-tabs v-model="tab" color="#006838">
              <v-tab> Main Projects </v-tab>
              <v-tab> My Projects </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <div class="dashboardCard mt-6 ml-2">
                  <div class="projectColumn mb-7">
                    <v-card style="border-radius: 10px" class="pa-8">
                      <h2>Ongoing Project</h2>
                      <div class="ma-2 d-flex mt-4 overflow-auto">
                        <div v-for="(project, i) in projects" :key="i">
                          <v-card
                            style="border-radius: 10px"
                            class="mb-7 pa-4 mr-5"
                          >
                            <img
                              style="border-radius: 10px"
                              :src="project.image"
                              height="183px"
                              width="183px"
                            />
                            <p>{{ project.name }}</p>
                            <v-btn width="60%" text color="#FF7B00"
                            @click="goProject(project.id)"
                              >View Details<v-icon
                                >mdi-arrow-right</v-icon
                              ></v-btn
                            >
                          </v-card>
                        </div>
                      </div>
                    </v-card>
                  </div>
                  <div class="upcomingColumn">
                    <v-card class="pa-7" style="border-radius: 10px">
                      <h2 style="color: #199958">Live Project</h2>
                      <hr />
                      <div style="margin-bottom: 90px">
                        <h4 style="margin-top: 24px; font-weight: 500">
                          PROJECT NAME
                        </h4>
                        <h3>OBINZE Crowdsale IV</h3>
                      </div>
                      <h4 class="d-flex justify-space-between mb-3">
                        <span style="font-weight: 500">
                          MONTH<br />
                          <b>APRIL</b>
                        </span>

                        <span style="font-weight: 500">
                          YEAR<br />
                          <b>2022</b>
                        </span>
                      </h4>
                      <hr />

                      <v-btn
                        class="mt-4 white--text"
                        color="#199958"
                        style="border-radius: 10px"
                        block
                        x-large
                        @click="buyModal =true"
                        ><v-icon>mdi-cash</v-icon>Buy Solar cells</v-btn
                      >
                    </v-card>
                  </div>
                </div>
              </v-tab-item>

              <v-tab-item>
                <div class="mt-6 ma-2">
                  <div class="mb-7">


                    <!--Web view for my projects -->

                     <v-card style="border-radius: 10px" class="hidden-md-and-down pa-8 mb-6">
                      <h2
                        style="color: #006838; border-bottom: 1px solid black"
                      >
                        New Owerri Town
                      </h2>
                      <div class=" d-flex mt-4 text-center">
                              <div class="pa-4 text-center">
                                <v-img
                                  src="../../assets/images/Vector.svg"
                                  style="margin: auto"
                                  height="30px"
                                  width="30px"
                                />
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 12px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  TOTAL AMOUNT OF <br>CELLS  IN PROJECT
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  400
                                </p>
                              </div>

                              <div class="pa-4 text-center">
                                <v-icon x-large
                                  >mdi-tag-multiple-outline</v-icon
                                >
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 14px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  CELL PRICE (NGN)
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  200.50
                                </p>
                              </div>
                            
                                <div class="pa-4 mt-3 text-center">
                                  <v-img
                                    src="../../assets/images/cells.svg"
                                    style="margin: auto"
                                    height="30px"
                                    width="30px"
                                  />
                                  <p
                                    class="mt-2"
                                    style="
                                      font-size: 12px;
                                      margin: 0px;
                                      padding: 0px;
                                    "
                                  >
                                    AMOUNT OF CELLS BOUGHT
                                  </p>
                                  <p
                                    style="
                                      margin: 0px;
                                      padding-top: 10px;
                                      font-size: 19px;
                                    "
                                    class="font-weight-bold"
                                  >
                                    75
                                  </p>
                                </div>

                                <div class="pa-4 text-center">
                                  <v-icon x-large>mdi-trending-up</v-icon>
                                  <p
                                    class="mt-2"
                                    style="
                                      font-size: 13px;
                                      margin: 0px;
                                      padding: 0px;
                                    "
                                  >
                                    CELL PROFIT (NGN)
                                  </p>
                                  <p
                                    style="
                                      margin: 0px;
                                      padding-top: 13px;
                                      font-size: 19px;
                                    "
                                    class="font-weight-bold"
                                  >
                                    200.50
                                  </p>
                                </div>

                              <div class="pa-4 text-center">
                                <v-img
                                  src="../../assets/images/Piechart.svg"
                                  style="margin: auto"
                                  height="30px"
                                  width="30px"
                                />
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 12px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  DIVIDEND PAID <br />
                                  (NGN)
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  30
                                </p>
                              </div>


                              <div class="pa-4  text-center">
                                <v-icon x-large
                                  >mdi-credit-card-clock-outline</v-icon
                                >
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 12px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  LAST PAID ON (DD/MM/YYYY)
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  02/08/2022
                                </p>
                              </div>
                              </div>
                     
                     
                    </v-card>




                    <!--Mobile view formy projects -->
                    <v-card style="border-radius: 10px" class="hidden-lg-and-up pa-8">
                      <h2
                        class="text-center"
                        style="color: #006838; border-bottom: 1px solid black"
                      >
                        New Owerri Town
                      </h2>
                      <div class="mt-4 text-center">
                        <div class="mt-6">
                          <v-row>
                            <v-col>
                              <div class="text-center">
                                <v-img
                                  src="../../assets/images/Vector.svg"
                                  style="margin: auto"
                                  height="30px"
                                  width="30px"
                                />
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 12px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  TOTAL AMOUNT OF CELLS IN PROJECT
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  400
                                </p>
                              </div>
                            </v-col>

                            <v-col>
                              <div class="column text-center">
                                <v-icon x-large
                                  >mdi-tag-multiple-outline</v-icon
                                >
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 14px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  CELL PRICE (NGN)
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  200.50
                                </p>
                              </div>
                            </v-col>
                          </v-row>

                          <div class="my-10">
                            <v-row>
                              <v-col>
                                <div class="text-center">
                                  <v-img
                                    src="../../assets/images/cells.svg"
                                    style="margin: auto"
                                    height="30px"
                                    width="30px"
                                  />
                                  <p
                                    class="mt-2"
                                    style="
                                      font-size: 12px;
                                      margin: 0px;
                                      padding: 0px;
                                    "
                                  >
                                    AMOUNT OF CELLS BOUGHT
                                  </p>
                                  <p
                                    style="
                                      margin: 0px;
                                      padding-top: 10px;
                                      font-size: 19px;
                                    "
                                    class="font-weight-bold"
                                  >
                                    75
                                  </p>
                                </div>
                              </v-col>

                              <v-col>
                                <div class="column text-center">
                                  <v-icon x-large>mdi-trending-up</v-icon>
                                  <p
                                    class="mt-2"
                                    style="
                                      font-size: 13px;
                                      margin: 0px;
                                      padding: 0px;
                                    "
                                  >
                                    CELL PROFIT (NGN)
                                  </p>
                                  <p
                                    style="
                                      margin: 0px;
                                      padding-top: 13px;
                                      font-size: 19px;
                                    "
                                    class="font-weight-bold"
                                  >
                                    200.50
                                  </p>
                                </div>
                              </v-col>
                            </v-row>
                          </div>

                          <v-row>
                            <v-col>
                              <div class="text-center">
                                <v-img
                                  src="../../assets/images/Piechart.svg"
                                  style="margin: auto"
                                  height="30px"
                                  width="30px"
                                />
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 12px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  DIVIDEND PAID <br />
                                  (NGN)
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  30
                                </p>
                              </div>
                            </v-col>

                            <v-col>
                              <div class="column text-center">
                                <v-icon x-large
                                  >mdi-credit-card-clock-outline</v-icon
                                >
                                <p
                                  class="mt-2"
                                  style="
                                    font-size: 12px;
                                    margin: 0px;
                                    padding: 0px;
                                  "
                                >
                                  LAST PAID ON (DD/MM/YYYY)
                                </p>
                                <p
                                  style="
                                    margin: 0px;
                                    padding-top: 10px;
                                    font-size: 19px;
                                  "
                                  class="font-weight-bold"
                                >
                                  02/08/2022
                                </p>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </v-card>

                  </div>
                  <div>
                    <v-card class="pa-7" style="border-radius: 10px">
                      <h2 style="color: #ff7b00">Project History</h2>
                      <div class="mt-2">
                        <v-data-table
                          :headers="headers"
                          :items="desserts"
                          :items-per-page="5"
                          class="elevation-1"
                          color="#FF7B00"
                        ></v-data-table>
                      </div>
                    </v-card>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </v-col>
      </v-row>
      <v-overlay :value="loading">
        <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
      </v-overlay>

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
      price:200,
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
      loading:"loading"
    }),
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchProjects")
  },
  methods: {
    goBack() {
      this.$route.go(-1);
    },
    goProject(i){
      this.$router.push('/project/'+i);
    },
    closeModal(){
      this.buyModal = false;
    }
  },
};
</script>
