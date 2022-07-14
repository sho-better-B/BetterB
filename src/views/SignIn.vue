<template>
  <div class="SignIn">
    <br />
    <form>
      <h3>Welcome {{ message }} in Better-B</h3>

      <div>
        <label for="username">name : </label>
        <input
          type="text"
          v-model="name"
          name="username"
          placeholder="Username"
        />
      </div>
      <div>
        <label for="Image">Image : </label>
        <input v-model="img" type="text" name="img" placeholder="Image link" />
        <br />
        <!-- <input type="file" name="" id="" /> -->
      </div>
      <div>
        <label for="mail">email : </label>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
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

        <h4>your Imc is : {{ IMC }}</h4>
      </div>

      <!-- <input type="password" name="password" placeholder="Password"  /> -->

      <button @click="calcIMC(height, weight), addUser()">Signin</button>
    </form>

    <!-- get all user testing -->
    <br /><br /><br />
    <v-layout>
      <v-flex>
        <v-list>
          <h3>test</h3>
          <v-list-item :key="index" v-for="(user, index) in users">
            <div>{{ user.name }} , {{ user.email }} , {{ user.imc }}</div>
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
  name = "";
  img = "";
  email = "";
  weight = 0;
  height = 0;
  test = true;
  IMC = 0;

  async mounted(): Promise<void> {
    this.users = await userApi.getAllusers();
  }

  calcIMC(height: number, weight: number) {
    this.IMC = Number((weight / (height * height)).toFixed(2));
    console.log(this.IMC);
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

  changeIMC() {
    if (this.test === false) {
      return (this.test = true);
    } else {
      return (this.test = false);
    }
  }
  async addUser() {
    return userApi.adduser(
      this.name,
      this.img,
      this.email,
      this.weight,
      this.height,
      this.IMC
    );
  }

  // data() {
  //   return {
  //     message: "",
  //   };
  // }
}
</script>
