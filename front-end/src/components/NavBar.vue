<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="custom">
      <b-navbar-brand id="brand" href="#">
        <router-link to="/"> <img src="/images/logo.png"/></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <span @click="logout">
              Logout
            </span>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/brownies">Brownies</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/cookies">Cookies</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/cart">
              <div class="menu-item">
                <p>Items</p>
              </div>
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right> -->
        <!-- Using 'button-content' slot -->
        <!-- <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
    <div id="app">
      <div id="menu">
        <!-- <div id="left-side">
          <div class="menu-item browse">
            <button @click="logout" class="pure-button pure-button-primary">
              Logout
            </button>
          </div>
        </div>
        <div id="brand">
          <router-link to="/"> <img src="/images/logo.png"/></router-link>
        </div>
        <div id="side">
          <div class="menu-item browse">
            <router-link to="/brownies">Brownies</router-link>
          </div>
          <div class="menu-item browse">
            <router-link to="/cookies">Cookies</router-link>
          </div>
          <div class="menu-item browse">
            <router-link to="/about">About</router-link>
          </div>

          <router-link to="/cart">
            <div class="menu-item">
              <p>Items</p>
            </div>
          </router-link>
        </div> -->
      </div>
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NavBar",
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
* {
  box-sizing: border-box;
}

.navbar > button {
  width: 100px;
  height: 100px;
  border: 10px solid white;
}
.nav-item > a > a {
  color: white !important;
  font-family: "Bangers", cursive;
  font-size: 40px;
}
.nav-item > a > span {
  color: white !important;
  font-family: "Bangers", cursive;
  font-size: 40px;
}
.bg-custom {
  background-color: #f49f05 !important;
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
