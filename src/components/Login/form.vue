<template>

  <b-form class="ll">
    <b-img scr = "../../../src/assets/pic.svg" fluid alt=".."></b-img>
    <h1>Login</h1>
    <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
    </b-form-group>
    <b-form-group
        id="input-group-2"
        label="Password"
        label-for="input-1"

      >
        <b-form-input
          id="input-2"
          type="password"
          required
          placeholder="Password"
        >
        </b-form-input>
    </b-form-group>
    <b-button variant="danger">Login</b-button>
  </b-form>

</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.ll{

  top:0px;
  color:white;
  background-color: rgba(0,0,0,.5);
  border-radius: 30px;
  padding:15px;
  -webkit-box-shadow: 5px 5px 8px 5px #000000;
  box-shadow: 5px 5px 8px 5px #000000;
}
h1{
  color:white;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;

}
</style>
