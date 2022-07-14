<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-item :key="index" v-for="(legs, index) in legss">
          <div>
            <br>
            <h1>{{ legs.exercise }}</h1><br>
            <img :src="legs.gif" alt="">
            <h3>{{ legs.description }}</h3><br>
          </div>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { legssApi } from "@/components/api/apiLegs";
import Legss from "@/components/interface/interfaceLegs";
@Component
export default class Legs extends Vue {
  legss: Legss[] = [];

  async mounted(): Promise<void> {
    this.legss = await legssApi.getAlllegss();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    margin-top: 20px;
}
h1{
  text-align: center;
  color: rgb(255, 234, 0);
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
  background-color: rgb(113, 113, 113);
}
</style>
