<template>
  <div class="x">
    <h1>Diets</h1>
    <Diet/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Diet from "@/components/diet.vue";

@Component({
  components: {
    Diet,
  },
})
export default class dietView extends Vue {}
</script>
