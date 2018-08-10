<!-- 发票信息 -->
<template>
  <div class="invoice_wrap">
      <h4>使用说明：</h4>
      <div class="note_info">
        <span>1、请在<em>红框内</em>填写发票编号和开票日期；</span>
        <span>2、点击<em>购买方修改按钮</em>可修改购买方信息；</span>
        <span>3、点击<em>添加按钮</em>可添加和修改单张发票的货物信息。</span>
        <span>4、点击<em>数量修改按钮</em>可修改货物实际数量。</span>
      </div>
      <div class="invoice_info" v-for="add in add_inv" :key="add.id" >
          <div class="left_dot dot">
              <span v-for="(item, index) in dot_num" :key="item"></span>
          </div>
          <div class="right_dot dot">
              <span v-for="(item, index) in dot_num" :key="item"></span>
          </div>
          <div class="inv_main">
            <h4>增值税专用发</h4>
            <div class="order_date">
                <div class="inv_order clearfix">
                   <input class="inv_ipt fr" type="text" placeholder="请输入" v-model.number.trim.lazy="inv_order">
                  <span class="order_no fr">No</span>
                </div>
                <div class="inv_date clearfix">
                  <input class="inv_ipt fr" type="text" placeholder="请输入" v-model.number.trim.lazy="inv_date">
                  <span class="inv_date fr">开票日期：</span>
                </div>
            </div>
            <!-- //表单 -->
            <div class="inv_table">
              <!-- //头部 -->
                <ul class="table_head clearfix">
                    <li class="buyer">购买方</li>
                    <li class="name">
                      <p>名 <em class="indent1">称</em>：</p>
                      <p>纳税人识别号：</p>
                      <p>地 址、<em class="indent2">电 话</em>：</p>
                      <p>开户行及账号：</p>
                    </li>
                    <li class="buyer_info">
                      <p>{{buyer.name}}</p>
                      <p>{{buyer.order}}</p>
                      <p>{{buyer.addr}}</p>
                      <p>{{buyer.bank}}</p>
                      <span class="name" ><em @click="fnIsSend">修改</em></span>
                    </li>
                    <li class="pass">密码区</li>
                    <li class="other"></li>
                </ul>
              <!-- //中间 -->
                <div class="table_middle clearfix">
                    <div class="title_wrap">
                        <span class="name">货物或应税劳务、服务名称</span>
                        <span class="type">规格型号</span>
                        <span class="unit">单位</span>
                        <span class="num">数量</span>
                        <span class="price">单价</span>
                        <span class="money">金额</span>
                        <span class="tax_rate">税率</span>
                        <span class="tax">税额</span>
                    </div>
                    <ul class="goods">
                      <li v-for="(item,index) in goods" :key="item.name" class="clearfix">
                        <span class="name">{{item.name}}</span>
                        <span class="type">{{item.type}}</span>
                        <span class="unit">{{item.unit}}</span>
                        <input class="num" type="text" v-model="item.num" :readonly = "!num_flag"  :class="{'active':num_flag}">
                        <!-- <span class="num">{{item.num}}</span> -->
                        <span class="price">{{item.price}}</span>
                        <span class="money">{{item.num*item.price}}</span>
                        <span class="tax_rate">{{item.tax_tate}}</span>
                        <span class="tax">{{item.tax}}</span>
                      </li>
                      <li class="change clearfix">
                        <span class="name"><em @click="fnIsPopList">修改</em></span>
                        <span class="type"></span>
                        <span class="unit"></span>
                        <span class="num">
                          <em class="cancel" v-if="num_flag" @click="fnCanel">取消</em>
                          <em class="sure" @click="fnNumChange">{{textChange}}</em>
                        </span>
                        <span class="price"></span>
                        <span class="money"></span>
                        <span class="tax_rate"></span>
                        <span class="tax"></span>
                      </li>
                      <li class="total clearfix">
                        <span class="name"><em>合<i>计</i></em></span>
                        <span class="type"></span>
                        <span class="unit"></span>
                        <span class="num"></span>
                        <span class="price"></span>
                        <span class="money">¥ 234324</span>
                        <span class="tax_rate"></span>
                        <span class="tax">¥ 234324</span>
                      </li>
                    </ul>
                </div>
               <!-- //合计 -->
                <div class="add_up clearfix">
                  <div class="upper fl">价税合计（大写）</div>
                  <div class="lower fl">
                    <span class="hanzi">伍仟叁佰玖拾玖元</span>
                    <span class="lower_a">（小写）</span>
                    <span class="sum">￥5399.00</span>
                  </div>
                </div>
                <!-- //底部 -->
                <ul class="table_footer clearfix">
                    <li class="buyer">购买方</li>
                    <li class="name">
                      <p>名 <em class="indent1">称</em>：</p>
                      <p>纳税人识别号：</p>
                      <p>地 址、<em class="indent2">电 话</em>：</p>
                      <p>开户行及账号：</p>
                    </li>
                    <li class="buyer_info">
                      <p>{{buyer.name}}</p>
                      <p>{{buyer.order}}</p>
                      <p>{{buyer.addr}}</p>
                      <p>{{buyer.bank}}</p>
                    </li>
                    <li class="pass">备<em>注</em></li>
                    <li class="other">
                      <p>{{buyer.name}}</p>
                       <p>{{buyer.order}}</p>
                    </li>
                </ul>
            </div>
            <!-- //审核信息 -->
            <div class="check_info">
              <ul class="clearfix">
                <li>收款人：</li>
                <li>复核：</li>
                <li>开票人：</li>
                <li>销售方：（章）</li>
              </ul>
            </div>
          </div>
      </div>
      <!-- 添加提交 -->
      <div class="add_submit clearfix">
        <div class="add fl" @click="fnAddInv">
          <i class="add_icon">+</i><span>添加一张发票</span>
        </div>
        <div class="submit fr">发票提交</div>
      </div>
      <!-- 组件 -->
      <div class="insert_box" style="height:60px">
        <insert :insertInfo="insertInfo"></insert>
      </div>

      <!-- <send-dialog :isHide="isSendDialog" @close="fnClose"></send-dialog>
      <pages></pages>
      <tool-tip></tool-tip>
      <err-pop></err-pop>
      <good-rate></good-rate>
      <pop-list :isHide="isPopList" @popListClose="fnPopClose"></pop-list> -->
  </div>
