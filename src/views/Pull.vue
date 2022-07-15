<template>
  <div class="x">
    <nav id="x"> 
      <router-link to="/push">Push Dumbbell</router-link>   |
      <router-link to="/pull">Pull Dumbbell</router-link>  |
      <router-link to="/legs">Legs Dumbbell</router-link>    |
      <router-link to="/core">Core</router-link>
    </nav>
    <h1>Pull</h1>
    <Pull msg="welcome to your vue +Typescript App"/>
  </div>
</template>

<script lang="ts">
// import {Options,Vue} from "vue-class-component" 

import { Component, Vue } from "vue-property-decorator";
import Pull from "@/components/pull.vue";

@Component({
  components: {
    Pull,
  },
})
export default class pullView extends Vue {}
</script>
<style>

</style>
