<!-- 好评论 -->
<template>
  <div class="good-rate">
      <ul class="clearfix">
        <li class="rate_wrap">
          <el-progress type="circle" :percentage="80" color="#95BDFC" :stroke-width="7" :width="77"></el-progress>
          <span>好评率</span>
        </li>
        <li class="company_info">
          <h4>上海竞赢商贸有限公司</h4>
          <div class="level_wrap">
            <span>您当前的级别：</span><span class="level">{{level}}</span>
          </div>
          <div class="level_wrap">
            <span>KPI综合分：</span><span class="level">{{grade}}</span>
          </div>
        </li>
        <li class="level_info">
            <p class="level_state">等级说明：</p>
            <div class="level_box">
              <span class="level4">优秀（4.80~5.00）</span>
              <span class="level3">合格（4.60~4.79）</span>
              <span class="level2">绩差（4.50~4.59）</span>
              <span class="level1">淘汰（4.50以下）</span>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      level:'优秀', // 您当前的级别 内容
      grade:'4.98', // 评分
    };
  },
}

</script>
<style lang="less" scoped>
.good-rate{
  position: relative;
  padding:38px 50px;
  width:1100px;
  border:1px solid rgba(235,235,235,1);
  background:#fff;
  ul{
    li{
      float:left;
      &.rate_wrap{
        text-align:center;
        span{
          display:block;
          height:19px;
          font-size:14px;
          color:rgba(83,83,83,1);
          line-height:19px;
          margin-top:16px;
        }
      }
      &.company_info{
        margin-left:46px;
        border-right:1px solid rgba(235,235,235,1);
        width:642px;
        h4{
          width:180px;
          height:24px;
          font-size:18px;
         font-weight:bold;
          color:rgba(83,83,83,1);
          line-height:24px;
          margin-bottom:20px;
        }
        .level_wrap{
          margin-bottom:17px;
          &:last-child{
            margin-bottom: none;
          }
          span{
            display:inline-blcok;
            height:21px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            color:rgba(151,151,151,1);
            line-height:21px;
          }
          .level{
            height:26px;
            font-size:20px;
            font-weight:bold;
            color:rgba(130,202,58,1);
            line-height:26px;
          }
        }
      }
      &.level_info{
        margin-left:39px;
        width:290px;
        .level_state{
          height:19px;
          font-size:14px;
          color:rgba(151,151,151,1);
          line-height:19px;
          margin-top:10px;
          margin-bottom:14px;
        }
        .level_box{
          span{
            display:inline-block;
            font-size:14px;

            line-height:19px;
            margin-bottom:10px;
            &:nth-child(odd){
              margin-right:44px;
            }
            &.level4{
              color:rgba(130,202,58,1);
            }
            &.level3{
              color:rgba(245,166,35,1);
            }
            &.level2{
              color:rgba(255,108,108,1);
            }
            &.level1{
              color:rgba(168,183,199,1);
            }
          }
        }
      }
    }


  }

}
</style>