</template>

<script>
  import SendDialog from "@/components/SendDialog" // 发送方式弹框
  import Pages from "@/components/Pages" // 分页器
  import ToolTip from "@/components/ToolTip" // 错误提示框
  import GoodRate from "@/components/GoodRate" // 好评率
  import Insert from "@/components/Insert" // 插入
  import PopList from "@/components/PopList" // 弹框列表
  import ErrPop from "@/components/ErrPop" // 弹框列
export default {
  data () {
    return {
      inv_order:132213, //发票号
      inv_date:132213, //发票日期
      dot_num:[1,2,3,4,5,6,7,8,9], //图标点的数量
      buyer:{
          name:'太原莫泰酒店管理有限公司',
          order:'91310115772351805',
          addr:'太原市杏花岭区北大街68号0351-3966711',
          bank:'交通银行太原城北支行141000510012015000937'
      },
      goods:[
        {
          name:"日用杂品*牙刷-莫泰",
          type:'4g/支',
          unit:'',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          name:'口腔清洁护理品*美加净牙膏4g',
          type:'4g/支',
          unit:'支',
          num:'',
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          name:'洗涤剂*香皂-莫泰',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'',
          tax:30
        },
        {
          name:'塑料制品*小垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          name:'塑料制品*大垃圾袋',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          name:'鞋*拖鞋-莫泰',
          type:'4g/支',
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        }
      ],
      add_id:1,
      add_inv:[
        {id:1}
      ],//添加一张发票
      num_flag:false,// 数量是否可以编辑
      textChange:'修改', // 数量修改
      isSendDialog:false, //发货方式显示隐藏
      isPopList:false,// 商品列表显示隐藏
      insertInfo:{
        import:'批量导入物流信息',
        export:'批量导出选中的订单',
        isBtn:true
      },// 插入信息
    };
  },
  methods:{
    // 添加一张发票
    fnAddInv(){
      this.add_inv.push({id:++this.add_id});
    },
    // 价格修改
    fnNumChange(ev){
      this.num_flag = !this.num_flag;
      this.textChange = this.num_flag ? '保存' :'修改';
    },
    // 取消数量修改
    fnCanel(){
      this.num_flag = false;
      this.textChange= '修改'
    },
    // 发送方式弹框显示隐藏
    fnIsSend(){
      this.isSendDialog = !this.isSendDialog
    },
    //关闭发送方式弹框
    fnClose(flag){
      this.isSendDialog = flag
    },
    // 商品详情列表弹框显示隐藏
    fnIsPopList(){
      this.isPopList = !this.isPopList
    },
    //商品详情列表弹框隐藏
    fnPopClose(flag){
      this.isPopList = flag
    }
  },
  components:{
    SendDialog,
    Pages,
    ToolTip,
    GoodRate,
    Insert,
    PopList,
    ErrPop
  }
}

