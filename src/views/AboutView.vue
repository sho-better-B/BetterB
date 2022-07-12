<template>
  <div class="about">
    <h1>This is an about </h1>
    <About message="this is test for the about page " />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import About from "@/components/about.vue";

@Component({
  components: {
    About,
  },
})
export default class AboutView extends Vue {}
</script>
