import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import axios from 'axios'
import VueRouter from 'vue-router'
// import axios from 'axios'
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueSweetalert2,);
Vue.prototype.$axios= axios;
axios.defaults.baseURL="https://crudcrud.com/api/2377455954c344398141a5851008b02a/";
export const EventBus = new Vue();
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
