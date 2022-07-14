<template>
  <div class="x">
    <h1>Workout</h1>
    <Workout msg="welcome to your vue +Typescript App"/>
  </div>
</template>

<script lang="ts">
// import {Options,Vue} from "vue-class-component" 

import { Component, Vue } from "vue-property-decorator";
import Workout from "@/components/workout.vue";

@Component({
  components: {
    Workout,
  },
})
export default class workoutView extends Vue {}
</script>
<style>
h1{
  font-family: 'Tahoma';
}
</style>
