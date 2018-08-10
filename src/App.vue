<template>
  <div id="app">
    <gys-header/>
    <gys-nav/>
    <router-view/>
    <loading></loading>
    <gys-footer/>
  </div>
</template>
<script>
import GysHeader from "@/components/GysHeader.vue";
import GysNav from "@/components/GysNav.vue";
import Loading from "@/components/Loading.vue";
import GysFooter from "@/components/GysFooter.vue";
export default{
  data(){
    return {
    }
  },
  components:{
    GysHeader,
    GysNav,
    Loading,
    GysFooter
  }
}
</script>

<style lang="less" scoped>
#app {
  min-height:100%;
  width:100%;
  padding-bottom:82px;
  position:relative;
  box-sizing: border-box;
  .app_footer{
    position:absolute;
    width:100%;
    left:0px;
    bottom:0px;
  }
}
</style>
