<template>
 
   <v-flex >
    
<div  :key="index" v-for="( item ,index) in recipes">
<h3> recipe{{index}}</h3>
  {{item.nameReceipe }}
</div>
<button @click="addRecipe()">Add recipe</button>
<div>
    <input v-model="name">
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
  recipes : IDiet[] = [];
  name="";
 
    async mounted() {
    this.recipes = await recipesApi.getAllrecipes();
  }
 
  async addRecipe(){
   return recipesApi.addrecipes(this.name)
  }
 
}
</script>

<style scoped></style>
