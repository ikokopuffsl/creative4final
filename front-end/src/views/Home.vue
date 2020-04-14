<template>
  <div>
    <div v-if="user">
      <NavBar />
      <BakeryHome />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Login from "@/components/Login.vue";
import BakeryHome from "@/components/BakeryHome.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "Home",
  components: {
    Login,
    BakeryHome,
    NavBar
  },
  async created() {
    try {
      let response = await axios.get("/api/users");
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#left-side {
  font-size: 30px;
  display: flex;
  justify-content: space-evenly;
  font-family: "Bangers", cursive;
}
#side {
  font-size: 30px;
  grid-area: side;
  display: flex;
  justify-content: space-evenly;
  font-family: "Bangers", cursive;
}
#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
