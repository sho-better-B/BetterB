<template>
  <div class="x">
    <br /><br />
    <Profile />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Profile from "../components/profile.vue";

@Component({
  components: {
    Profile,
  },
})
export default class ProfileView extends Vue {}
</script>
<style>
.x {
  text-align: center;
  margin: auto;
}
</style>
