<template>
  <div class="SignIn">
    <br />
    <form action="submit">
      <h3>Welcome {{ message }} in Better-B</h3>

      <div>
        <label for="username">name : </label>
        <input
          type="text"
          v-model="message"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        <label for="Image">Image : </label>
        <input type="text" name="img" placeholder="Image link" />
        <br />
        <input type="file" name="" id="" />
      </div>
      <div>
        <label for="mail">email : </label>
        <input type="email" name="email" placeholder="Email Address" />
      </div>
      <div>
        <label for="weight">weight : </label>

        <input type="text" name="weigth" placeholder="weigth" />
      </div>
      <div>
        <label for="height">height : </label>

        <input type="text" name="heigh" placeholder="heigh" />
      </div>
      <div></div>

      <!-- <input type="password" name="password" placeholder="Password"  /> -->

      <button type="submit">Signin</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>
