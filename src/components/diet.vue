<template>
 
   <v-flex >
    
<div  :key="index" v-for="( item ,index) in recipes">
<h3> recipe{{index}}</h3>
  {{item.nameReceipe }}
  <button @click="deleteData(item._id)">delete</button>
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
    console.log(this.recipes)
  }
 
  async addRecipe(){
   return recipesApi.addrecipes(this.name)
  }
  async deleteData(id:string){
return recipesApi.deleterecepies(id)
  }

}
</script>

<style scoped></style>
