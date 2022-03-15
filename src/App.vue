<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
      <img alt="logo" src="./assets/logo2.png" width="112" height="40">
      </div>
      <div class="col-sm-3"></div>
      <div class="col-sm-7 menu">
      <nav>
        <router-link to="/">Форма</router-link> |
        <router-link to="/result">Превью</router-link>
      </nav>
      </div>
    </div>
  </div>
  <hr>  
  
  <div class="content">
  <router-view/>
  </div>

<footer>
  <div class="copyr">All right reserved 2021</div>
</footer>
</template> 

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
  }
}
</script>

<!-- Styles for App-->
<style>
#app {
  font-family: 'Montserrat';
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.fhead {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
input[type="text"] {
    padding: 5px 5px;
    font-size: 16px;
}
.menu {
    height: 24px;
    text-align: left;;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: rgba(17, 17, 17, 0.48);
} 
footer {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  padding: 10px 0px;
  height: 76px;
  color: #000000;
  text-align: center;
}
.copyr {
    top: 20px;
    position: relative;
}
.content {max-width: 700px; margin: 0 auto;}

</style>
