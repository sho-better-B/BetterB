<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-item :key="index" v-for="(workout, index) in workouts">
          <div>
            <br>
            <h1>{{ workout.exercise }}</h1><br>
            <img :src="workout.gif" alt="">
            <h3>{{ workout.description }}</h3><br>
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
<style scoped>
h1{
  text-align: center;
  color: rgb(0, 204, 255);
  font-family: 'Tahoma';
}
h3{
  text-align: center;
  margin-left: 202px;
  margin-right: 202px;
  padding-left:80px;
  padding-right: 80px;
  color: black;
    font-family: 'Tahoma';

}
img{
  width: 19%;
  height: 15%;
}
div{
  float: center;
  margin-left: 10%;
  margin-right: 10%;
  background-color: rgb(246, 246, 246);
}
</style>
