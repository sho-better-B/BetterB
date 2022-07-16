<template>
  <div id="app">
    <!-- //trying authen -->
    <!-- <nav class="nav">
      <h1>Better-B</h1>
      <router-link to="/" ><h1> Home</h1></router-link> 
      <router-link to="/about" ><h1>About</h1></router-link> 
      <router-link to="/training" ><h1>Training</h1></router-link>
      <router-link to="/diet" ><h1>Diet</h1></router-link>
      <router-link to="/blogs" ><h1>Blogs</h1></router-link> 
      <router-link to="/signIn" ><h1>sign In</h1></router-link>
    </nav> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid" >
    <router-link class="nav-link" to="/" style="width: 10rem;">Better-B</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/" style="width: 7rem;">Home</router-link>
        <router-link class="nav-link" to="/diet" style="width: 7rem;">Diet</router-link>
        <router-link class="nav-link" to="/blogs" style="width: 7rem;">Blos</router-link>
        <router-link class="nav-link" to="/training" style="width: 7rem;">Training</router-link>
        <router-link class="nav-link" to="/about" style="width: 7rem;">About</router-link>

      </div>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <form class="d-flex">
      <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button> -->
    </form>
  </div>
</nav>
    </div>
    <div>

    </div>
       <router-link class="nav-link" to="/signIn">SignUp</router-link>
       <router-link class="nav-link" to="/login">Login</router-link>
       <div class="float-left">
    <div class="input-group">
  <div class="form-outline">
  <input type="search" id="form1" class="form-control" placeholder="Search" aria-label="Search" style="width: 18rem;"/>
</div>
</div>
</div>
  </div>
   
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

body{
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
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
  color: #f2f2f2;
  padding-left: 10px;
  text-decoration: none;
  font-size: 20px;
  padding-right: 100px;
  text-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  height: 40px;
  padding-top: 30px;
  margin-top: 0;
  margin-bottom: 0;
 

 }
 nav {
  position: relative;

  overflow: hidden;
  background-image :linear-gradient(to top, #211b1c 0%, #150f10 52%, #0a0b0e 100%); 
   width: 100%;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  margin-bottom: 0;
  padding-bottom: 0;
    overflow: hidden;

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
