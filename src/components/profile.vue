<template>
  <div class="profile">
    <div class="container d-flex justify-content-center">
      <div class="card p-3 py-4">
        <div class="text-center">
          <h2>Profile</h2>
          <br />
          <img
            src="https://i.imgur.com/stD0Q19.jpg"
            width="100"
            class="rounded-circle"
          />
          <h3 class="mt-2">{Name}</h3>
          <span class="mt-1 clearfix">email</span>

          <div class="row mt-3 mb-3">
            <div class="col-md-4">
              <h5>height</h5>
              <span class="num">10</span>
            </div>
            <div class="col-md-4">
              <h5>weight</h5>
              <span class="num">10</span>
            </div>
            <div class="col-md-4">
              <h5>IMC</h5>
              <span class="num">10</span>
            </div>
          </div>

          <hr class="line" />

          <small class="mt-4">you have IMC description</small>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <!-- button to show all the users -->

    <div><button @click="changeBooleanAllUsers()">show all users</button></div>
    <div v-if="BooleanAllUsers === true" class="allusers">
      <!-- get all users -->
      <AllUsers />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AllUsers from "./allUsers.vue";
import Users from "@/components/interface/userInterface";
import { userApi } from "@/components/api/userApi";

@Component({
  components: {
    AllUsers,
  },
})
export default class Profile extends Vue {
  users: Users[] = [];
  name = "";
  img = "";
  email = "";
  weight = null;
  height = null;
  test = true;
  IMC = 0;
  description = "";
  BooleanAllUsers = false;

  async mounted(): Promise<void> {
    this.users = await userApi.getAllusers();
  }

  changeBooleanAllUsers() {
    if (this.BooleanAllUsers === false) {
      return (this.BooleanAllUsers = true);
    } else {
      return (this.BooleanAllUsers = false);
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
.profile {
  text-align: center;
  margin: auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
}

html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  background: #866406;
}

.card {
  color: #fff;
  width: 350px;
  border-radius: 10px;
  background: linear-gradient(145deg, #5e6400, #496108);
  box-shadow: 20px 20px 60px #66a305, -20px -20px 60px #585e06;
  border: none;
}

.num {
  color: #eee !important;
}

.line {
  color: #fff;
}
img {
  width: 200px;
  height: 200px;
}
</style>
