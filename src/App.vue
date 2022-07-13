<template>
  <div id="app">
    <nav class="nav">
      <h1>Better-B</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/workout">workout</router-link>|
      <router-link to="/diet">Diet</router-link>|
      <router-link to="/blogs">Blogs</router-link> |
      <router-link to="/signIn">sign In</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

<style>

<<<<<<< HEAD
=======
/* .nav {
  margin-left: 420px;
} */
>>>>>>> 34c5482ac4172034b8467f857cd9e5c3dc682b57
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgb(18, 129, 114);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
