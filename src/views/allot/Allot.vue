<!--  -->
<template>
  <div class="allot_wrap">
    <!-- 头部title -->
    <ul class="head_title clearfix">
      <li class="name">产品名称</li>
      <li class="SKU">SKU</li>
      <li class="price">单价</li>
    </ul>
     <!--商品信息 -->
     <ul class="goods_info clearfix">
      <li class="img">
        <img src="../../assets/images/product_img.png" alt="">
      </li>
      <li class="name">打印机/佳博/GP-U8030011/小票打印机</li>
      <li class="SKU">G0040090</li>
      <li class="price">￥500</li>
    </ul>
    <!-- //tab -->
    <div class="tab_wrap" :style="{'height':H}">
      <ul class="tab_head clearfix">
          <li @click="fnTabs(1)" :class="{'active':isTab == 1}">成交排名</li>
          <li @click="fnTabs(2)" :class="{'active':isTab == 2}">计划分析</li>
      </ul>
      <div class="tab_content" ref="content">
        <div class="search_wrap clearfix">
          <div class="search fl">
            <input type="text" placeholder="请输入供应商名称"><span class="btn-search">搜索</span>
          </div>
          <div class="year fr">
            <dropdown @curText = "fnDropdown"></dropdown>
          </div>
        </div>
        <div class="table_wrap1" v-show="isTab == 1">
          <table>
            <thead>
              <tr >
                <th class="sort">排名</th>
                <th class="order">酒店编号</th>
                <th class="name">酒店名称</th>
                <th class="brand">品牌</th>
                <th class="store">直营/特许</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in goods" :key="item.id">
                <td  class="sort">{{item.id}}</td>
                <td  class="order">{{item.order}}</td>
                <td  class="name">{{item.name}}</td>
                <td  class="brand">{{item.brand}}</td>
                <td  class="store">{{item.store}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table_wrap2" v-show="isTab == 2">
          <table>
            <thead>
              <tr >
                <th class="order">酒店编号</th>
                <th class="name">酒店名称</th>
                <th class="big">产品大类</th>
                <th class="middle">产品中类</th>
                <th class="small">产品小类</th>
                <th class="brand">品牌</th>
                <th class="percent">直营/特许</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in moreGoods" :key="item.id">
                <td  class="order">{{item.order}}</td>
                <td  class="name">{{item.name}}</td>
                <td  class="big">{{item.big}}</td>
                <td  class="middle">{{item.middle}}</td>
                <td  class="small">{{item.small}}</td>
                <td  class="brand">{{item.brand}}</td>
                <td  class="percent">{{item.percent}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pages">
          <pages></pages>
        </div>

        </div>
      </div>
      {{getHeight}}
    </div>
  </div>
</template>

<script>
import Pages from "@/components/Pages" // 分页器
import Dropdown from "@/components/Dropdown" // 下拉菜单
export default {
  name:'Allot',
  data () {
    return {
       goods:[
        {
          id:'0',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'1',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'2',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'3',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'4',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'5',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'6',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'7',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'8',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'9',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'10',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'11',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'12',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'13',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        },
        {
          id:'14',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          store:"直营",
        }
      ],
       moreGoods:[
        {
          id:'0',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'1',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'2',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'3',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'4',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'5',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'6',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'7',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'8',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
         percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'9',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'10',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'11',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'12',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'13',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        },
        {
          id:'14',
          name:"日用杂品*牙刷-莫泰",
          order:'021058',
          brand:'和颐',
          percent:"30%",
          big:'运营耗材',
          middle:'易耗品',
          small:'运营耗材'
        }
      ],
      isTab:1,// 切换
      H:0,
    };
  },
  computed:{
    getHeight(){
      setTimeout(() => {
        this.H = this.$refs.content.offsetHeight + 50 + 'px'
      }, 500);
    }
  },
  methods:{
    // 选项卡切换
    fnTabs(num){
      this.isTab = num
    },
    // 获取下拉菜单内容
    fnDropdown(text){
    },

  },
  components:{
    Pages,
    Dropdown
  }
}
</script>
<style lang ="less" scoped>

.allot_wrap{
  position:relative;
  width:1200px;
  margin:0 auto;
  /* // 头部信息 */
  .head_title{
    padding-top:20px;
    padding-bottom:15px;
    height:19px;
    font-size:14px;
    color:rgba(151,151,151,1);
    line-height:19px;
    li{
      float:left;
      &.name{
        padding-left:164px;
      }
      &.SKU{
        width:100px;
        padding-left:660px;
      }
      &.price{
        width:80px;
        padding-left:95px;
      }
    }
  }
  /* // 商品信息 */
  .goods_info{
    height:90px;
    font-size:14px;
    color:rgba(83,83,83,1);
    line-height:90px;
    background:rgba(249,249,249,1);
    li{
      float:left;
      &.img{
        img{
          display:block;
          width:50px;
          height:50px;
          margin:20px 14px 20px 20px;
        }
      }
      &.name{
        width:652px;
        padding-right:113px;
      }
      &.SKU{
        text-align:center;
        width:100px;
        padding-right:102px;
      }
      &.price{
        width:80px;
        text-align:center;
      }
    }
  }
  /* //表单信息 */
  .tab_wrap{
    margin-top:30px;
    position:relative;
    .tab_head{
      display:inline-block;
      background:#F9F9F9;
      border-top-right-radius:30px;
      position:absolute;
      z-index:3;
      li{
        float:left;
        height:50px;
        font-size:18px;
        font-weight:bold;
        color:rgba(83,83,83,1);
        line-height:50px;
        padding:0px 67px;
        background:#F9F9F9;
        cursor:pointer;
        position:relative;
        &:last-child{
         border-top-right-radius:30px;
        }
        &.active{
          background:#fff;
          border-top-right-radius:30px;
          border:3px solid rgba(235,235,235,1);
          border-bottom:none;
          box-sizing: border-box;

        }
        &.active:after{
          content:'';
          position:absolute;
          bottom:-3px;
          left:0px;
          display: block;
          width:100%;
          height:3px;
          background:#fff;
        }
      }
    }
  }
  /* // 切换内容 */
  .tab_content{
    width:1200px;
    background:rgba(255,255,255,1);
    /* border-radius:0px 25px 0px 0px; */
    border:3px solid rgba(235,235,235,1);
    position:absolute;
    top:50px;
    z-index:2;
    .search_wrap{
      padding:24px 34px 22px 40px;
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
        position:relative;
      }
    }
    /* // 表单 */
    .table_wrap1{
      width:1200px;
        table{
          background:rgba(255,255,255,1);
          .sort{
            width:40px;
            padding-left:96px;
            padding-right:58px;
          }
          .order{
            width:80px;
            padding-right:77px;
          }
          .name{
            width:526px;
            text-align:left;
            /* padding-right:30px; */
          }
          .brand{
            width:50px;
            padding-right:119px;
          }
          .store{
            width:100px;
            padding-right:60px;
          }
          thead{
            tr{
                height:50px;
                display:table;
                table-layout:fixed;
                background:rgba(249,249,249,1);
                th{
                height:50px;
                font-size:14px;
                color:rgba(151,151,151,1);
                line-height:50px;
                text-align:center;
              }
            }
          }
          tbody{
            display:block;
            margin:0px 39px;
            tr{
                height:50px;
                &.active{
                  background:#F4F4F4;
                }
                &:hover{
                  background:#F4F4F4;
                }
                td{
                height:50px;
                font-size:14px;
                color:rgba(83,83,83,1);
                line-height:50px;
                text-align:center;
                border-bottom:1px solid rgba(235,235,235,1);
                &.sort{
                  padding-left:57px;
                }
                &.store{
                  padding-right:20px;
                }
              }
            }

          }

        }

      }
    /* // 表单 */
    .table_wrap2{
      width:1200px;
        table{
          background:rgba(255,255,255,1);
          .order{
            width:92px;
            padding-right:40px;
            padding-left:47px;
          }
          .name{
            width:282px;
            text-align:left;
            /* padding-right:30px; */
          }
          .big{
            width:76px;
            padding-right:74px;
          }
          .middle{
            width:76px;
            padding-right:74px;
          }
          .small{
            width:76px;
            padding-right:74px;
          }
          .brand{
            width:76px;
            padding-right:74px;
          }
          .percent{
            width:84px;
            padding-right:54px;
          }
          thead{
            tr{
                height:50px;
                display:table;
                table-layout:fixed;
                background:rgba(249,249,249,1);
                th{
                height:50px;
                font-size:14px;
                color:rgba(151,151,151,1);
                line-height:50px;
                text-align:center;
              }
            }
          }
          tbody{
            display:block;
            margin:0px 39px;
            tr{
                height:50px;
                &.active{
                  background:#F4F4F4;
                }
                &:hover{
                  background:#F4F4F4;
                }
                td{
                height:50px;
                font-size:14px;
                color:rgba(83,83,83,1);
                line-height:50px;
                text-align:center;
                border-bottom:1px solid rgba(235,235,235,1);
                &.order{
                  padding-left:13px;
                }
                &.percent{
                  padding-right:20px;
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
</style>
