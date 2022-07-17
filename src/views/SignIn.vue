<template>
  <div class="SignIn">
    <br />
    <h3>Welcome {{ name }} in Better-B</h3>
    <br />
    <form>
      <div class="form-group">
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="name"
          class="form-control inputs"
        />
      </div>
      <div>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Email Address"
          class="form-control inputs"
        />
      </div>
      <div>
        <input
          class="form-control inputs"
          v-model="img"
          type="text"
          name="img"
          placeholder="Image link"
        />
        <br />
      </div>
      <div>
        <input
          v-model="weight"
          type="text"
          name="weigth"
          class="form-control inputs"
          placeholder="weigth on KG"
        />
      </div>
      <div>
        <input
          v-model="height"
          type="text"
          name="height"
          class="form-control inputs"
          placeholder="height on Metre"
        />
      </div>
      <div>
        <h4>your Imc is : {{ IMC }}</h4>
      </div>

      <!-- <input type="password" name="password" placeholder="Password"  /> -->

      <!-- button to show all the users -->
      <button @click="calcIMC(height, weight), addUser()">Signin</button>
    </form>

    <br /><br /><br />
    <!-- get all user testing -->

    <div><button @click="changeBooleanAllUsers()">show all users</button></div>
    <div v-if="BooleanAllUsers === true" class="allusers">
      <v-layout>
        <v-flex>
          <v-list>
            <h1>all Users</h1>
            <h5>we have {{ users.length }} users :</h5>
            <v-list-item :key="index" v-for="(user, index) in users">
              <div class="user">
                {{ user.name }} , {{ user.email }} , {{ user.imc }}

                <br />
                <img
                  :src="user.img"
                  alt="user Image"
                  class="userImg"
                  width="{200}"
                  height="{200}"
                />
                <p>you size is {{ user.description }}</p>
                <button @click="deleteData(user._id)">delete user</button>
              </div>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-layout>

      <AllUsers />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userApi } from "@/components/api/userApi";
import Users from "@/components/interface/userInterface";
import Vuetify from "vuetify";
import AllUsers from "../components/allUsers.vue";

Vue.use(Vuetify);

@Component({
  components: {
    AllUsers,
  },
})
@Component
export default class User extends Vue {
  users: Users[] = [];
  name = "";
  img = "";
  email = "";
  weight = 0;
  height = 0;
  test = true;
  IMC = 0;
  description = "";
  BooleanAllUsers = false;

  async mounted(): Promise<void> {
    this.users = await userApi.getAllusers();
  }

  calcIMC(height: number, weight: number) {
    this.IMC = Number((weight / (height * height)).toFixed(2));
    console.log(this.IMC);
    if (this.IMC < 18.5) {
      this.description = "Underweight";

      return " Underweight " + this.IMC;
    } else if (this.IMC < 25) {
      this.description = "normal";
      return " normal " + this.IMC;
    } else if (this.IMC < 35) {
      this.description = "Overweight";
      return " Overweight " + this.IMC;
    } else {
      this.description = "Obesity";

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
      this.IMC,
      this.description
    );
  }
  changeBooleanAllUsers() {
    if (this.BooleanAllUsers === false) {
      return (this.BooleanAllUsers = true);
    } else {
      return (this.BooleanAllUsers = false);
    }
  }
  async deleteData(id: string) {
    return userApi.deleteuser(id);
  }

  // data() {
  //   return {
  //     message: "",
  //   };
  // }
}
</script>

<style>
.user {
  width: 400px;
  padding: 8px;
  border: 3px solid rgb(0, 0, 0);
  margin: auto;
  box-shadow: 5px 8px #17221f;
  text-align: center;
}
.userImg {
  width: 200;
  height: 200;
}
.SignIn {
  width: 20%;
  text-align: center;
  margin: auto;
}
.inputs {
  margin-bottom: 5px;
}
</style>
