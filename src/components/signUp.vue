<template>
  <div class="bodyy">
    <form>
      <div class="mb-3 row">
        <label for="email" class="col-sm-2 col-form-label">Email </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control w-75"
            id="staticEmail"
            placeholder="email@example.com"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control w-75"
            id="inputPassword"
            placeholder="enter your password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      <!--   -->
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SignUp extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodyy {
  display: flex;
  align-items: center;
  place-items: center;
  justify-content: center;
}
</style>
