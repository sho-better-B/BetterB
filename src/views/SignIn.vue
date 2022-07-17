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
          placeholder="weigth in KG"
        />
      </div>
      <div>
        <input
          v-model="height"
          type="text"
          name="height"
          class="form-control inputs"
          placeholder="height in meters"
        />
         <input
          v-model="passwoord"
          type="password"
          name="passwoord"
          class="form-control inputs"
          placeholder="passwoord "
        />
      </div>
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="Password"
        class="form-control inputs"
      />
      <div>
        <h4>your Imc is : {{ IMC }}</h4>
      </div>

      <!-- add user button -->
      <button
        class="btn btn-primary"
        @click="calcIMC(height, weight), addUser()"
      >
        Sign Up
      </button>
    </form>
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
  weight = null;
  height = null;
  password = "";
  test = true;
  IMC = 0;
  description = "";
  BooleanAllUsers = false;
    passwoord=""


  async mounted(): Promise<void> {
    this.users = await userApi.getAllusers();
  }

  calcIMC(height: number, weight: number) {
    this.IMC = Number((weight / (height * height)).toFixed(2));
    console.log(this.IMC);
    if (this.IMC < 18.5) {
      this.description = " Underweight ";

      return " Underweight " + this.IMC;
    } else if (this.IMC < 25) {
      this.description = " Normal ";
      return " normal " + this.IMC;
    } else if (this.IMC < 35) {
      this.description = " Overweight";
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
      this.description,
      this.passwoord
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
  background-color: rgb(252, 245, 238);
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
.SignIn {
  width: 20%;
  text-align: center;
  margin: auto;
}
.inputs {
  margin-bottom: 5px;
}
</style>
