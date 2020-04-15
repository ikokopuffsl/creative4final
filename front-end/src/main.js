import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mockc from "./mock-cookies.js";
import mockb from "./mock-brownies.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

let data = {
  user: null,
  products: [mockc, mockb],
  cart: []
};

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount("#app");
