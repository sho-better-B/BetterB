<template>
 <v-layout>
    <v-flex>
      <v-list>
        <v-list-item :key="index" v-for="(recipe, index) in recipes">
         <div>
          {{recipe.nameReceipe}}
          </div>
        </v-list-item>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {recipesApi }from "@/components/api"
import Diets from "@/components/interface"
@Component
export default class Diet extends Vue {

 recipes: Diets[] = [];

 async mounted(): Promise<void> {
    this.recipes = await recipesApi.getAllrecipes();
   
  }

}
</script>

<style scoped></style>
