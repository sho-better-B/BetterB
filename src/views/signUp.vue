<template>
  <div class="x">
    <div class="title">
      <h1>sign In please</h1>
      <p>
        in case this is your first visit , please sign up before
        <a href="http://localhost:8080/signIn">here</a>
      </p>
      <br />
    </div>
    <SignUp />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignUp from "@/components/signUp.vue";

@Component({
  components: {
    SignUp,
  },
})
export default class SignUpView extends Vue {}
</script>
<style scoped>
body {
  align-content: center;
}
.title {
  align-content: center;
  align-items: center;
  place-items: center;
  justify-content: center;
}
.x {
  text-align: center;
  margin: auto;
}
</style>
