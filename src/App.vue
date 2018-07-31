<template>
  <div id="app">
    <div class="w-body">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.w-body {
  width: 400px;
  margin: auto;
  min-height: 600px;
}

/*
#nav {
  padding: 30px;
}*/
/*
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
