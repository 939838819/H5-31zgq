<template>
  <div id="app">
    <mav-nav></mav-nav>
     <!-- <home-page> -->
      <cft-nav></cft-nav>
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
  </div>
</template>

<script>
  import mavNav from '@/components/mav-nav/mav-nav'
  import cftNav from '@/components/cft-nav/cft-nav'
  export default {
    components: {
      mavNav,
      cftNav
    },
    created () {
    },
    watch: {
      // 检测路由信息变化，重新发送请求
      $route: function () {
        console.log(this.$route.params.id)
      }
    }
  }
</script>
 
<style>
  @import '../static/css/reset.css';
</style>
