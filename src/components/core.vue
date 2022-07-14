<template>
  <v-layout>
    <v-flex>
      <v-list>
        <v-list-item :key="index" v-for="(core, index) in cores">
          <div>
            <br>
            <h1>{{ core.exercise }}</h1><br>
            <img :src="core.gif" alt="">
            <h3>{{ core.description }}</h3><br>
          </div>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { coresApi } from "@/components/api/apiCore";
import Works from "@/components/interface/interfaceCore";
@Component
export default class Core extends Vue {
  cores: Works[] = [];

  async mounted(): Promise<void> {
    this.cores = await coresApi.getAllcores();
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
