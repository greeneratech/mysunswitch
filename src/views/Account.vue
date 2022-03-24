<template>
  <v-app>
    <UserMenu />
    <v-main class="pa-8 mb-8">
      <v-row no-gutters>
        <v-col class="hidden-md-and-down" lg="2" md="2">
          <SideNav :url="url" />
        </v-col>

        <v-col lg="9" md="9" class="mx-auto">
          <h1>Account</h1>
          <div>
            <div class="rightSpace">
              <v-card
                height="650px"
                style="border-radius: 10px"
                class="px-6 py-7"
                max-width="600px"
              >
              <v-overlay :value="loading">
        <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
      </v-overlay>
                <p style="width: 95%" class="d-flex pa-3 justify-center">
                  <v-icon class="mr-2">mdi-information-outline</v-icon>These
                  details can only be updated ONCE, afterwards they are changed
                  with approval from the Admin
                </p>

                <v-card
                  class="py-6 px-6"
                  style="margin: 0px 0px 24px 0px; border-radius: 20px"
                >
                  <div>
                    <label>Bank Name</label>
                    <br />
                    <v-select
                      style="height: 80px;border-bottom:0px"
                      color="#006838"
                      :items="banks"
                      label="Select your bank"
                      v-model="bank"
                      item-value="code"
                      item-text="name"
                      solo
                    />
                  </div>
                </v-card>

                 <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Account Number</label>
                       <br/>
                      <input
                        type="text"
                        placeholder="Enter Account Number"
                        v-model="accountNumber"
                        style="width:100%"
                        @keyup="checkBank()"
                      />
                    </div>
                  </v-card>

                  <v-card
                    class="py-6 px-6"
                    style="margin: 0px 0px 24px 0px; border-radius: 20px"
                  >
                    <div>
                      <label>Account Name</label>
                       <br/>
                      <input
                        type="text"
                        placeholder="Enter Account Number"
                        v-model="accountName"
                        style="width:100%"
                        readonly
                        
                      />
                    </div>
                  </v-card>

                  <v-btn color="#828282" style="border-radius:10px" class="white--text" x-large block >
                      Submit
                  </v-btn>
              </v-card>
              
            </div>
          </div>
        </v-col>
      </v-row>
    </v-main>

    <!-- My Models -->
    <v-dialog
      class="pa-3 mx-auto"
      max-width="400px"
      height="400px"
      v-model="modal"
    >
      <Deposit />
    </v-dialog>
  </v-app>
</template>

<script>
import SideNav from "../components/SideNav.vue";
import UserMenu from "../components/UserMenu.vue";
import { mapState } from "vuex";
import Deposit from "../components/Payments/Deposit.vue";
import axios from 'axios'

export default {
  components: {
    SideNav,
    UserMenu,
    Deposit,
  },
  data() {
    return {
      walletBalance: 0,
      url: window.location.pathname.slice(1),
      capBalance: 0,
      projectName: "Power Up Eziobodo",
      startDate: "17/05/2021",
      endDate: "17/06/2021",
      drawer: false,
      mini: false,
      modal: false,
      loading:false,
      accountName:"",
      accountNumber:"",
      banks: [
        { id: "1", name: "Access Bank", code: "044" },
        { id: "2", name: "Citibank", code: "023" },
        { id: "3", name: "Diamond Bank", code: "063" },
        { id: "4", name: "Dynamic Standard Bank", code: "" },
        { id: "5", name: "Ecobank Nigeria", code: "050" },
        { id: "6", name: "Fidelity Bank Nigeria", code: "070" },
        { id: "7", name: "First Bank of Nigeria", code: "011" },
        { id: "8", name: "First City Monument Bank", code: "214" },
        { id: "9", name: "Guaranty Trust Bank", code: "058" },
        { id: "10", name: "Heritage Bank Plc", code: "030" },
        { id: "11", name: "Jaiz Bank", code: "301" },
        { id: "12", name: "Keystone Bank Limited", code: "082" },
        { id: "13", name: "Providus Bank Plc", code: "101" },
        { id: "14", name: "Polaris Bank", code: "076" },
        { id: "15", name: "Stanbic IBTC Bank Nigeria Limited", code: "221" },
        { id: "16", name: "Standard Chartered Bank", code: "068" },
        { id: "17", name: "Sterling Bank", code: "232" },
        { id: "18", name: "Suntrust Bank Nigeria Limited", code: "100" },
        { id: "19", name: "Union Bank of Nigeria", code: "032" },
        { id: "20", name: "United Bank for Africa", code: "033" },
        { id: "21", name: "Unity Bank Plc", code: "215" },
        { id: "22", name: "Wema Bank", code: "035" },
        { id: "23", name: "Zenith Bank", code: "057" },
      ],
    };
  },
  computed: {
    ...mapState({
      user: "user",
    }),
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
  methods:{
      checkBank() {
      if (this.accountNumber.length == 10) {
        this.resolveBank();
      }
    },
    resolveBank() {
      this.opacity = 1
      this.loading = true;
      axios({
        method: "post",
        url: `https://maylancer.org/api/nuban/api.php?account_number=${this.accountNumber}&bank_code=${this.bank}`,
      }).then((response) => {
        console.log(response);
        this.accountName = response.data.account_name;
        this.loading = false;
      });
    },
  }
};
</script>

<style>
.gradient {
  background: linear-gradient(101.06deg, #27ae60 1.67%, #006838 93.52%);
  border-radius: 10px !important;
}

.walletBalance {
  font-size: 36px;
  color: white;
}

.radius6 {
  border-radius: 6px;
}
.orangeText {
  color: #ff7b00 !important;
  font-size: 18px !important;
  margin: 0px !important;
  padding: 0px !important;
}
.greenDate {
  color: #006838 !important;
  font-size: 23px !important;
  margin: 0px !important;
  padding: 0px !important;
}

.v-navigation-drawer {
  border: 40px !important;
}
</style>
