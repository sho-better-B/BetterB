<template>
  <div class="home">
<<<<<<< HEAD
    <HelloWorld  />
=======

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App bdbijb" />

>>>>>>> 550823dd4ed841cbde4f758e348555239b2c8dce
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style>
img{
  width: 400px;
  height: 500px;
}
</style>
