<template>
  <div id="app">
    <nav class="nav">
      <h1>Better-B</h1>
      <br />
      <router-link to="/"><h1>Home</h1></router-link>
      <router-link to="/about"><h1>About</h1></router-link>
      <router-link to="/training"><h1>Training</h1></router-link>
      <router-link to="/diet"><h1>Diet</h1></router-link>
      <router-link to="/blogs"><h1>Blogs</h1></router-link>
      <router-link to="/signIn"><h1>Sign In</h1></router-link>
      <router-link to="/signUp"><h1>Sign Up</h1></router-link>

      <router-link to="/profile">
        <img
          src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
          alt=""
        />
      </router-link>
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
body {
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #384552;
}

/* nav bar css */
nav h1 {
  position: relative;

  float: left;
  color: #f2f2f2;
  padding-left: 10px;
  text-decoration: none;
  font-size: 20px;
  padding-right: 100px;
  text-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  height: 70px;
  padding-top: 30px;
  margin-top: 0;
}
nav {
  position: relative;

  margin-bottom: 40px;
  overflow: hidden;
  background-image: linear-gradient(
    to top,
    #211b1c 0%,
    #150f10 52%,
    #0a0b0e 100%
  );
  width: 100%;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
nav h1:hover {
  position: relative;

  text-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  cursor: pointer;
}

nav :hover {
  position: relative;

  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
img {
  position: relative;
  margin-top: 20%;
  width: 70px;
  height: 70px;
}
</style>
