<template>
  <div id="app">
    <!-- <nav> 
      <router-link to="/push"><h1 id="h1">Push Dumbbell</h1></router-link>   |
      <router-link to="/pull"><h1 id="h1">Pull Dumbbell</h1></router-link>  |
      <router-link to="/legs"><h1 id="h1">Legs Dumbbell</h1></router-link>    |
      <router-link to="/core"><h1 id="h1">Core</h1></router-link>
    </nav> -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" >
        <router-link class="nav-link" to="/push" style="width: 20rem;">Push Dumbbell</router-link>
            <router-link class="nav-link" to="/pull" style="width: 20rem;">Pull Dumbbell</router-link>
            <router-link class="nav-link" to="/legs" style="width: 20rem;">Legs Dumbbell</router-link>
            <router-link class="nav-link" to="/core" style="width: 20rem;">Core</router-link>
      </div>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
  </div>
</nav>
    </div>
  </div>
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
.navbar-nav{
  text-align: center;
  color: brown;
}
</style>
