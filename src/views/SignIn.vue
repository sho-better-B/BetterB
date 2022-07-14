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
        <label for="weight ">weight : </label>

        <input
          v-model="weight"
          type="text"
          name="weigth"
          placeholder="weigth on KG"
        />
      </div>
      <div>
        <label for="height">height : </label>

        <input
          v-model="height"
          type="text"
          name="height"
          placeholder="height on Metre"
        />
      </div>
      <div>
        <button @click="changeIMC">calculate your IMC</button>

        <h4>your Imc is : {{ calcIMC(height, weight) }}</h4>
      </div>

      <!-- <input type="password" name="password" placeholder="Password"  /> -->

      <button type="submit">Signin</button>
    </form>

    <!-- get all user testing -->
    <br /><br /><br />
    <v-layout>
      <v-flex>
        <v-list>
          <h3>test</h3>
          <v-list-item :key="index" v-for="(user, index) in users">
            <div>{{ user.name }} , {{ user.email }}</div>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { userApi } from "@/components/api/userApi";
import Users from "@/components/interface/userInterface";
import Vuetify from "vuetify";

Vue.use(Vuetify);

@Component
export default class User extends Vue {
  users: Users[] = [];
  message = "";
  IMC = 0;
  weight = null;
  height = null;
  test = true;
  async mounted(): Promise<void> {
    this.users = await userApi.getAllusers();
  }
  calcIMC(height: number, weight: number) {
    if (this.test === false) {
      this.IMC = weight / (height * height);
      // return (this.IMC = (weight / (height * height)).toFixed(2));
      if (this.IMC < 18.5) {
        return " Underweight " + this.IMC;
      } else if (this.IMC < 25) {
        return " normal " + this.IMC;
      } else if (this.IMC < 35) {
        return " Overweight " + this.IMC;
      } else {
        return " Obesity " + this.IMC;
      }
    }
  }

  changeIMC() {
    if (this.test === false) {
      return (this.test = true);
    } else {
      return (this.test = false);
    }
  }
  // data() {
  //   return {
  //     message: "",
  //   };
  // }
}
</script>
