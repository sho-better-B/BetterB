<template>
  <div class="x">
    <nav id="x"> 
      <router-link to="/push">Push Dumbbell</router-link>   |
      <router-link to="/pull">Pull Dumbbell</router-link>  |
      <router-link to="/legs">Legs Dumbbell</router-link>    |
      <router-link to="/core">Abdominal Exercises</router-link>
    </nav>
    <h1>Push</h1>
    <Push msg="welcome to your vue +Typescript App"/>
  </div>
</template>

<script lang="ts">
// import {Options,Vue} from "vue-class-component" 

import { Component, Vue } from "vue-property-decorator";
import Push from "@/components/push.vue";

@Component({
  components: {
    Push,
  },
})
export default class pushView extends Vue {}
</script>
<style>

</style>
