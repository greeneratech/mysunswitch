import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router/index';
import { apiURL, apiHeaders } from './configs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    users: [],
    name: '',
    projects: '',
    loading: true,
    history: '',
    single: '',
    projectLoading: false,
    allProjects: [],
    payments: [],
    paymentLoading: false,
    faqLoading: false,
    faqs: [],
    disclaimerLoading: false,
    disclaimers: [],
    termsLoading: false,
    teamLoading: false,
    terms: [],
    team: [],
    banks: [],
    bankloading: false,
  },
  getters: {},
  mutations: {
    fetchUser(state, value) {
      console.log(state.user);
      if (
        sessionStorage.getItem('vuex') != null ||
        sessionStorage.getItem('vuex') != undefined
      ) {
        state.user = JSON.parse(sessionStorage.getItem('vuex'));
      } else {
        axios({
          method: 'GET',
          url: apiURL('user'),
          headers: apiHeaders.auth(),
        })
          .then((response) => {
            console.log(response);
            sessionStorage.setItem('vuex', JSON.stringify(response.data.user));
          })
          .catch((error) => {
            console.log(error);
            sessionStorage.removeItem('vuex');
            router.push('/login');
          });
        state.user = value;
        sessionStorage.setItem('vuex', JSON.stringify(value));
      }
    },

    fetchUserData(state, value) {
      if (
        sessionStorage.getItem('vuex') != null ||
        sessionStorage.getItem('vuex') != undefined
      ) {
        state.user = JSON.parse(sessionStorage.getItem('vuex'));
      } else {
        axios({
          method: 'GET',
          url: apiURL('dashboard'),
          headers: {
            Authorization: 'Bearer ' + value,
          },
        }).then((response) => {
          sessionStorage.setItem('vuex', JSON.stringify(response.data.user));
          state.user = response.data.user;
        });
      }
    },

    fetchBusinessUser(state, value) {
      console.log(state.user);
      if (
        sessionStorage.getItem('vuex') != null ||
        sessionStorage.getItem('vuex') != undefined
      ) {
        state.user = JSON.parse(sessionStorage.getItem('vuex'));
      } else {
        axios({
          method: 'GET',
          url: apiURL('business'),
          headers: apiHeaders.auth(),
        })
          .then((response) => {
            console.log(response);
            sessionStorage.setItem('vuex', JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
            sessionStorage.removeItem('vuex');
            router.push('/login');
          });
        state.user = value;
        sessionStorage.setItem('vuex', JSON.stringify(value));
      }
    },

    adminUsers(state, value) {
      if (
        sessionStorage.getItem('users') == null ||
        sessionStorage.getItem('vuex') != undefined
      ) {
        sessionStorage.setItem('users', JSON.stringify(value));
      } else {
        state.users = JSON.parse(sessionStorage.getItem('users'));
      }
    },

    fetchUserAdmin() {
      axios({
        method: 'GET',
        url: apiURL('admin'),
        headers: apiHeaders.auth(),
      })
        .then((response) => {
          console.log(response);
          sessionStorage.setItem('users', JSON.stringify(response.data.users));
        })
        .catch((error) => {
          console.log(error);
          sessionStorage.removeItem('vuex');
          router.push('/login');
        });
    },

    fetchFaqs(state) {
      state.faqLoading = true;
      axios({
        method: 'GET',
        url: apiURL('admin/faqs'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.faqLoading = false;
        console.log(state.faqLoading);
        state.faqs = response.data.faqs;
      });
    },

    fetchBanks(state) {
      state.bankloading = true;
      axios({
        method: 'GET',
        url: apiURL('admin/userBank'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.banks = response.data.userBank;
        console.log(response);
        console.log(state.bankloading);
        state.bankloading = false;
      });
    },

    fetchDisclaimers(state) {
      state.disclaimerLoading = true;
      axios({
        method: 'GET',
        url: apiURL('admin/disclaimers'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.disclaimerLoading = false;
        console.log(response);
        state.disclaimers = response.data.disclaimers;
      });
    },

    fetchTandC(state) {
      state.termsLoading = true;
      axios({
        method: 'GET',
        url: apiURL('admin/terms'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.termsLoading = false;
        console.log(response);
        state.terms = response.data.terms;
      });
    },

    fetchTeam(state) {
      state.teamLoading = true;
      axios({
        method: 'GET',
        url: apiURL('admin/team'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.teamLoading = false;
        console.log(response);
        state.team = response.data.teams;
      });
    },

    fetchPayments(state) {
      state.paymentLoading = true;
      axios({
        method: 'GET',
        url: apiURL('admin/userPayments'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        console.log(response);
        state.payments = response.data;
        state.paymentLoading = false;
      });
    },

    fetchProjects(state) {
      state.loading = true;
      axios({
        method: 'GET',
        url: apiURL('user/investments/all'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.projects = response.data.data;
        state.projects = state.projects.reverse();
        state.loading = false;
      });
    },

    fetchSingleProject(state, i) {
      state.loading = true;
      state.single = state.projects
        .filter((project) => (project.id = i))
        .slice(0, 1);
      state.loading = false;
    },

    fetchMyProjects(state) {
      state.loading = true;
      axios({
        method: 'GET',
        url: apiURL('user/investments/mine'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.projects = response.data.data;
      });
    },

    fetchAllProjects(state) {
      state.projectLoading = true;
      axios({
        method: 'GET',
        url: apiURL('admin/investments/get'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        console.log(response);
        state.allProjects = response.data.data.reverse();
        state.projectLoading = false;
      });
    },

    sortByName(state) {
      state.users.sort((a, b) =>
        a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
      );
    },

    sortByBankName(state) {
      state.banks.sort((a, b) =>
        a.user.email > b.user.email ? 1 : b.user.email > a.user.email ? -1 : 0
      );
    },

    sortByEmail(state) {
      state.payments.sort((a, b) =>
        a.user.email > b.user.email ? 1 : b.user.email > a.user.email ? -1 : 0
      );
    },

    fetchHistory(state) {
      state.loading = true;
      axios({
        method: 'GET',
        url: apiURL('user/history'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.history = response.data.data.reverse();

        state.loading = false;
      });
    },

    fetchBusinessHistory(state) {
      state.loading = true;
      axios({
        method: 'GET',
        url: apiURL('business/history'),
        headers: apiHeaders.contentTypeAndAuth(),
      }).then((response) => {
        state.history = response.data.data.reverse();

        state.loading = false;
      });
    },
  },
  actions: {
    fetchUser: (context, value) => {
      context.commit('fetchUser', value);
    },

    fetchUserData: (context, value) => {
      context.commit('fetchUserData', value);
    },

    fetchBusinessUser: (context, value) => {
      context.commit('fetchBusinessUser', value);
    },
    fetchUserAdmin: (context, value) => {
      context.commit('fetchUserAdmin', value);
    },
    adminUsers: (context, value) => {
      context.commit('adminUsers', value);
    },
    sortByName: (context) => {
      context.commit('sortByName');
    },
    sortByBankName: (context) => {
      context.commit('sortByBankName');
    },
    sortByEmail: (context) => {
      context.commit('sortByEmail');
    },
    fetchProjects(context) {
      context.commit('fetchProjects');
    },
    fetchAllProjects(context) {
      context.commit('fetchAllProjects');
    },
    fetchPayments(context) {
      context.commit('fetchPayments');
    },
    fetchFaqs(context) {
      context.commit('fetchFaqs');
    },
    fetchBanks(context) {
      context.commit('fetchBanks');
    },
    fetchDisclaimers(context) {
      context.commit('fetchDisclaimers');
    },
    fetchTandC(context) {
      context.commit('fetchTandC');
    },
    fetchTeam(context) {
      context.commit('fetchTeam');
    },
    fetchSingleProject(context, i) {
      context.commit('fetchSingleProject', i);
    },
    fetchHistory(context) {
      context.commit('fetchHistory');
    },
    fetchBusinessHistory(context) {
      context.commit('fetchBusinessHistory');
    },
  },
});
