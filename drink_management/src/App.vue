<template>
  <div id="app">
    <router-link to="/signin"><button class="button">サインイン</button></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background: #FDCD02;
}

a {
    text-decoration: none;
}

.button{
  color: #2c3e50;
  background: #FFFFFF;
  width: 160px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgb(195, 195, 195);
  display: block;
  margin: 15px 40px 15px auto;
}
</style>
