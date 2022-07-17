<template>
  <div id="app">

    <!-- <nav class="nav"> -->


    <!-- //trying authen -->
    <!-- <nav class="nav">
      <h1>Better-B</h1>
<<<<<<< HEAD
>>>>>>> 550823dd4ed841cbde4f758e348555239b2c8dce
=======
      <br />
      <router-link to="/"><h1>Home</h1></router-link>
      <router-link to="/about"><h1>About</h1></router-link>
      <router-link to="/training"><h1>Training</h1></router-link>
      <router-link to="/diet"><h1>Diet</h1></router-link>
      <router-link to="/blogs"><h1>Blogs</h1></router-link>
      <router-link to="/signIn"><h1>Sign In</h1></router-link>
      <router-link to="/signUp"><h1>Sign Up</h1></router-link>

      <router-link to="/profile">
        <img
          src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
          alt=""
        />
      </router-link>
    </nav>
>>>>>>> de0780aa0bf866b6c5301eeadfbfe568b1fd8fa5
      <router-link to="/" ><h1> Home</h1></router-link> 
      <router-link to="/about" ><h1>About</h1></router-link> 
      <router-link to="/training" ><h1>Training</h1></router-link>
      <router-link to="/diet" ><h1>Diet</h1></router-link>
      <router-link to="/blogs" ><h1>Blogs</h1></router-link> 
      <router-link to="/signIn" ><h1>sign In</h1></router-link>
    </nav> -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="nav-link" to="/" style="width: 10rem"
          >Better-B</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/" style="width: 7rem"
              >Home</router-link
            >
            <router-link class="nav-link" to="/diet" style="width: 7rem"
              >Diet</router-link
            >
            <router-link class="nav-link" to="/blogs" style="width: 7rem"
              >Blogs</router-link
            >
            <router-link class="nav-link" to="/training" style="width: 7rem"
              >Training</router-link
            >
            <router-link class="nav-link" to="/about" style="width: 7rem"
              >About</router-link
            >
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
        <div></div>
        <router-link to="/profile">
          <img
            class="img-fluid"
            src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
            alt=""
            style="
               {
                height: 10px;
                width: 10 px;
              }
            "
          />
        </router-link>
        <router-link class="nav-link" to="/signIn">SignUp</router-link>
        <router-link class="nav-link" to="/signUp">Login</router-link>
        <div class="float-left">
          <div class="input-group">
            <div class="form-outline">
              <input
                type="search"
                id="form1"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                style="width: 18rem"
              />
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






 /* #app {
=======
/* body{
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
} */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #384552;
} */

/* nav bar css */
/* nav h1 {
  position: relative;

  float: left;
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
 nav  .imgs-fluid{
   width: 100px;
  height: 80px;
  position: absolute;
  padding-top: 0;
  margin-top: 0 ;
  padding-left: 70px;
  border-radius: 300px;
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
  background-image: linear-gradient(
    to top,
    #211b1c 0%,
    #150f10 52%,
    #0a0b0e 100%
  );
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

nav :hover {
  position: relative;

 text-align: center;
TEXT-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;




 }
 h1 {
  margin: 0;
  padding: 0;
} */
/* .image {
  width: 7 px;
  height: 7 px;
} */
.img-fluid {
  width: 30px;
  height: 30px;
}
.navbar {
 background-image :linear-gradient(to top, #f6f5f5 0%, #f8f6f7 52%, #f0f1f5 100%); 
  color: white;
  font-size: 20px;
   color: #0b0303;
     text-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
