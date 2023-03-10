import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2';
import Flutterwave from 'vue-flutterwave'
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'
import store from './store'

Vue.config.productionTip = false

const options = {
  confirmButtonColor: '#2d860f',
  cancelButtonColor: '#000000',
};

Vue.use(VueSweetalert2,options)
Vue.use(Flutterwave, { publicKey: 'FLWPUBK-7162dd26aa9cc5bc0b4d5df920486832-X' });
Vue.use(VueMeta);


new Vue({
  vuetify,
  router,
  store,
  VueMeta,
  render: h => h(App)
}).$mount('#app')
