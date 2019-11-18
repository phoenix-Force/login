<template>
  <div>
    <canvas class= "c" style=""></canvas>
  </div>
</template>
<script>
export default {
  beforeMount(){

  function init(){
      let canvas = document.querySelector(".c");
      var w =window.innerWidth;
      var h = window.innerHeight;
      canvas.height  = h ;
      canvas.width = w;

      var ctx = canvas.getContext("2d");

      var snow_arr = [];
      let bg = new Image();
      bg.src ="../../../src/assets/snow6.jpg";

      function snowfall(){
          ctx.clearRect(0,0,w,h);
          // ctx.drawImage(bg,0,0);
          ctx.drawImage(bg, 0, 0, bg.width,    bg.height,0, 0,w,h);
          addFlake();
          snow();
      }
      function addFlake(){
          let x  = Math.ceil(Math.random()*w);
          var s  = Math.ceil(Math.random()*5);
          snow_arr.push({x:x,y:0,s:s})
      }
      function snow(){
          for(let i=0;i<snow_arr.length;i++){
              let flake = snow_arr[i];
              ctx.beginPath();
              ctx.fillStyle="rgba(255,255,255,.6)";
              ctx.arc(flake.x,snow_arr[i].y+=flake.s/2,flake.s/2,0,5*Math.PI);
              // ctx.shadowColor = `white`;


              // ctx.shadowBlur = 10;
              ctx.fill();
              if(snow_arr[i].y>h){
                  snow_arr.splice(i,1);
              }
          }
      }
      setInterval(snowfall,20)
  }
  window.onload  = init;
  }

}
</script>
<style scoped>
.c{
  height:95vh;
  width:93%;
  border-radius:1%;
  margin-top:1%;
  margin-left:1%;
}
@media screen and (max-width:768px){
  .c{
    height: 100%;
    width:100%;
  }
}
</style>