</script>
<style lang="less" scoped>
.invoice_wrap{
  position: relative;
  width:1040px;
  margin:0 auto;
  padding-top:20px;
  h4{
    width:1030px;
    height:20px;
    font-size:12px;
    color:rgba(151,151,151,1);
    line-height:20px;
  }
  .note_info{
    span{
      width:1030px;
      height:20px;
      font-size:12px;
      color:rgba(151,151,151,1);
      line-height:20px;
      & em{
        color:#E31D19;
      }
    }
  }
  .invoice_info{
    width:1040px;
    height:604px;
    background:rgba(255,250,241,1);
    box-shadow:0px 0px 11px 0px rgba(0,0,0,0.27);
    margin:0 auto;
    margin-top:20px;
    position:relative;
    margin-bottom:60px;
    //左右两边点的样式
    .dot{
      position: absolute;
      z-index:2;
      top:60px;
      width:15px;
      &.left_dot{
        left:15px;
      }
      &.right_dot{
        right:15px;
      }
      span{
        display:inline-block;
        width:18px;
        height:18px;
        border-radius: 50% 50%;
        background:#fff;
        box-shadow: 0px 0px 10px #ccc inset;
        margin-bottom:35px;
      }
    }
    // 发票头部
    .inv_main{
      position:relative;
      width:878px;
      margin:0 auto;
      h4{
        width:878px;
        height:37px;
        font-size:26px;
        color:rgba(53,123,0,1);
        line-height:37px;
        padding-top:36px;
        padding-bottom:41px;
        text-align:center;
      }
      .order_date{
        position:absolute;
        right:0px;
        top:35px;
        span{
          display:inline-block;
        }
        .inv_order{
          margin-bottom:14px;
          .order_no{
            height:29px;
            font-size:26px;
            font-family:MonotypeCorsiva;
            color:rgba(83,83,83,1);
            line-height:30px;
            margin-right:9px;
          }
          .inv_ipt{
            outline:none;
            border:none;
            width:152px;
            height:34px;
            background:rgba(255,255,255,1);
            border-radius:1px;
            border:1px solid rgba(227,29,25,1);
            box-sizing: border-box;
            font-size:24px;
            font-family:ArialMT;
            color:rgba(0,17,220,1);
            line-height:34px;
            text-align:center;
            overflow:hidden;
          }
        }
        .inv_date{
          margin-bottom:14px;
          .inv_date{
            height:26px;
            font-size:16px;
            color:rgba(53,123,0,1);
            line-height:26px;
          }
          .inv_ipt{
            outline:none;
            border:none;
            width:140px;
            height:28px;
            background:rgba(255,255,255,1);
            border-radius:1px;
            border:1px solid rgba(227,29,25,1);
            box-sizing: border-box;
            font-size:14px;
            font-family:ArialMT;
            color:rgba(0,17,220,1);
            line-height:28px;
            text-align:center;
            overflow:hidden;
          }
        }
      }
      //表单样式表
      .inv_table{
        width:878px;
        height:428px;
        background:rgba(255,250,241,1);
        border:1px solid rgba(76,151,20,1);
        box-sizing: border-box;
        //头部样式
        .table_head{
          height:103px;
          border-bottom:1px solid rgba(76,151,20,1);
          box-sizing: border-box;
          li{
            float:left;
            height:103px;
            font-size:16px;
            color:rgba(53,123,0,1);
            box-sizing: border-box;
            position:relative;
            &.buyer{
              width:30px;
              border-right:1px solid rgba(76,151,20,1);
              text-align:center;
              line-height:26px;
              padding-top:12px;
            }
            &.name{
              width:122px;
              padding-top:3px;
              line-height:24px;
              padding-left:10px;
              p{
                em{
                  display:inline-block;
                  &.indent1{
                    margin-left:59px;
                  }
                  &.indent2{
                    margin-left:7px;
                  }
                }

              }
            }
            &.buyer_info{
              width:356px;
              height:102px;
              padding-top:7px;
              font-size:12px;
              color:rgba(0,17,220,1);
              line-height:16px;
              background:#fff;
              border-right:1px solid rgba(76,151,20,1);
              p{
                padding-left:12px;
                margin-bottom:8px;
                &:last-child{
                  margin-bottom:0px;
                }
              }
              span{
                position:absolute;
                right:0px;
                top:0px;
                em{
                    display:inline-block;
                    width:42px;
                    height:24px;
                    background:rgba(227,29,25,1);
                    cursor:pointer;
                    font-size:12px;
                    color:rgba(255,255,255,1);
                    line-height:24px;
                    text-align:center;
                  }
              }
            }
             &.pass{
              width:30px;
              border-right:1px solid rgba(76,151,20,1);
              text-align:center;
              line-height:26px;
              padding-top:12px;
            }
          }
        }
        // 中间样式
        .table_middle{
          width:878px;
          height:193px;
          border-bottom:1px solid rgba(76,151,20,1);
          box-sizing: border-box;
          //头部样式
          .title_wrap{
             width:878px;
             font-size:0px;
             span{
              display:inline-block;
              height:26px;
              font-size:16px;
              color:rgba(53,123,0,1);
              line-height:26px;
              text-align:center;
              border-right:1px solid rgba(76,151,20,1);
              box-sizing: border-box;
              &:last-child{
                border-right:none;
              }
              &.name{
                width:234px;
              }
              &.type{
                width:109px;
              }
              &.unit{
                width:52px;
              }
              &.num{
                width:86px;
              }
              &.price{
                width:104px;
              }
              &.money{
                width:112px;
              }
              &.tax_rate{
                width:51px;
              }
              &.tax{
                width:128px;
              }
             }
          }
          // 商品样式
          .goods{
            li{
              width:878px;
              font-size:0px;
              &:first-child{
                span{
                  padding-top:4px;
                  height:22px;
                  &.name{
                    background:#fff;
                  }
                }
                .num{
                  padding-top:4px;
                  height:22px;
                }
              }
              span{
                display:inline-block;
                float:left;
                height:18px;
                font-size:12px;
                color:rgba(0,17,220,1);
                line-height:18px;
                border-right:1px solid rgba(76,151,20,1);
                box-sizing: border-box;
                &:last-child{
                  border-right:none;
                }
                &.name{
                  width:234px;
                  padding-left:11px;
                  background:#fff;
                }
                &.type{
                  width:109px;
                  padding-left:16px;
                }
                &.unit{
                  width:52px;
                  text-align:center;
                }
                // &.num{
                //   width:86px;
                //   padding-right:10px;
                //   text-align:right;
                //   background:#fff;
                // }
                &.price{
                  width:104px;
                  text-align:center;
                }
                &.money{
                  width:112px;
                  padding-right:10px;
                  text-align:right;
                }
                &.tax_rate{
                  width:51px;
                  text-align:center;
                }
                &.tax{
                  width:128px;
                  padding-right:10px;
                  text-align:right;
                }
              }
              .num{
                display:inline-block;
                outline:none;
                border:none;
                width:86px;
                padding-right:10px;
                text-align:right;
                background:#fff;
                display:inline-block;
                float:left;
                height:18px;
                font-size:12px;
                color:rgba(0,17,220,1);
                line-height:18px;
                border-right:1px solid rgba(76,151,20,1);
                box-sizing: border-box;
                &.active{
                  border-bottom:1px solid rgba(235,235,235,1);
                }
              }
              &.change{
                span{
                  height:34px;
                  &.name{
                    padding-top:10px;
                    em{
                      position:relative;
                      left:-11px;
                      bottom:0px;
                    }
                  }
                  &.num{
                    width:86px;
                    background:#fff;
                    padding-top:10px;
                    padding-right:0px;
                    position:relative;
                    em.cancel{
                      position: absolute;
                      right:43px;
                      bottom:0px;
                      background:#fff;
                      color:rgba(227,29,25,1);
                      &:hover{
                        color:rgba(255,255,255,1);
                        background:rgba(227,29,25,1);
                      }
                    }
                    em.sure{
                      position:absolute;
                      right:0px;
                      bottom:0px;
                    }
                  }
                  em{
                    display:inline-block;
                    width:42px;
                    height:24px;
                    background:rgba(227,29,25,1);
                    cursor:pointer;
                    font-size:12px;
                    color:rgba(255,255,255,1);
                    line-height:24px;
                    text-align:center;
                  }
                }


              }
              &.total{
                border-bottom:1px solid rgba(76,151,20,1);
                span{
                  height:21px;
                  background:#FFFAF1;
                  &.name{
                    text-align: center;
                    em{
                      display:inline-block;
                      width:107px;
                      height:21px;
                      font-size:16px;
                      color:rgba(53,123,0,1);
                      line-height:21px;
                      text-align:left;
                      margin-left:-6px;
                      i{
                        display:inline-block;
                        width:90px;
                        height:21px;
                        font-style: normal;
                        font-size:16px;
                        color:rgba(53,123,0,1);
                        text-align:right;
                      }
                    }
                  }
                  &.money{
                    height:21px;
                    line-height:21px;
                    text-align: center;
                  }
                   &.tax{
                    height:21px;
                    line-height:21px;
                  }
                }
              }
            }
          }

        }
        // 合计样式
        .add_up{
          width:878px;
          height:34px;
          border-bottom:1px solid rgba(76,151,20,1);
          .upper{
            width:234px;
            height:34px;
            font-size:16px;
            color:rgba(53,123,0,1);
            line-height:34px;
            text-align:center;
            border-right:1px solid rgba(76,151,20,1);
            box-sizing: border-box;
          }
          .lower{
              font-size:0px;
              height:34px;
            span{
              display:inline-block;
              height:34px;
              line-height:34px;
              &.hanzi{
                padding-left:15px;
                width:390px;
                font-size:12px;
                color:rgba(0,17,220,1);
              }
              &.lower_a{
                width:70px;
                font-size:16px;
                color:rgba(53,123,0,1);
              }
              &.sum{
                font-size:18px;
                color:rgba(0,17,220,1);
              }
            }

          }
        }
         //头部样式
        .table_footer{
          height:95px;
          box-sizing: border-box;
           li{
            float:left;
            height:95px;
            font-size:16px;
            color:rgba(53,123,0,1);
            box-sizing: border-box;
            &.buyer{
              width:30px;
              border-right:1px solid rgba(76,151,20,1);
              text-align:center;
              line-height:26px;
              padding-top:12px;
            }
            &.name{
              width:122px;
              padding-top:3px;
              line-height:22px;
              padding-left:10px;
              p{
                em{
                  display:inline-block;
                  &.indent1{
                    margin-left:59px;
                  }
                  &.indent2{
                    margin-left:7px;
                  }
                }

              }
            }
            &.buyer_info{
              width:356px;
              height:95px;
              padding-top:6px;
              font-size:12px;
              color:rgba(0,17,220,1);
              line-height:16px;
              border-right:1px solid rgba(76,151,20,1);
              p{
                padding-left:12px;
                margin-bottom:6px;
                &:last-child{
                  margin-bottom:0px;
                }
              }
            }
             &.pass{
              width:30px;
              border-right:1px solid rgba(76,151,20,1);
              text-align:center;
              line-height:26px;
              padding-top:12px;
              em{
                display:inline-block;
                padding-top:20px;
              }
            }
            &.other{
              padding-top:6px;
              font-size:12px;
              color:rgba(0,17,220,1);
              line-height:16px;
              p{
                padding-left:12px;
                margin-bottom:6px;
                &:last-child{
                  margin-bottom:0px;
                }
              }
            }
          }
        }
      }
      //审核信息
      .check_info{
        ul{
          li{
            float:left;
            width:25%;
            padding-left:1.5%;
            height:24px;
            font-size:16px;
            color:rgba(53,123,0,1);
            line-height:24px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  // 添加提交
  .add_submit{
    position:relative;
    width:1040px;
    margin-top:-20px;
    padding-bottom:78px;
    .add{
      width:140px;
      height:34px;
      background:rgba(255,242,241,1);
      border:1px solid rgba(227,29,25,1);
      cursor:pointer;
      text-align:center;
      box-sizing: border-box;
      font-size:0px;
      .add_icon{
        display:inline-block;
        font-size:20px;
        color:rgba(227,29,25,1);
        line-height:34px;
        padding-right:6px;
        position:relative;
        top:0px;
      }
      span{
        display:inline-block;
        height:34px;
        font-size:14px;
        font-weigth:bold;
        color:rgba(227,29,25,1);
        line-height:34px;
        position:relative;
        top:-1px;
      }
    }
    .submit{
      width:159px;
      height:60px;
      background:rgba(211,211,211,1);
      font-size:20px;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:60px;
      text-align:center;
      cursor:pointer;
      &.active{
        background:rgba(227,29,25,1);
        &:hover{
          background:rgba(227,29,25,0.8);
        }
      }
    }
  }
}
</style>
