<template>
  <div class="hello">
    <h1 class="title">Better </h1>
      <!-- <h1 class="motif">💪 </h1> -->
  <img alt="logo" class= "motif2" src="../images/workout.png" />

    <h1 class="titles"> Body</h1>
    <p class="paragraph-home"> Now it is not difficult 
      at all to find your ideal type of activity for the house, specifically for yourself.
      Sportfly is a website with over 100 workouts, and you can do it all at home. 
      There are no difficulties with additional equipment or dumbbells - only your body weight, and the maximum is a chair and bottles.</p>
<button class="btn-homes">Let's Start</button>
  <img alt="logo" class= "home-image" src="../images/workout2.png" />


  <footer>
    <div class= "footer"></div>
    <h1 class="foot-text">Check our best reipies</h1>
    <div >
  <img alt="logo" class= "food" src="https://i.pinimg.com/564x/21/6a/43/216a43b7711c24094349d74f8c066ec4.jpg" />

    </div>
     <div >
  <img alt="logo" class= "food" src="https://i.pinimg.com/564x/90/01/cb/9001cb128333a1bc9615a256d7b8884d.jpg" />

    </div>
     <div >
  <img alt="logo" class= "food" src="https://i.pinimg.com/564x/52/6e/0c/526e0cb16ddf9955fb969474c6a046c1.jpg" />

    </div>
  
  </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-image{

margin-left: 55%;
display:flex;
height:1000px;
width: 44%;
border-radius: 10px;

}
.title{
position: absolute;
font-family: Trattatello;
font-size:150px;
margin-left: 500px;
color: #0b171c;
text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
margin-top:150px;
}
.motif2{
  width: 500px;
  height: 600px;
  position :absolute;
  padding: 0;
  margin-left: -950px;
}
.titles{
position: absolute;
font-family: Trattatello;
font-size: 150px;
margin-top: 350px;
margin-left: 350px;
color: #0b171c;
text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}
.title span{
  font-size: 100px;
  margin-left: 200px;

}
.paragraph-home{
  position: absolute;
  margin-top: 600px;
  width: 800px;
  font-size: 25px;
  margin-left: 100px;
  text-align: center;
  
text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;}
/* home page box */
.hello{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background-color: white;
  height:1800px;
}
/* home page button  */
.btn-homes{
 display: inline-block;
 outline: 0;
 border: none;
 cursor: pointer;
 padding: 0 24px;
 border-radius: 10px;
 min-width: 400px;
 height: 70px;
 font-size: 18px;
 background-color: #171515;
 font-weight: 500;
 color: white;
  position: absolute;
  margin-top: 800px;
margin-left: -650px;
                }
                
/* footer */
.footer{
  border-top: 30px ;
  height: 30px;
  width: 100%;
  margin-top: 100px;
}
.food{
 margin-top: 40px;
   width: 400px;
  height: 400px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
border-radius: 50px;

float: left;
margin-left: 150px;
margin-right: 50px;

}
.food:hover{
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  cursor: pointer;

}
.foot-text{
  margin-left: 45%;
  color: #0b171c;
text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>
