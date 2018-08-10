<!--  -->
<template>
  <div class="insert_wrap" :class="{'active':fixed}">
    <ul class="clearfix">
      <li class="check_box fl">
          <input type="checkbox" name="check" id="check1"  @click="fnChecked">
          <label for="check1">{{isCheckedAll==true?'全选':'全不选'}}</label>
      </li>
      <li class="fl insert">
        <i></i>
        <span>{{insertInfo.import}}</span>
      </li>
      <li class="btn fr" v-if="insertInfo.isBtn">批量确认发货</li>
      <li class="fr insert">
        <i></i>
        <span>{{insertInfo.export}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  props:{
    insertInfo:{
      type:Object,
      required:true
    }
  },
  data () {
    return {
      isCheckedAll:true,
      fixed:false,
    };
  },
  mounted() {
    let This = this
    window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight + 122 >=scrollHeight){
          if(This.fixed){
            return;
          }
          This.fixed = true
        }else{
          if(!This.fixed){
            return;
          }
          This.fixed = false
        }
      }
  },
  methods:{
    // 全选
    fnChecked(){
      this.$emit("checkedAll",this.isCheckedAll);
      this.isCheckedAll=!this.isCheckedAll;
    }
  }
}

</script>
<style lang="less" scoped>
.insert_wrap{
  position:fixed;
  z-index:10;
  bottom:0px;
  width:1200px;
  height:60px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(235,235,235,1);
  box-sizing: border-box;
  &.active{
    position:static;
  }
  ul{
    li{
      height:60px;
      &.check_box{
        display:inline-block;
        margin-left:12px;
        margin-right:33px;
        input{
          display:none;
        }
        label{
          display:inline-block;
          height:60px;
          font-size:14px;
          color:rgba(83,83,83,1);
          line-height:60px;
          background:url('../assets/images/bill_choose_icon.png') left no-repeat;
          background-size:17px 17px;
          padding-left: 26px;
          cursor: pointer;
        }
        & input:checked + label{
          background:url('../assets/images/bill_chooseon_icon.png') left no-repeat;
        }
      }
      &.insert{
        width:200px;
        height:34px;
        background:rgba(255,242,241,1);
        border-radius:17px;
        border:1px solid rgba(227,29,25,1);
        text-align:center;
        box-sizing: border-box;
        margin-top:13px;
        cursor: pointer;
        i{
          display:inline-block;
          width:13px;
          height:13px;
          background:url('../assets/images/daoru_icon.png') no-repeat;
          background-size:13px 13px;
          position:relative;
          top:2px;
        }
        span{
          display:inine-block;
          height:34px;
          font-size:14px;
          font-weight:bold;
          color:rgba(227,29,25,1);
          line-height:34px;
        }
      }
      &.btn{
        width:159px;
        height:60px;
        background:rgba(227,29,25,1);
        font-size:20px;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:60px;
        margin-left:40px;
        text-align:center;
        cursor: pointer;
        margin-top:-1px;
        &:hover{
          background:rgba(227,29,25,0.8);
        }
      }
    }
  }
}
</style>
