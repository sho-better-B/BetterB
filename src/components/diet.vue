<template>
 
   <v-flex >
     <div  v-if="showinput === true" class="dietinput">
    <input v-model="name">
   <input v-model="image">
   <input v-model="description">
   <button @click="addRecipe()">Add recipe</button>

    </div>
<div v-else-if="showinput=== false">
  <button @click="showinputs">Add recipes</button>

</div>
<div  :key="index" v-for="( item ,index) in recipes">
<div class="dietBlock">
  <img :src="item.image" alt="" class="dietImage">
    <h1>{{item.nameReceipe }}</h1>

  <button @click="deleteData(item._id)">delete</button>
  </div>
</div>

  




  

  

</v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { recipesApi } from "@/components/api/dietApi";
import IDiet from "@/components/interface/dietInterface";
import Vuetify from "vuetify";
import footer from '@/components/footer.vue';

Vue.use(Vuetify);
@Component
export default class Diet extends Vue {
  recipes : IDiet[] = [];
  name="";
  image="";
  description="";
 showinput=false;
  async mounted() {
    this.recipes = await recipesApi.getAllrecipes();
    
  }
 
  async addRecipe(){
   return recipesApi.addrecipes(this.name,this.image,this.description)
  }
  async deleteData(id:string){
return recipesApi.deleterecepies(id)
  }
  async showinputs(){
    if (this.showinput===false){
 this.showinput=true
    }else{
      this.showinput=false
    }
  }
}
</script>

<style scoped>
.dietBlock {
  float: left;
  margin-right: 50px;
}
.dietImage{
   width: 300px;
  height: 300px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
.dietinput{
display: inline-flexbox;


}
</style>
