<template>
  <div class="allUsers">
    <br />

    <!-- get all user testing -->
    <v-layout>
      <v-flex>
        <v-list>
          <h3>test</h3>
          <v-list-item :key="index" v-for="(user, index) in users">
            <div>
              {{ user.name }} , {{ user.email }} , {{ user.imc }}
              <p>{{ user.description }}</p>
              <br />
              <img :src="user.img" alt="" />
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
}
</script>
