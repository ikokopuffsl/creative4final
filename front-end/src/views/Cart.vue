<template>
  <div>
    <div v-if="user">
      <NavBar />
      <h1>YOUR CART</h1>
      <div v-if="cartGet.length === 0">
        <p>Empty Cart - Go Get Some Sweets!</p>
      </div>
      <CartList v-else :cart="cartGet" />
      <Footer />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
export default {
  name: "Cart",
  components: {
    CartList,
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
    cartGet() {
      return this.$root.$data.cart;
    },
    user() {
      return this.$root.$data.user;
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
p {
  border: 2px solid #f18904;
  padding: 50px;
  color: #f18904;
  font-size: 30px;
  font-family: "Bangers", cursive;
  text-align: center;
}
</style>
