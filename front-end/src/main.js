import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mockc from "./mock-cookies.js";
import mockb from "./mock-brownies.js";

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
