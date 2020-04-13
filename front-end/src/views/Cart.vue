<template>
  <div>
    <NavBar />
    <h1>YOUR CART</h1>
    <div v-if="cartGet.length === 0">
      <p>Empty Cart - Go Get Some Sweets!</p>
    </div>
    <CartList v-else :cart="cartGet" />
  </div>
</template>

<style scoped>
h1 {
  border: 2px solid #f18904;
  padding: 10px;
  color: white;
  background-color: #f49f05;
  font-family: "Bangers", cursive;
  text-align: center;
}
p {
  border: 2px solid #f18904;
  padding: 50px;
  color: #f18904;
  font-size: 30px;
  font-family: "Bangers", cursive;
  text-align: center;
}
</style>

<script>
import CartList from "../components/CartList.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Cart",
  components: {
    CartList,
    NavBar
  },
  data() {
    return {
      country: ""
    };
  },
  computed: {
    cartGet() {
      return this.$root.$data.cart;
    }
  }
};
</script>
