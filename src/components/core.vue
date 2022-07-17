<template>

    <v-flex>
        <v-list-item :key="index" v-for="(item, index) in cores">
          <div>
            <br>
            <h1>{{ item.exercise }}</h1><br>
            <img :src="item.gif" alt="">
            <h3 id="descri">{{ item.description }}</h3><br>
            <button id="delete" @click="deleteData(item._id) ">delete</button>
          </div>
        </v-list-item>
        <div>
          <button @click="addCores()">ADD NEW ONE</button>
    <input v-model="exercise" placeholder="Exercise">
    <input v-model="gif" placeholder="GIF or IMG">
    <input v-model="description" placeholder="Description">
        </div>
    </v-flex>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { coresApi } from "@/components/api/apiCore";
import ICore from "@/components/interface/interfaceCore";
// import IWork from "@/components/interface/interfaceCore";

import Vuetify from "vuetify";
Vue.use(Vuetify);
@Component
export default class Core extends Vue {
  cores: ICore[] = [];;
  exercise="";
  gif="";
  description="";

  async mounted(): Promise<void> {
    this.cores = await coresApi.getAllcores();
  }
   async addCores(){
   return coresApi.addcores(this.exercise,this.gif,this.description)
  }
      async deleteData(id:string){
return coresApi.deletecores(id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#delete{
  
                display: inline-block;
                outline: 0;
                text-align: center;
                cursor: pointer;
                height: 34px;
                padding: 0 13px;
                color: #fff;
                vertical-align: top;
                border-radius: 3px;
                border: 1px solid transparent;
                transition: all .3s ease;
                background: #ff0808;
                border-color: #cc4d29;
                font-weight: 600;
                text-transform: uppercase;
                line-height: 16px;
                font-size: 11px;    
                margin: auto;
}
#delete:hover {
                    background: #e4461b;
                    border-color: #e4461b;
                }

button{
  
                display: inline-block;
                outline: 0;
                text-align: center;
                cursor: pointer;
                height: 34px;
                padding: 0 13px;
                color: #fff;
                vertical-align: top;
                border-radius: 3px;
                border: 1px solid transparent;
                transition: all .3s ease;
                background: #2978cc;
                border-color: #ffffff;
                font-weight: 600;
                text-transform: uppercase;
                line-height: 16px;
                font-size: 11px;    
                margin: auto;

}
button:hover {
                    background: #20a5ed;
                    border-color: #20a5ed;
                }
input{
  
                    background-color: rgb(250, 251, 252);
                    border-color: rgb(223, 225, 230);
                    color: rgb(9, 30, 66);
                    cursor: text;
                    border-radius: 3px;
                    border-width: 2px;
                    border-style: solid;
                    box-sizing: border-box;
                    font-size: 14px;
                    transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
                    line-height: 1.42857; 
                    padding: 8px 6px;
                    height: 36px; 
                    margin-right: 0px;
                    margin-bottom: 20px;
 
}
input:hover{
                        background-color: rgb(235, 236, 240);
                    }
input:focus{
                        background-color: rgb(255, 255, 255);
                        border-color: rgb(76, 154, 255);
                    }
div{
    margin-top: 20px;
}
h1{
  text-align: center;
  color: rgb(255, 234, 0);
  font-family: 'Tahoma';
    margin: auto;

} 
#descri{
  text-align: left;
  margin-left: 180px;
  margin-right: 180px;
  padding-left:80px;
  padding-right: 80px;

}
 img{
  width: 19%;
  height: 15%;
  margin: auto;
}
div{
  margin: auto;
  float: center;
  margin-left: 5%;
  margin-right: 5%;
} 
</style>
