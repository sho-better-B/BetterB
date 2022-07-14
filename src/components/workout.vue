<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-item :key="index" v-for="(workout, index) in workouts">
          <div>
            {{ workout.exercise }}
            {{ workout.description }}
            {{ workout.gif }}
          </div>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { workoutsApi } from "@/components/api/apiWorkout";
import Works from "@/components/interface/interfaceWorkout";
@Component
export default class Workout extends Vue {
  workouts: Works[] = [];

  async mounted(): Promise<void> {
    this.workouts = await workoutsApi.getAllworkouts();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
