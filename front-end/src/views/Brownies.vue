<template>
  <div>
    <div v-if="user">
      <NavBar />
      <h1>Brroowwnniieess</h1>
      <div class="container-fluid text-size">
        <BakeryList :products="products" />
      </div>
      <Footer />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import BakeryList from "../components/BakeryList.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
export default {
  name: "Brownies",
  components: {
    BakeryList,
    NavBar,
    Footer,
    Login
  },
  data() {
    return {
      country: ""
    };
  },
  computed: {
    products() {
      return this.$root.$data.products[1];
    },
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
};
</script>
<style scoped>
h1 {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
}
img {
  height: 400px;
  width: 100%;
  border-bottom: 2px solid #f18904;
}

.col {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.item {
  border: 2px solid #f18904;
  text-align: center;
  margin: 20px;
}
p {
  color: #233c67;
  margin: 20px;
  font-size: 20px;
  font-family: "Bangers", cursive;
}
div > p {
  font-size: 35px;
}
</style>
