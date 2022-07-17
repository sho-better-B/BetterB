<template>
  <div class="x">
    <h1>profile</h1>
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
