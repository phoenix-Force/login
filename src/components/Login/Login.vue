<template>
  <div  >
  <b-row>
    <b-col md="11" lg="12" xl="12" cols="12">
      <snow-fall class="d"></snow-fall>
    </b-col>
    <b-col md="6" lg="4" xl="4" cols="12"  class="ppp">
          <login-form></login-form>

    </b-col>

  </b-row>

</div>

































</template>
<script>
import login from "./form.vue"
import snowfall from "../weather/Snowfall.vue"
export default {
  data(){
    return{
      weather:'showfall'
    }
  },
  components:{
    snowFall:snowfall,
    loginForm:login,
  }


}
</script>
<style scoped>
  .ccc{
    position:absolute;
            z-index: 99999;
            top:20%;
            bottom: 0;
            left: 60%;
            right: 0;
            margin: auto;
            width:40%;
            background-color: rgba(26,36,59,.7);
  }
  .ppp{
    position:absolute;
    z-index: 99999999;
    bottom:10%;
    right:2%;
  }

</style>
