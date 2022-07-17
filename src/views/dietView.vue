<template>
  <div class="x">

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
