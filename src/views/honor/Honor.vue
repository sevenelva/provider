<!--  -->
<template>
  <div class="honor_wrap">
      <div class="goodRate">
        <good-rate></good-rate>
      </div>
      <div class="tab_box">
        <div class="tab_content">
          <div class="search_wrap clearfix">
            <div class="search fl">
              <input type="text" placeholder="请输入供应商名称"><span class="btn-search">搜索</span>
            </div>
            <div class="year fr">
              <span class="text">2018</span>
            </div>
          </div>
          <div class="table_wrap2">
            <table>
              <thead>
                <tr >
                  <th class="order">成交时间</th>
                  <th class="name">订单编号</th>
                  <th class="big">成交金额</th>
                  <th class="middle">订单评价</th>
                  <th class="small">信誉分</th>
                  <th class="brand">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in moreGoods" :key="item.id">
                  <td  class="order">{{item.order}}</td>
                  <td  class="name">{{item.name}}</td>
                  <td  class="big">{{item.big}}</td>
                  <td  class="middle">
                    {{item.middle}}
                    <div class="complain" v-if="item.complain">
                      <span class="icon_complain"></span>
                      <div class="hover_wrap">
                        <hover-tips>
                          <ul slot="hover">
                              <li>
                                  <b class="complain">投诉内容：</b>
                                  <p>物流超慢，联系不上快递员，等了一年才送到，送到还要我自己搬上楼，还少发一半的牙刷。</p>
                              </li>
                          </ul>
                        </hover-tips>
                      </div>

                    </div>
                  </td>
                  <td  class="small">{{item.small}}</td>
                  <td  class="brand"><span>{{item.brand}}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pages">
            <pages></pages>
          </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import Pages from "@/components/Pages" // 分页器
import GoodRate from "@/components/GoodRate" // 好评率
import HoverTips from "@/components/HoverTips" // 提示框
export default {
  name:'Honor',
  data () {
    return {
        moreGoods:[
        {
          id:'0',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'品',
          small:'+3',
          complain:false
        },
        {
          id:'1',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'2',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'3',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'4',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'5',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'6',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'7',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'8',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
         percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'9',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'10',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'11',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'12',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'13',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3',
          small:'+3',
          complain:false
        },
        {
          id:'14',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'+3',
          middle:'+3+3+3+3+3',
          small:'+3',
          complain:true
        }
      ],
    };
  },
  components:{
    GoodRate,
    Pages,
    HoverTips
  }
}

</script>
<style lang = "less" scoped>
.honor_wrap{
  position:relative;
  width:1200px;
  margin:0 auto;
  .goodRate{
    padding:20px 0px;
  }
  /* // 切换内容 */
  .tab_box{
    position:relative;
    .tab_content{
      width:1200px;
      background:rgba(255,255,255,1);
      .search_wrap{
        padding:18px 34px 17px 40px;
        background:rgba(249,249,249,1);
        .search{
          input{
            outline:none;
            border:none;
            width:281px;
            height:34px;
            line-height:34px;
            background:rgba(255,255,255,1);
            border-radius:18px 0px 0px 18px;
            border:1px solid rgba(211,211,211,1);
            font-size:14px;
            color:rgba(211,211,211,1);
            padding-left:16px;
            overflow:hidden;
            box-sizing: border-box;
            vertical-align: middle;
          }
          .btn-search{
            display:inline-block;
            width:67px;
            height:34px;
            background:rgba(245,245,245,1);
            border-radius:0px 18px 18px 0px;
            border:1px solid rgba(211,211,211,1);
            border-left:none;
            font-size:14px;
            color:rgba(83,83,83,1);
            line-height:34px;
            text-align:center;
            box-sizing: border-box;
            vertical-align: middle;
            cursor:pointer;
          }
        }
        .year{
          .text{
            display:inline-block;
            height:34px;
            font-size:16px;
            font-family:"Arial";
            font-weight:bold;
            color:rgba(83,83,83,1);
            line-height:34px;
            background:url('../../assets/images/arrow_down.png') right no-repeat;
            padding-right:18px;
            &.active{
              background:url('../../assets/images/arrow_right.png') right no-repeat;
            }
          }
        }
      }
      .table_wrap2{
        width:1200px;
          table{
            background:rgba(255,255,255,1);
            margin-top:8px;
            .order{
              width:120px;
              padding-right:112px;
              padding-left:28px;
            }
            .name{
              width:147px;
              padding-right:105px;
            }
            .big{
              width:80px;
              padding-right:50px;
            }
            .middle{
              width:200px;
              padding-right:74px;
              .complain{
                cursor:pointer;
                position:relative;
                display:inline-block;
                margin-left:21px;
                top:3px;
                .icon_complain{
                  display:inline-block;
                  width:14px;
                  height:14px;
                  background:url('../../assets/images/complain.png') no-repeat;
                }
                .hover_wrap{
                  position:absolute;
                  z-index:10 !important;
                  left:-53px;
                  top:43px;
                  display:none;
                  ul{
                    li{
                      .complain{
                          display:block;
                          width:228px;
                          font-size:12px;
                          color:rgba(83,83,83,1);
                          line-height:20px;
                          text-align:left;
                          margin-left:0px;
                          top:0px;
                        }
                        p{
                          width:228px;
                          font-size:12px;
                          color:rgba(83,83,83,1);
                          line-height:20px;
                          text-align:left;
                        }
                    }
                  }
                }
                &:hover{
                  .hover_wrap{
                      display:block;
                  }
                }
              }
            }
            .small{
              width:42px;
              padding-right:110px;
            }
            .brand{
              width:90px;
              padding-right:30px;
            }
            thead{
              tr{
                  height:50px;
                  display:table;
                  table-layout:fixed;
                  th{
                    height:50px;
                    font-size:14px;
                    color:rgba(151,151,151,1);
                    line-height:50px;
                    text-align:center;
                    border-bottom:1px solid rgba(235,235,235,1);
                  }
              }
            }
            tbody{
              display:block;
              tr{
                  height:50px;
                  &.active{
                    background:#F4F4F4;
                  }
                  /* &:hover{
                    background:#F4F4F4;
                  } */
                  td{
                  height:50px;
                  font-size:14px;
                  color:rgba(83,83,83,1);
                  line-height:50px;
                  text-align:center;
                  border-bottom:1px solid rgba(235,235,235,1);
                  /* overflow: hidden;
                  text-overflow:ellipsis;
                  white-space: nowrap; */
                  &.brand span{
                    display:inline-block;
                    width:90px;
                    height:30px;
                    background:rgba(254,243,243,1);
                    border-radius:17px;
                    font-size:14px;
                    color:rgba(227,29,25,1);
                    line-height:30px;
                    cursor:pointer;
                  }
                }
              }

            }

          }

        }
      .pages{
        padding-top:25px;
        padding-bottom:40px;
      }
    }
  }

}
</style>
