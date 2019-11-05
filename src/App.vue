<template>
  <div id="app">
    <!-- <img src="../static/logo.png" class="logo"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
#app {
  text-align: center;
}
.logo {
  width: 40%;
  margin: 30px auto;
}
</style>
