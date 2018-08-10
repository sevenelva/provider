<!--  -->
<template>
  <div class="poplist_wrap" v-if="isHide">
    <div class="pop_main">
      <span class="close" @click="fnClose"></span>
      <h3>请选择发票上的货物名称：</h3>
      <div class="table_wrap">
        <table>
          <thead>
             <tr >
              <th class="select">选择</th>
              <th class="name">货物或应税劳务、服务名称</th>
              <th class="type">规格型号</th>
              <th class="unit">单位</th>
              <th class="num">数量</th>
              <th class="price">单价</th>
              <th class="money">金额</th>
              <th class="tax_rate">税率</th>
              <th class="tax">税额</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in goods" :key="item.id" :class="{'active':checkedNames.indexOf(item.id) !== -1}">
              <td class="select" >
                  <div class="check_box">
                    <input type="checkbox" name="check" :id="item.id" :value="item.id" v-model="checkedNames">
                    <label :for="item.id"></label>
                  </div>
              </td>
              <td class="name">{{item.name}}</td>
              <td class="type">{{item.type}}</td>
              <td class="unit">{{item.unit}}</td>
              <td class="num">{{item.num}}</td>
              <td class="price">{{item.price}}</td>
              <td class="money">{{item.num * item.price}}</td>
              <td class="tax_rate">{{item.tax_tate}}</td>
              <td class="tax">{{item.tax}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="all_total clearfix">
          <div class="total fr">
            <span class="text">总计金额：</span>
            <span class="total_money">￥{{totalMoney.allMoney}}</span>
          </div>
          <div class="product fl">产品总数：{{goods.length}}</div>
      </div>
      <!-- // 全选 -->
      <div class="footer_wrap">
        <ul class="clearfix">
          <li class="check_box fl">
              <input type="checkbox" name="check" id="checkAll" >
              <label for="checkAll" @click="fnAllChecked">全选</label>
          </li>
          <li class="btn fr" @click="fnSure">批量确认发货</li>
          <li class="footing fr">
            <span class="text">合计：</span>
            <span class="total_money">￥{{totalMoney.selectedMoney}}</span>
          </li>
          <li class="selected fr">已选产品<span> {{checkedNames.length}} </span>件 </li>
        </ul>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name:'PopList',
  props:{
    isHide:{
      type:Boolean, // 弹框显示隐藏
    }
  },
  data () {
    return {
      goods:[
        {
          id:'0',
          name:"日用杂品*牙刷-莫泰",
          type:'4g/支',
          unit:'',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'1',
          name:'口腔清洁护理品*美加净牙膏4g',
          type:'4g/支',
          unit:'支',
          num:0,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'2',
          name:'洗涤剂*香皂-莫泰',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'',
          tax:30
        },
        {
          id:'3',
          name:'塑料制品*小垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'4',
          name:'塑料制品*大垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'5',
          name:'鞋*拖鞋-莫泰',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
         {
          id:'6',
          name:'塑料制品*小垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'7',
          name:'塑料制品*大垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'8',
          name:'鞋*拖鞋-莫泰',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        }, {
          id:'9',
          name:'塑料制品*小垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'10',
          name:'塑料制品*大垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'11',
          name:'鞋*拖鞋-莫泰',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        }, {
          id:'12',
          name:'塑料制品*小垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'13',
          name:'塑料制品*大垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          id:'14',
          name:'鞋*拖鞋-莫泰',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        }
      ],
      checkedNames: [],//选中的表
    };
  },
  computed:{
    // 所有商品总金额
    totalMoney(){
      let allMoney = 0;
      let selectedMoney = 0;
      for(let i = 0; i< this.goods.length;i++){
        let num = parseFloat(this.goods[i].num);
        let price = parseFloat(this.goods[i].price)
        if(num > 0 && price !== 0){
            allMoney += num * price
            if(this.checkedNames.indexOf(this.goods[i].id) !== -1){
              selectedMoney += num * price
            }
        }
      }
      return {allMoney,selectedMoney}
    }
  },
  methods:{
    // 关闭
    // 点击关闭
    fnClose(){
      this.$emit('popListClose',false)
    },
    // 确认发货
    fnSure(){
      this.$emit('popListClose',false)
    },
    // 全选
    fnAllChecked(){
      if(this.goods.length == this.checkedNames.length){
        this.checkedNames = [];
      }else{
         this.checkedNames = [];
        for(let i = 0; i< this.goods.length;i++){
          this.checkedNames.push(this.goods[i].id)
        }
      }

    }


  }
}

</script>


<style lang="less" scoped>
  .poplist_wrap{
    .pop_main{
      position: fixed;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      width:876px;
      height:498px;
      z-index: 600;
      background:#fff;
      padding:33px 37px 19px;
       h3{
          height:24px;
          font-size:18px;
          font-weight:bold;
          color:rgba(83,83,83,1);
          line-height:24px;
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
        .table_wrap{
          width:866px;
          height:344px;
          border:1px solid rgba(235,235,235,1);
          margin-top:13px;
           table{
              max-height:344px;
              background:rgba(255,255,255,1);
              thead{
                tr{
                   height:40px;
                   display:table;
                   table-layout:fixed;
                   th{
                    height:40px;
                    font-size:14px;
                    color:rgba(151,151,151,1);
                    line-height:40px;
                  }
                }
              }
              tbody{
                display:block;
                height:304px;
                overflow-y:scroll;
                 &::-webkit-scrollbar {/*滚动条整体样式*/
                      width: 7px;     /*高宽分别对应横竖滚动条的尺寸*/
                      height: 1px;
                  }
                &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
                        border-radius: 10px;
                        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                        background: #979797;
                    }
                &::-webkit-scrollbar-track {/*滚动条里面轨道*/
                        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
                        border-radius: 10px;
                        background: #EBEBEB;
                    }
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
                  }
                }

              }
              .select{
                width:28px;
                padding-left:14px;
                padding-right:17px;
                  .check_box{
                    input{
                      display:none;
                    }
                    label{
                      display:inline-block;
                      width:17px;
                      height:17px;
                      background:url('../assets/images/bill_choose_icon.png') left no-repeat;
                      background-size:17px 17px;
                      cursor: pointer;
                      position:relative;
                      top:2px;
                    }
                    & input:checked + label{
                      background:url('../assets/images/bill_chooseon_icon.png') left no-repeat;
                    }
                  }

              }
              .name{
                width:192px;
                padding-right:13px;
              }
              .type{
                width:68px;
                padding-right:30px;
              }
              .unit{
                width:28px;
                padding-right:30px;
              }
              .num{
                width:42px;
                padding-right:30px;
              }
              .price{
                width:99px;
                padding-right:30px;
              }
              .money{
                width:60px;
                padding-right:30px;
              }
              .tax_rate{
                width:54px;
                padding-right:30px;
              }
              .tax{
                width:64px;
              }

            }

        }
        // 产品总数
        .all_total{
          padding-top:9px;
          padding-bottom:29px;
          .product{
            height:19px;
            font-size:14px;
            color:rgba(83,83,83,1);
            line-height:19px;
          }
          .total{
            height:19px;
            font-size:14px;
            font-weight:bold;
            line-height:19px;
            .text{
              display:inline-block;
              width:70px;
              color:rgba(83,83,83,1);
            }
            .total_money{
              display:inline-block;
              font-size:18px;
              color:rgba(227,29,25,1);
            }
          }
        }
        // 底部综合
        .footer_wrap{
          position:relative;
          width:871px;
          height:60px;
          background:rgba(255,255,255,1);
          border:1px solid rgba(235,235,235,1);
          box-sizing: border-box;
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
              &.footing{
                padding:20px 0px;
                padding-right:29px;
                .text{
                  display:inline-block;
                  width:42px;
                  height:20px;
                  font-size:14px;
                  color:rgba(83,83,83,1);
                  line-height:20px;
                  vertical-align: middle;
                }
                .total_money{
                  display:inline-block;
                  height:20px;
                  font-size:20px;
                  font-family:"Arial";
                  color:rgba(227,29,25,1);
                  font-weight:bold;
                  line-height:20px;
                  vertical-align: middle;
                }

              }
              &.selected{
                height:60px;
                font-size:14px;
                color:rgba(83,83,83,1);
                line-height:60px;
                padding-right:44px;
                span{
                  display:inline-block;
                  color:#E31D19;
                  padding:0px 5px;
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
                margin-top:-1px;
                cursor: pointer;
              }
            }
          }
        }
    }
  }
</style>
