<template>
  <div>
    <NavBar />
    <h1>Coooooooookkkiiieeeesss</h1>
    <div class="container-fluid text-size">
      <BakeryList :products="products" />
    </div>
  </div>
</template>

<script>
import BakeryList from "../components/BakeryList.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "Cookies",
  components: {
    BakeryList,
    NavBar
  },
  data() {
    return {
      country: ""
    };
  },
  computed: {
    products() {
      return this.$root.$data.products[0];
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
