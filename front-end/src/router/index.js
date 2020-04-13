import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Brownies from "../views/Brownies.vue";
import Cookies from "../views/Cookies.vue";
import About from "../views/About.vue";
import Cart from "../views/Cart.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/brownies",
    name: "Brownies",
    component: Brownies
  },
  {
    path: "/cookies",
    name: "Cookies",
    component: Cookies
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
