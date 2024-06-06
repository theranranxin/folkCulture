<template>
  <div class="app-wrapper">
    <top-nav-bar class="nav"></top-nav-bar>
    <router-view class="main-contain"/>
    <bottom-footer class="footer"></bottom-footer>
  </div>
</template>
<script setup>
import TopNavBar from '@/components/TopNavBar'
import BottomFooter from '@/components/Footer'

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-wrapper{
  position: relative;
}
.main-contain{
  margin-top: 5vh;
  min-height: 80vh;
}
.nav {
  position: fixed;
  top: 0;
  height: 5vh;
  width: 100%;
}
.footer{
  height: 100px;
}
</style>
