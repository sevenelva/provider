<!-- 发送方式dialog -->
<template>
  <div class="err_pop" v-if="isHide">
    <div class="dialog_content">
      <span class="close" @click="isHide=false"></span>
      <p class="info">是否确认接收此订单？</p>
      <div class="btn_box">
        <span class="btn" @click="fnSure">确认</span></div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name:"ErrPop",
  data () {
    return {
      isHide:false,  // 弹框显示隐藏
    };
  },
  methods:{
    // 确定提交
    fnSure(){
      this.isHide=false
    }
  }
}

</script>
<style lang="less" scoped>
.err_pop{
  .dialog_content{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:360px;
    z-index: 600;
    background:#fff;
    box-sizing: border-box;
    .close{
      position:absolute;
      top:21px;
      right:21px;
      width:21px;
      height:20px;
      background:url('../assets/images/close_icon.png') no-repeat;
      background-size:21px 20px;
      cursor: pointer;
    }

    .info{
      height:26px;
      font-size:20px;
      font-weight:bold;
      color:rgba(83,83,83,1);
      line-height:26px;
      padding:57px 30px 36px;
      text-align: center;
    }
    .btn_box{
      text-align:center;
      margin-bottom:40px;
      .btn{
        display:inline-block;
        width:188px;
        height:50px;
        background:rgba(227,29,25,1);
        border-radius:30px;
        font-size:20px;
        color:rgba(255,255,255,1);
        line-height:50px;
        text-align:center;
        &:hover{
          background:rgba(227,29,25,0.8);
        }
      }

    }
  }

}

</style>

