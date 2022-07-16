<template>
  <div class="home">
    <img alt="logo" src="https://cdn.discordapp.com/attachments/963182382607896586/997793422209470504/exercise-fitness-centre-personal-trainer-physical-fitness-general-fitness-training-dumbbell-713597957b42ef034237dde7c327a526.png" />
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
