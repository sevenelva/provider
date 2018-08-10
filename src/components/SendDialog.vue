<!-- 发送方式dialog -->
<template>
  <div class="dialog" v-if="isHide">
    <div class="dialog_content">
      <span class="close" @click="fnClose"></span>
      <h3>发送方式</h3>
      <!-- 单选框 -->
      <div class="radio_wrap" >
        <div class="radio_box" @click="fnRadio(1)">
          <input type="radio" name="radio" id="radio1" checked>
          <label for="radio1">物流</label>
        </div>
         <div class="radio_box" @click="fnRadio(2)">
          <input type="radio" name="radio" id="radio2" >
          <label for="radio2">自选</label>
        </div>
      </div>
      <!-- 表单样式 -->
       <div class="from" v-show="radio == 1">
            <div class="info">
              <span class="text">物流公司</span><input type="text"    placeholder="请选择物流公司"><span class="icon"></span>
            </div>
            <div class="info">
              <span class="text">运单号</span><input type="text"    placeholder="请输入运单号">
            </div>
            <div class="info">
              <span class="text">发货时间</span><input type="text"    placeholder="请选择发货时间">
            </div>
        </div>
        <div class="from" v-show="radio == 2">
            <div class="info">
              <span class="text">电话号码</span><input type="text"    placeholder="请输入联系电话" v-model.number.trim="tel">
            </div>
        </div>
        <!-- btn -->
        <div class="btn" @click="fnSubmit">确认发货</div>
    </div>

    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name:"Dialog",
  props:{
    isHide:{
      type:Boolean, // 弹框显示隐藏
    }
  },
  data () {
    return {
      radio:1, // 默认选中
      tel:'', // 手机号码
    };
  },
  methods:{
    // 点击关闭
    fnClose(){
      this.$emit('close',false)
    },
    // 点击发送按钮
    fnSubmit(){
       this.fnClose();
    },
    // 点击单选切换
    fnRadio(num){
      if(num == 1){
        this.radio = 1;
      }else if(num == 2){
        this.radio = 2;
      }
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
    width:600px;
    z-index: 600;
    background:#fff;
    box-sizing: border-box;
    h3{
      height:21px;
      font-size:16px;
      font-weight:bold;
      color:rgba(83,83,83,1);
      line-height:21px;
      padding:24px 0 15px 34px;
    }
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
    .radio_wrap{
      width:100%;
      height:50px;
      text-align: center;
      background:rgba(245,245,245,1);
      // 单选样式
      .radio_box{
        display:inline-block;
        margin-right:111px;
        input{
          display:none;
        }
        label{
          display:inline-block;
          height:50px;
          font-size:14px;
          color:rgba(83,83,83,1);
          line-height:50px;
          background:url('../assets/images/radio_icon.png') left no-repeat;
          background-size:17px 17px;
          padding-left: 25px;
          cursor: pointer;
        }
        & input:checked + label{
          background:url('../assets/images/radio_icon_on.png') left no-repeat;
        }
        &:last-child{
          margin:0px;
        }
      }
    }
    // 表单样式
    .from{
      padding-top:31px;
      padding-bottom:47px;
      height:122px;
      .info{
        width:300px;
        margin:0 auto;
        margin-bottom:16px;
        position:relative;
        &:last-child{
          margin-bottom:0px;
        }
        .text{
          display:inline-block;
          width:56px;
          height:30px;
          font-size:14px;
          font-weight:bold;
          color:rgba(83,83,83,1);
          line-height:30px;
          margin-right:10px;
          text-align:right;
        }
        input{
          outline:none;
          border:none;
          width:223px;
          height:30px;
          background:rgba(255,255,255,1);
          border-radius:18px;
          border:1px solid rgba(235,235,235,1);
          padding-left:14px;
          width:209px;
          box-sizing: border-box;
          color:#535353;
          &::-webkit-input-placeholder {
              color:rgba(211,211,211,1);
          }
        }
        .icon{
          position: absolute;
          right:35px;
          top:15px;
          width:8px;
          height:4px;
          background:url('../assets/images/arrow_down.png') no-repeat;
          background-size:8px 4px
        }

      }
    }
    // btn
    .btn{
      width:188px;
      height:50px;
      background:rgba(227,29,25,1);
      border-radius:30px;
      cursor: pointer;
      height:50px;
      font-size:20px;
      color:rgba(255,255,255,1);
      line-height:50px;
      text-align:center;
      margin:0 auto;
      margin-bottom:40px;
      &:hover{
          background:rgba(227,29,25,0.8);
        }
    }
  }
}

</style>
