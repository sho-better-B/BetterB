<template>
  <div class="allUsers">
    <br />

    <!-- get all user testing -->
    <v-layout>
      <v-flex>
        <v-list>
          <h1>all Users</h1>
          <h5>we have {{ users.length }} users :</h5>
          <v-list-item :key="index" v-for="(user, index) in users">
            <div class="user">
              <div class="user-name">
                {{ user.name }}

                <br />
                <img
                  :src="user.img"
                  alt="user Image"
                  class="userImg"
                  width="{200}"
                  height="{200}"
                />
                <p>
                  Your Body Mass Index (IMC) is {{ user.imc }} , This is
                  considered as {{ user.description }} .
                </p>
                <button
                  class="btn btn-outline-danger"
                  @click="deleteData(user._id)"
                >
                  delete user
                </button>
              </div>
            </div>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userApi } from "@/components/api/userApi";
import Users from "@/components/interface/userInterface";
import Vuetify from "vuetify";

Vue.use(Vuetify);

@Component
export default class AllUsers extends Vue {
  users: Users[] = [];
  message = "";
  name = "";
  img = "";
  email = "";
  weight = 0;
  height = 0;
  test = true;
  IMC = 0;
  description = "";

  async mounted(): Promise<void> {
    this.users = await userApi.getAllusers();
  }
  async deleteData(id: string) {
    return userApi.deleteuser(id);
  }
}
</script>
<style>
.user {
  background-color: white;
  float: left;
  margin-right: 50px;
  margin-left: 100px;
  margin-top: 40px;
  border-radius: 50px;
}
.user:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.user-name {
  background-color: antiquewhite;
  width: 300px;
  height: fit-content;
  border-radius: 50px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.userImg {
  width: 200px;
  height: 200px;
}
</style>
