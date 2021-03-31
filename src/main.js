import Vue from 'vue'
import App from './App.vue'
import $ from "jquery"
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.config.productionTip = false


new Vue({
  $,
  BootstrapVue,
  render: h => h(App),
}).$mount('#app')
