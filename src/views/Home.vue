<template>
  <div class="home">
    <div class="row w-header">
      <div class="col-8 w-title">
        <a class="w-title">WhatsApp</a>
      </div>
      <div class="col-1">
        <img src="../image/search.png">
      </div>
      <div class="col-1">
        <img src="../image/more.png">
      </div>
    </div>
    <div class="row w-header">
      <div class="col-1">
        <img src="../image/camera.png">
      </div>
      <div class="col-3 w-options-button">CHATS</div>
      <div class="col-3 w-options-button">STATUS</div>
      <div class="col-3 w-options-button">CALLS</div>
    </div>
    <router-view style="border:0px solid blue;"/>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style type="text/css" scoped>
@import '../css/style.css';

 .home {
  /*background-color:  #009688;*/
  background-color: #fefefe;
  min-height: 600px;
 }

ul {
  margin: 0;
}

.w-header {
  height: 50px;
  background-color:  #009688;
}

.w-title {
  padding: 15px;
  color: white;
}

.w-options-button {
  padding: 15px;
  color: silver;
}

</style>
