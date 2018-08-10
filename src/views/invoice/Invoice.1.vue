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
      <div class="invoice_info">
          <input class="inv_order" type="text" placeholder="请输入" v-model.number.trim.lazy="inv_order">
          <input class="inv_date" type="text" placeholder="请输入" v-model.trim.lazy="inv_date">
          <!-- 购买方信息 -->
          <div class="buyer_info">
            <ul>
              <li>{{buyer.name}}</li>
              <li>{{buyer.order}}</li>
              <li>{{buyer.addr}}</li>
              <li>{{buyer.bank}}</li>
            </ul>
            <div class="edit_btn">修改</div>
          </div>
          <!-- 物品名称 -->
          <div class="goods_name">
              <ul>
                <li v-for="(item,index) in goods" :key="item.name">
                  <span class="name">{{item.name}}</span>
                  <span class="type">{{item.type}}</span>
                  <span class="unit">{{item.unit}}</span>
                  <span class="num">{{item.num}}</span>
                  <span class="price">{{item.price}}</span>
                  <span class="money">{{item.num*item.price}}</span>
                  <span class="tax_rate">{{item.tax_tate}}</span>
                  <span class="tax">{{item.tax}}</span>
                </li>
              </ul>
              <div class="edit_btn">修改</div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      inv_order:132213, //发票号
      inv_date:132213, //发票日期
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
          unit:'支',
          num:5,
          price:0.234324,
          tax_tate:'16.3%',
          tax:30
        },
        {
          name:'口腔清洁护理品*美加净牙膏4g',
          type:'4g/支',
          unit:'支',
          num:5,
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
          tax_tate:'16.3%',
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
      ]
    };
  },
}

</script>
<style lang="less" scoped>
.invoice_wrap{
  position: relative;
  width:1200px;
  margin:0 auto;
  padding-top:20px;
  h4{
    width:1030px;
    height:20px;
    font-size:12px;
    color:rgba(151,151,151,1);
    line-height:20px;
    margin-left:15px;
  }
  .note_info{
    margin-left:15px;
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
    width:1062px;
    height:626px;
    background:url('../../assets/images/invoice.png') no-repeat;
    background-size:1062px 626px;
    position:relative;
    .inv_order{
      position: absolute;
      z-index:2;
      top:46px;
      right:93px;
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
    .inv_date{
      position: absolute;
      z-index:2;
      top:94px;
      right:93px;
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
    // 购买方信息
    .buyer_info{
      position:absolute;
      top:125px;
      left:245px;
      padding-left:12px;
      background:#fff;
      width:342px;
      height:103px;
      ul{
        padding-top:8px;
        li{
          height:16px;
          font-size:12px;
          color:rgba(0,17,220,1);
          line-height:16px;
          margin-bottom:8px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          &:last-child{
            margin-bottom:none;
          }
        }
      }
      .edit_btn{
        position: absolute;
        right:0px;
        top:0px;
        width:42px;
        height:25px;
        background:rgba(227,29,25,1);
        font-size:12px;
        color:rgba(255,255,255,1);
        line-height:25px;
        text-align:center;
        cursor:pointer;
      }

    }
    // 商品名称
    .goods_name{
      position:absolute;
      top:255px;
      left:93px;
      padding-left:12px;
      background:#fff;
      height:144px;
      ul{
        padding-top:4px;
        height:140px;
        li{
          span{
            display:inline-block;
            height:18px;
            font-size:12px;
            color:rgba(0,17,220,1);
            line-height:18px;
            box-sizing: border-box;
            &.name{
              width:224px;
            }
            &.type{
              width:108px;
              border-left:1px solid rgba(76,151,20,1);
              border-right:1px solid rgba(76,151,20,1);
            }
            &.unit{
              width:50px;
            }
            &.num{
              width:85px;
            }
            &.price{
              width:103px;
            }
            &.money{
              width:111px;
            }
            &.tax_rate{
              width:43px;
            }
            &.tax{
              width:208px;
            }

          }
          &:last-child{
            margin-bottom:none;
          }
        }
      }
      .edit_btn{
        position: absolute;
        bottom:0px;
        left:0px;
        width:42px;
        height:25px;
        background:rgba(227,29,25,1);
        font-size:12px;
        color:rgba(255,255,255,1);
        line-height:25px;
        text-align:center;
        cursor:pointer;
      }

    }
  }
}
</style>
