<template>
  <div>
    <div v-if="user">
      <NavBar />
      <h1>YOUR CART</h1>
      <div v-if="items.length === 0">
        <p>Empty Cart - Go Get Some Sweets!</p>
      </div>
      <div v-else class="wrapper">
        <div class="products">
          <div class="product" v-for="item in items" :key="item.id">
            <div class="info">
              <h1>{{ item.name }}</h1>
            </div>
            <div class="image">
              <img :src="'/images/products/' + item.image" />
            </div>
            <div class="price">
              <h2>{{ item.price }}</h2>
              <button @click="removeFromCart(item)" class="auto">
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Login from "../components/Login.vue";
import axios from "axios";
export default {
  name: "Cart",
  components: {
    NavBar,
    Footer,
    Login
  },
  data() {
    return {
      country: "",
      items: []
    };
  },
  created() {
    this.cartGet();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async cartGet() {
      try {
        let response = await axios.get("/api/items/a");
        this.items = response.data.items;
        return true;
      } catch (error) {
        console.log("GET CART FRONT ERROR", error);
      }
    },
    async removeFromCart(product) {
      try {
        let response = await axios.delete("/api/items/" + product.id);
        this.items = response.data.items;
        this.cartGet();
        return true;
      } catch (error) {
        console.log(error);
      }
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

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border-radius: 25px;
  background-color: #f49f05;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.product img {
  border: 2px solid #f49f05;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #f49f05;
  color: white;
  font-family: "Bangers", cursive;
  padding: 10px 30px;
  height: 80px;
  border-radius: 25px;
}

.info h1 {
  font-size: 20px;
  border: none;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}

.price {
  display: flex;
  font-family: "Bangers", cursive;
}

button {
  height: 50px;
  background: #f26897;
  color: white;
  border: none;
  font-family: "Bangers", cursive;
}

.auto {
  margin-left: auto;
}
</style>
