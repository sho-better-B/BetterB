<template>
  <v-flex>
    <div v-if="showinput === true" class="dietinput">
      <input v-model="name" placeholder="Recipe name" class="solo-input-diet" />
      <input v-model="image" placeholder="image" class="solo-input-diet" />
      <input
        v-model="description"
        placeholder="description"
        class="solo-input-diet"
      />
      <button @click="showinputs(), addRecipe()" class="diet-button">
        Add recipe
      </button>
    </div>
    <div v-else-if="showinput === false">
      <button @click="showinputs" class="diet-button">Add recipes</button>
    </div>

    <div :key="index" v-for="(item, index) in recipes">
      <div class="dietBlock">
        <div class="recipe-name">
          <img :src="item.image" alt="" class="dietImage" />

          <h1>{{ item.nameReceipe }}</h1>

          <button @click="deleteData(item._id)" class="diet-button">
            delete
          </button>
        </div>
      </div>
    </div>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { recipesApi } from "@/components/api/dietApi";
import IDiet from "@/components/interface/dietInterface";
import Vuetify from "vuetify";

Vue.use(Vuetify);
@Component
export default class Diet extends Vue {
  recipes: IDiet[] = [];
  name = "";
  image = "";
  description = "";
  showinput = false;
  async mounted() {
    this.recipes = await recipesApi.getAllrecipes();
  }

  async addRecipe() {
    return recipesApi.addrecipes(this.name, this.image, this.description);
  }
  async deleteData(id: string) {
    return recipesApi.deleterecepies(id);
  }
  async showinputs() {
    if (this.showinput === false) {
      this.showinput = true;
    } else {
      this.showinput = false;
    }
  }
}
</script>

<style scoped>
template {
  background-color: bisque;
}
/* diet space */
.dietBlock {
  float: left;
  margin-right: 50px;
  margin-left: 100px;
  margin-top: 40px;
  border-radius: 50px;
}
.dietBlock:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.dietImage {
  width: 300px;
  height: 300px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
/* delete and recipe name */
.recipe-name {
  background-color: antiquewhite;
  width: 300px;
  height: fit-content;
  border-radius: 50px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

/* inputs and buttons */
.dietinput {
  display: flex;
  margin-left: 30%;
}
.solo-input-diet {
  padding: 6px 12px;
  background: rgb(31, 32, 35);
  border: 1px solid rgb(60, 63, 68);
  border-radius: 4px;
  font-size: 13px;
  color: rgb(247, 248, 248);
  height: 46px;
  appearance: none;
  transition: border 0.15s ease 0s;
  color: aliceblue;
}
.solo-input-diet :focus {
  outline: none;
  box-shadow: none;
  border-color: rgb(100, 153, 255);
}

.solo-input-diet :hover {
  border-color: #ccc;
}

.diet-button {
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: #000000;
  color: #ffffff;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms;
  margin-bottom: 30px;
}
.diet-button:hover {
  transform: translateY(-2px);
}
</style>
