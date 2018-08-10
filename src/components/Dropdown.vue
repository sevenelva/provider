<!-- 发送方式dialog -->
<template>
  <div class="dropdown_wrap">
      <slot name="hover">
            <span class="text">{{tabText}}年度</span>
            <ul class="express_info">
                <li @click="fnText($event)">2018</li>
                <li @click="fnText($event)">2017</li>
                <li @click="fnText($event)">2016</li>
                <li @click="fnText($event)">2015</li>
            </ul>
        </slot>
  </div>
</template>

<script>
export default {
  name:"Dropdown",
  data () {
    return {
      tabText:'2018', //切换内容
    };
  },
  methods:{
    // 获取当前text
    fnText(ev){
      this.tabText = ev.target.innerText
      this.$emit('curText',ev.target.innerText)
    }
  }
}

</script>
<style lang="less" scoped>
.dropdown_wrap{
    position:relative;
    .text{
      display:inline-block;
      height:34px;
      font-size:16px;
      font-family:"Arial";
      font-weight:bold;
      color:rgba(83,83,83,1);
      line-height:34px;
      background:url('../assets/images/nav_down.png') right no-repeat;
      padding-right:18px;
      &.active{
        background:url('../assets/images/arrow_right.png') right no-repeat;
      }
    }
    &:hover{
      .express_info{
        display: block;
      }
    }
    .express_info{
        position: absolute;;
        background:#F9F9F9;
        box-shadow:0px 0px 4px 0px rgba(0,0,0,0.23);
        border-radius:5px;
        text-align:center;
        padding:5px 0px;
        display:none;
        &:before{
            content:"";
            position:absolute;
            left:50%;
            top:-10px;
            margin-left:-10px;
            height:10px;
            width:20px;
            background:url("../assets/images/arrow-up.png") no-repeat center center;
        }
        li{
            position:relative;
            padding:0px 24px;
            line-height: 30px;
            color:#535353;
            font-size:12px;
            cursor:pointer;
            &:hover{
              background:#fff;
            }
        }
    }
}

</style>

