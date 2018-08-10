<!-- 发送方式dialog -->
<template>
  <div class="dialog" v-if="isHide">
    <div class="dialog_content">
      <span class="close" @click="isHide=false"></span>
      <div class="icon_box">
        <img :class="{'fail_icon':iconChange ==1,'success_icon':iconChange ==2}" :src="icon_src" alt="">
      </div>
      <p class="info">发票信息已导入，订单开票成功</p>
      <div class="reason_box" v-if="iconChange ==1">
          <span>错误原因：</span><span></span>{{fail_info}}</span>
      </div>
      <div class="reason_box success_info" v-if="iconChange ==2" @click="errReason">
          <span>点击查看 </span><span class="click_info">{{success_info}}</span>
      </div>
    </div>

    <div class="mask"></div>
  </div>
</template>

<script>
import Fail_icon from '@/assets/images/fail_icon.png'
import Success_icon from '@/assets/images/success_icon.png'
export default {
  name:"ToolTip",
  props:{
    iconChange:{
      type:[Number,String],
      default:2, // 1表示 错误提示框   2表示提示信息
    },
    fail_info:{
      type:String,
      default:'xxxxxxxxxx'
    },
    success_info:{
      type:String,
      default:'发票查询页'
    }
  },
  data () {
    return {
      isHide:false,  // 弹框显示隐藏
    };
  },
  computed:{
    icon_src(){
      return this.iconChange == 1 ? Fail_icon : Success_icon;
    }
  },
  methods:{
    // 错误详情
    errReason(){

    }
  }
}

</script>
<style lang="less" scoped>
.dialog{
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
    .icon_box{
      padding:50px 0px 15px 0px;
      text-align: center;
      .fail_icon{
        display:inline-block;
        width:67px;
        height:51px;
      }
      .success_icon{
        display:inline-block;
        width:55px;
        height:42px;
      }
    }
    .info{
      height:26px;
      font-size:20px;
      font-weight:bold;
      color:rgba(83,83,83,1);
      line-height:26px;
      padding:0px 30px;
      margin-bottom:26px;
      text-align: center;
    }
    .reason_box{
      text-align: center;
      padding-bottom:55px;
      &.success_info{
        cursor:pointer;
      }
      span{
        width:149px;
        height:21px;
        font-size:16px;
        color:#535353;
        line-height:21px;
      }
      .click_info{
        color:#E31D19;
      }
    }
  }

}

</style>

