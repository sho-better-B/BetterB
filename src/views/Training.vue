<template>
  <div id="app">
    <nav id="x"> 
      <router-link to="/push">Push Dumbbell</router-link>   |
      <router-link to="/pull">Pull Dumbbell</router-link>  |
      <router-link to="/legs">Legs Dumbbell</router-link>    |
      <router-link to="/core">Core</router-link>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    font-weight: bold;
  color: #2c3e50;
}

#x {
  padding: 30px;
  background-color: rgb(39, 10, 28);
  margin-top: 20px;
  margin-left: 400px;
  margin-right: 400px;
}
#x a {
  font-weight: bold;
  color: #023f7c;
}


#x a.router-link-exact-active {
  color: #0033ff;
}
</style>
