<!-- <template>
  <div class="x">
    <nav> 
      <router-link to="/push"><h1 class="h1">Push Dumbbell</h1></router-link>   |
      <router-link to="/pull"><h1 class="h1">Pull Dumbbell</h1></router-link>  |
      <router-link to="/legs"><h1 class="h1">Legs Dumbbell</h1></router-link>    |
      <router-link to="/core"><h1 class="h1">Abdominal Exercises</h1></router-link>
    </nav>
    <h1>Core</h1>
    <Core msg="welcome to your vue +Typescript App"/>
  </div>
</template> -->
<template>
  <div class="x">
    <!-- <nav> 
      <router-link to="/push"><h1 class="h1">Push Dumbbell</h1></router-link>   |
      <router-link to="/pull"><h1 class="h1">Pull Dumbbell</h1></router-link>  |
      <router-link to="/legs"><h1 class="h1">Legs Dumbbell</h1></router-link>    |
      <router-link to="/core"><h1 class="h1">Abdominal Exercises</h1></router-link>
    </nav>
    <h1>Push</h1>
    <Push msg="welcome to your vue +Typescript App"/> -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/push">Push Dumbbell</router-link>
            <router-link class="nav-link" to="/pull">Pull Dumbbell</router-link>
            <router-link class="nav-link" to="/legs">Legs Dumbbell</router-link>
            <router-link class="nav-link" to="/core">Core</router-link>
      </div>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
  </div>
</nav>
    </div>
  </div>
</nav>

    <router-view />
      <h1>Core</h1>
    <Core msg="welcome to your vue +Typescript App"/>
  </div>
  
</template>


<script lang="ts">
// import {Options,Vue} from "vue-class-component" 

import { Component, Vue } from "vue-property-decorator";
import Core from "@/components/core.vue";

@Component({
  components: {
    Core,
  },
})
export default class coreView extends Vue {}
</script>
<style>
h1{
  text-align: center;
  margin-top: 20px;
}
</style>  