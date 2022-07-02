<template>
  <v-app>
    <UserMenu />
    <v-main class="pa-8 mb-8">
      <v-row no-gutters>
        <v-col class="hidden-md-and-down" lg="3" md="3">
          <SideNav :url="url" />
        </v-col>

        <v-col lg="8" md="8" class="mx-auto">
          <v-card class="rounded-lg pb-7">
            <h2 style="color: white; background: #006838; padding: 10px">
              Manage FAQs
            </h2>
            <!-- <div class="d-flex pa-5">
              <v-text-field v-model="search" label="Search" color="#006838" class="rounded-xl" outlined prepend-inner-icon="mdi-magnify"/>
              <v-btn text class="mt-2"><v-icon>mdi-filter</v-icon>Sort by</v-btn>
              <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field  v-bind="attrs"
          v-on="on" color="#006838" outlined readonly class="rounded-xl" append-icon="mdi-dots-vertical"/>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
              </div> -->
            <div class="pa-5 text-right">
              <v-btn
                @click="addfaq = true"
                large
                color="#199958"
                class="white--text rounded-lg"
                ><v-icon class="mr-3">mdi-plus</v-icon>Add New FAQ</v-btn
              >
            </div>
            <div class="pa-5">
            <v-expansion-panels>
              <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
                <v-expansion-panel-header>
                  {{ faq.question }} 
                  <div class="d-flex justify-end">
                
                   <v-btn @click="editFaq(faq)" small text><v-icon small>mdi-pencil</v-icon>Edit </v-btn>
                   <v-btn @click="areYouSure(faq)" small text color="#EB5757"><v-icon small>mdi-delete-outline</v-icon>Delete</v-btn>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ faq.answer }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            </div>
          </v-card>
          <div class="mt-5 text-right">
            <v-btn
              x-large
              class="rounded-lg black--text"
              color="white"
              @click="refresh"
              ><v-icon class="mr-6">mdi-refresh</v-icon>Refresh</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-main>
    <v-overlay v-if="faqLoading" class="text-center">
      <v-progress-circular indeterminate :size="50"></v-progress-circular>
      <p>Loading...</p>
    </v-overlay>
    <v-dialog width="400px" v-model="dialog">
      <v-card
        height="190px"
        width="400px"
        class="pt-6 text-center pa-3 white--text"
        color="#006838"
      >
        <h2>Delete</h2>
        <p>{{ text }}</p>
        <v-btn :loading="deleteLoading" @click="deleteFaq()">Yes</v-btn>
        <v-btn @click="dialog = false" class="ml-3" outlined>No</v-btn>
      </v-card>
    </v-dialog>

    <v-dialog fullscreen v-model="addfaq">
      <AddFaq @closeFaq="closeFaq"/>
    </v-dialog>

    <v-dialog fullscreen v-model="editfaq">
      <EditFaq :singleFaq="singleFaq" @closeFaq="closeFaq" />
    </v-dialog>


  </v-app>
</template>

<script>
import SideNav from "../../components/AdminSideNav.vue";
import UserMenu from "../../components/AdminUserMenu.vue";
import { mapState } from "vuex";
import axios from "axios";
import AddFaq from "../../components/AddFaq.vue";
import EditFaq from "../../components/EditFaq.vue"

export default {
  components: {
    SideNav,
    UserMenu,

    AddFaq,
    EditFaq
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
      buyModal: false,
      usage: 60,
      items: [{ title: "By Name" }, { title: "By recent activities" }],
      suspendLoading: false,
      search: "",
      singleFaq: "",
      deleteLoading: false,
      text: "",
      dialog: false,
      projectView: false,
      projectEdit: false,
      addfaq: false,
      editfaq:false
    };
  },
  computed: {
    ...mapState({
      user: "user",
      users: "users",
      allProjects: "allProjects",
      loading: "projectLoading",
      faqs: "faqs",
      faqLoading: "faqLoading",
    }),

    filteredUsers() {
      const searchUser = this.search.toLowerCase().trim();
      const users = this.users;
      if (!users) return this.users;

      return this.users.filter(
        (user) => user.firstName.toLowerCase().indexOf(searchUser) > -1
      );
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("adminUsers");
    // if(this.allProjects.length == 0){
    this.$store.dispatch("fetchFaqs");
    //}
     if(localStorage.getItem('token') == null){
          this.$router.push('/admin/login')
        }
  },
  methods: {
    refresh() {
      alert("page refreshed");
    //   this.$store.dispatch("fetchUser");
      this.$store.dispatch("fetchFaqs");
    },


    editFaq(faq) {
      this.editfaq = true;
      this.singleFaq = faq;
    },

    areYouSure(faq){
        this.singleFaq = faq
        this.dialog = true
        this.text = "Are you sure you want to delete " + faq.question + "?";
    },

   

    deleteFaq() {
      this.deleteLoading = true;
      axios({
        method: "DELETE",
        url:
          "https://greeneratech.herokuapp.com/api/admin/faqs/delete/" +
          this.singleFaq.id,
        headers: {
          ContentType: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => {
          console.log(res);
          this.deleteLoading = false;
          this.dialog = false;
          this.$store.dispatch("fetchFaqs");
          this.$swal({
            title: "Deleted!",
            text: "FAQ has been deleted successfully",
            icon: "success",
            button: "Ok",
          });
        })
        .catch((error) => {
          this.deleteLoading = false;
          this.dialog = false;
          this.$swal({
            title: "Error!",
            text: error.message,
            icon: "error",
            button: "Ok",
          });
        });
    },

    closeFaq() {
      this.editfaq = false;
      this.addfaq = false
    },
    closeView() {
      this.projectView = false;
    },

  
  },
};
</script>

<style>
@media screen and (min-width: 1000px) {
  .businessCapValue {
    font-size: 48px;
  }
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
  .centerBuySolar {
    width: 35%;
    margin: auto;
  }

  .projectImage {
    border-radius: 10px;
    height: 300px !important;
    width: 100% !important;
  }
  .projectDescription {
    width: 70%;
  }
  .flexLarge {
    display: flex;
  }
}

@media screen and (max-width: 900px) {
  .centerBuySolar {
    width: 90%;
    margin: auto;
  }

  .projectImage {
    border-radius: 10px;
    height: 120px !important;
    width: 100% !important;
  }
}
</style>
