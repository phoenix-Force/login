import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./route.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)




Vue.use(BootstrapVue);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
