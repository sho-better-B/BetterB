<template>
  <div class="x">
    <nav id="x"> 
      <router-link to="/push">Push Dumbbell</router-link>   |
      <router-link to="/pull">Pull Dumbbell</router-link>  |
      <router-link to="/legs">Legs Dumbbell</router-link>    |
      <router-link to="/core">Core</router-link>
    </nav>
    <h1>Legs</h1>
    <Legs msg="welcome to your vue +Typescript App"/>
  </div>
</template>

<script lang="ts">
// import {Options,Vue} from "vue-class-component" 

import { Component, Vue } from "vue-property-decorator";
import Legs from "@/components/legs.vue";

@Component({
  components: {
    Legs,
  },
})
export default class legsView extends Vue {}
</script>
<style>
h1{
  font-family: 'Tahoma';
}
#x {
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
  background-color: rgb(60, 90, 86);
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
}
#x a {
  font-weight: bold;
  color: #2c3e50;
}


#x a.router-link-exact-active {
  color: #42b983;
}
</style>
