<template>
  <div id="app">
    <nav class="nav">
      <h1 class="titles">Better-B</h1>
      <router-link to="/" ><h1> Home</h1></router-link> 
      <router-link to="/about" ><h1>About</h1></router-link> 
      <router-link to="/training" ><h1>Training</h1></router-link>
      <router-link to="/diet" ><h1>Diet</h1></router-link>
      <router-link to="/blogs" ><h1>Blogs</h1></router-link> 
      <router-link to="/signIn" ><h1>sign In</h1></router-link>
      <h2><img
            class="imgs-fluid"
            src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
            alt=""
            style="
               {
                height: 10px;
                width: 10 px;
              }
            "
          /></h2>
    </nav>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

<style>

 /* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #384552;
} */


/* nav bar css */
nav h1{
  position: relative;

 float:left;
  color: #0b0303;
  padding-left: 10px;
  text-decoration: none;
  font-size: 20px;
  padding-right: 100px;
  text-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  height: 40px;
  padding-top: 30px;
  margin-top: 0;

 }
 nav  .imgs-fluid{
   width: 80px;
  height: 70px;
  position: relative;
  padding-top: 0;
  margin-top: 0 ;
  padding-left: 390px;
}
nav .titles{
  font-size: 50px;
  margin-right: 40px;
  margin-bottom: 30px;
  margin-top: 0;
  padding-top: 10px;
  padding-left: 60px;
}
 nav {
  position: relative;

  overflow: hidden;
  background-image :linear-gradient(to top, #f6f5f5 0%, #f8f6f7 52%, #f0f1f5 100%); 
   width: 100%;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  margin-bottom: 0;
  padding-bottom: 0;
    overflow: hidden;
    border-radius: 30px;

 }
 nav h1:hover{
  position: relative;

 text-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
      cursor: pointer;

 }
 

 nav :hover{
  position: relative;

 text-align: center;
TEXT-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
 


 }
 h1 {
  margin: 0;
  padding: 0;
}
</style>
