<!-- by your name -->
<template>
    <div class="main_order_detail main_w1200">

        <div class="box_status clearfix">
            <div class="side">
                <div class="num">订单编号：{{this.$route.query.id}}</div>
                <h3>待发货</h3>
                <div class="btn">确认发货</div>
            </div>
            <ul class="box_step">
                <li>
                    <div class="txt">提交订单</div>
                    <div class="date">2018-08-12 15:23:48</div>
                </li>
                <li>
                    <div class="txt">确认订单</div>
                    <div class="date">2018-08-12 15:23:48</div>
                </li>
                <li v-if="allData.OrgType='1'">
                    <div class="txt">已收款</div>
                </li>
                <li>
                    <div class="txt">已发货</div>
                </li>
                <li v-if="allData.OrgType='1'">
                    <div class="txt">已收货</div>
                </li>
                <li v-if="allData.OrgType='0'">
                    <div class="txt">买家收货</div>
                </li>
                <li>
                    <div class="txt">已开票</div>
                </li>
                <li v-if="allData.OrgType='0'">
                    <div class="txt">发票已审</div>
                </li>
                <li>
                    <div class="txt">已收款</div>
                </li>
            </ul>
        </div>
        <div class="box_logistics"> 
            <div class="title">物流信息</div>
            <div class="con clearfix">
                <div class="name">{{allData.LogisticsName}}<span class="num">运单号：212197380219</span></div>
                <div class="more">
                    <span class="more_title">更多<i></i></span>
                    <div class="more_con">
                        <hover-tips>
                            <div slot="hover">
                                <ul>
                                    <li class="clearfix">
                                        <span class="date">2018-06-25 11:57:22</span>
                                        <span class="txt">【上海市】快件已在上海徐汇签收 签收人：本人,感谢您使用中通快递，期待再次为您服务!，如有疑问请联系快递员</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-25 11:00:09</span>
                                        <span class="txt">【上海市】上海徐汇派件员：刘文隆 15900781624正在为您派件</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-24 07:12:03</span>
                                        <span class="txt">【上海市】快件已到达 上海徐汇</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-24 05:49:18</span>
                                        <span class="txt">【上海市】快件已到达 上海</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-24 04:40:03</span>
                                        <span class="txt">【上海市】快件已从上海发出，准备发往上海市</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-24 04:21:44</span>
                                        <span class="txt">【上海市】快件已从上海浦东中心发出，准备发往上海市</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-23 00:29:16</span>
                                        <span class="txt">【深圳市】快件已从深圳中心发出，准备发往上海市</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-23 00:28:55</span>
                                        <span class="txt">【深圳市】快件已到达 深圳中心</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-22 16:27:26</span>
                                        <span class="txt">【深圳市】中通快递 深圳龙华收件员 已揽件</span>
                                    </li>
                                    <li class="clearfix">
                                        <span class="date">2018-06-22 10:09:08</span>
                                        <span class="txt">卖家发货 以下信息由物流公司提供，如无跟踪信息或有疑问，请查中通快递官方网站或联系其公示电话</span>
                                    </li>
                                </ul>
                                <div class="tips">以下信息由物流公司提供，如无跟踪信息或有疑问，请查中通快递官方网站或联系其公示电话</div>
                            </div>
                        </hover-tips>
                    </div>
                </div>

                <div class="detail">2018-06-25 11:57:22[上海市]快件已在上海徐汇签收 签收人：本人,感谢您使用中通快递，期待再次为您服务! …</div>

            </div>
        </div>
        <div class="box_info">
            <div class="title">订单信息</div>
            <ul class="info_list clearfix">
                <li><b>项目档案：</b><span>{{allData.ApplyProjectCode}}</span></li>
                <li><b>项目经理：</b><span>{{allData.ApplyProjectManager}}</span></li>
                <li><b>项目名称：</b><span>{{allData.ApplyProjectName}}</span></li>
                <li><b>酒店名称：</b><span>{{allData.OrgName}}</span></li> 
            </ul>
            <ul class="info_list clearfix">
                <li><b>收货人：</b><span>{{allData.ReceiverName}} {{allData.ReceiverPhone}}（{{allData.ReceiverEmail}}）</span></li>
                <li><b>收货地址：</b><span>{{allData.ReceiverAddress}}</span></li>
            </ul>
            <ul class="info_list clearfix">
                <li><b>付款公司：</b><span>{{allData.PayCompany}}</span></li>
                <li><b>发票抬头：</b><span>{{allData.InvoiceTitle}}</span></li>
            </ul>
            <ul class="info_list clearfix">
                <li><b>期望到货时间：</b><span>{{allData.ExpectReceiveDate}}</span></li>
            </ul>
        </div>
        <div class="box_product">
            <div class="title">产品列表</div>
            <dl class="product_list">
                <dt class="clearfix">
                    <div class="name">产品名称</div>
                    <div class="sku">SKU</div>
                    <div class="single_price">单价</div>
                    <div class="num">申请数量</div>
                    <div class="unit">单位</div>
                    <div class="price">小计</div>
                </dt>
                <dd class="clearfix" v-for="item of allData.OrderLineList" :key="item.ProductId">
                    <div class="name">
                        <div class="img">
                            <img src="item.picUrl">
                        </div>
                        <div class="txt">{{item.ProductName}}</div>
                    </div>
                    <div class="sku">{{item.sku}}</div>
                    <div class="single_price">{{item.Price}}</div>
                    <div class="num">{{item.BuyCount}}</div>
                    <div class="unit">{{item.Unit}}</div>
                    <div class="price">￥{{item.num*item.LineAmount}}</div>
                </dd>
            </dl>
            <div class="sum clearfix">
                <span class="num" v-if="allData.OrderLineList">产品总数：<b>{{allData.OrderLineList.length}}</b></span>
                <span class="price">总计金额：<b>￥{{totalPrice}}</b></span>
            </div>
        </div>
        <div class="box_ticket">
            <div class="title">已开发票</div>
            <table>
                <tr>
                    <th width="224">发票类型</th>
                    <th width="130">价税合计</th>
                    <th width="130">税额</th>
                    <th width="144">发票号码</th>
                    <th width="164">发票日期</th>
                    <th width="87">金额</th>
                    <th width="64">税率</th>
                    <th width="128">发票状态</th>
                    <th width="129">操作</th>
                </tr>
                <tr v-for="item of ticketList" :key="item.id">
                    <td width="224">{{item.ticketKind}}</td>
                    <td width="130">￥{{item.taxPrice+item.price}}</td>
                    <td width="130">￥{{item.taxPrice}}</td>
                    <td width="144">{{item.num}}</td>
                    <td width="164">{{item.date}}</td>
                    <td width="87">￥{{item.price}}</td>
                    <td width="64">{{item.rate}}</td>
                    <td width="128">{{item.status}}</td>
                    <td width="129">
                       <div class="look">发票预览</div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="box_comment">
            <div class="title">评价信息</div>
            <div class="info clearfix">
                <div class="comment">
                    <label>订单评价：</label>
                    <div class="comment_con">
                        <div class="txt">这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，这里是说明文字，</div>
                        <div class="img_list">
                            <div class="img">
                                <img src="../../assets/images/product_img.png">
                            </div>
                            <div class="img">
                                <img src="../../assets/images/product_img.png">
                            </div>
                            <div class="img">
                                <img src="../../assets/images/product_img.png">
                            </div>
                        </div>
                    </div>
                </div>
                <StarProduct :star="start_info" ></StarProduct>
                <StarProduct :star="start_info1" ></StarProduct>
                <StarProduct :star="start_info2" ></StarProduct>
            </div>

        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import HoverTips from "@/components/HoverTips.vue";
    import StarProduct from "@/components/StarProduct.vue";
    export default {
        name:"OrderDetail",
        components:{
            HoverTips,
            StarProduct
        },
        data () {
            return {
                start_info:{
                    width:20,
                    name:'产品质量',
                    pingfen:3.7

                },
                start_info1:{
                    width:50,
                    name:'物流服务',
                    pingfen:4.7

                }, 
                start_info2:{
                    width:100,
                    name:'服务态度',
                    pingfen:5

                },               
                ticketList:[
                    {
                        id:'1',
                        ticketKind:"增值税专用发票",
                        taxPrice:288.35,
                        num:"00085192",
                        date:"2018-06-23",
                        price:232,
                        rate:"3%",
                        status:"已审核"
                    },  {
                        id:'2',
                        ticketKind:"增值税专用发票",
                        taxPrice:288.35,
                        num:"00085192",
                        date:"2018-06-23",
                        price:232,
                        rate:"3%",
                        status:"已审核"
                    }
                ],
                allData:{},
            };
        },
        computed:{
            totalPrice(){
                var price=0;
                if(this.allData.OrderLineList){
                    for(var i=0;i<this.allData.OrderLineList.length;i++){
                        price+=this.allData.OrderLineList[i].LineAmount
                    }
                    return price;
                }
               
            }
        },
        mounted(){
          this.aaa()
        },
        methods:{
          aaa:async function() {
              let params = {
                  OrderNo: '072700000011'
              }
              let obj = {
                    isLoading:false
              }
              const res = await this.$root.http.post('Order/GetOrderDetail', params, this,obj)
              if(res.data.Code == '0'){
                this.allData = res.data.Data
              }

          }
        }
    }

</script>
<style lang='less' scoped>
.main_order_detail{
    .box_status{
        margin-top:22px;
        background:#F9F9F9;
    }
    .side{
        float:left;
        width:284px;
        border-right:1px solid #EBEBEB;
        text-align: center;
        .num{
            padding-top:24px;
            line-height: 19px;
            color:#979797;
            font-size:14px;
        }
        h3{
            margin-top:22px;
            line-height: 31px;
            font-size:24px;
            color:#535353;
            font-weight: bold;
        }
        .btn{
            display: inline-block;
            margin:18px 0 27px;
            width:90px;
            height:30px;
            border-radius: 30px;
            line-height: 30px;
            background:#e31d19;
            color:#fff;
            font-size:14px;
            cursor: pointer;
            &:hover{
                background: rgba(227,29,25,0.8);
            }
        }
    }
    .box_step{
        margin-left:364px;
        li{
            position: relative;
            float:left;
            margin-right:21px;
            padding-top:42px;
            width:91px;
            text-align: center;
            &:last-child{
                &:before{
                    background: none;
                }
            }
            &:before{
                content:"";
                position: absolute;
                top:56px;
                left:100px;
                width:4px;
                height:8px;
                background:url("../../assets/images/arrow_right.png") no-repeat center center;
            }
             &.cur .txt{
                background:#95BDFC;
                color:#fff;
            }
            .txt{
                width:91px;
                height:36px;
                line-height: 36px;
                border-radius: 36px;
                background: #EFEFEF;
                color:#979797;
                font-size:14px;

            }
            .date{
                margin-top:11px;
                line-height: 20px;
                font-size:14px;
                color:#535353;
            }
        }
    }
    .box_logistics{
        margin-bottom:21px;
        .title{
            padding:31px 0 11px 9px;
            border-bottom:1px solid #D3D3D3;
            line-height: 21px;
            font-size:16px;
            color:#535353;
            font-weight: bold;
        }
        .con{
            padding-top:11px;
            line-height: 19px;
            .name{
                float:left;
                width:264px;
                font-size:14px;
                color:#535353;
                text-align: right;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                span{
                    margin-left:20px;
                }
            }
            .more{
                position:relative;
                float:right;
                margin-right:140px;
                width:50px;
                &:hover{
                    .more_con{
                        display:block;
                    }
                }
                .more_title{
                    font-size:14px;
                    color:#535353;
                    cursor: pointer;
                    i{
                        display: inline-block;
                        position: relative;
                        top:-2px;
                        margin-left:8px;
                        width:8px;
                        height:4px;
                        background: url("../../assets/images/arrow_down.png") no-repeat center center;
                    }
                }
                .more_con{
                    display:none;
                    position:absolute;
                    z-index:10;
                    right:-140px;
                    top:27px;
                    width:930px;
                    line-height: 24px;
                    color:#535353;
                    font-size:14px;
                    .hover_tips:before{
                        margin-left:280px;
                    }
                    ul{
                        padding:0 12px;
                        li{
                            .date{
                                float:left;
                                width:135px;
                            }
                            .txt{
                                display:block;
                                margin-left:135px;
                            }
                        }
                    }
                    .tips{
                        margin-left:12px;
                    }
                }
            }
            .detail{
                margin:0 200px 0 294px;
                color:#5486D3;
                font-size:14px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    .box_info{
        padding-top:19px;
        padding-bottom:3px;
        .title{
            
            padding:0 0 11px 9px;
            border-bottom:1px solid #D3D3D3;
            line-height: 21px;
            font-size:16px;
            color:#535353;
            font-weight: bold;
        }
        .info_list{
            border-bottom:1px dashed #ebebeb;
            &:nth-child(2){
                padding:9px 0;
                li{
                    padding:6px 0;
                    line-height: 19px;
                }
            }
            &:last-child{
                border-bottom:0 none;
            }
            li{
                float:left;
                padding:9px 0;
                width:50%;
                line-height: 32px;
                font-size:14px;
                color:#535353;
                b{
                    float:left;
                    width:136px;
                    text-align: right;

                }
                span{
                    display: block;
                    margin-left:136px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
    .box_product{
        padding-top:43px;
        .title{
            margin:0 0 14px 9px;
            color:#535353;
            line-height: 19px;
            font-size:16px;
            font-weight: bold;
        }
        .product_list{
            width:1198px;
            border:1px solid #ebebeb;
            border-bottom:0 none;
            dt{
                height:50px;
                line-height: 50px;
                border-bottom:1px solid #ebebeb;
                font-size:14px;
                color:#979797;
                background: #f9f9f9;
                text-align: center;
                .name{
                    float:left;
                    width:301px;
                }
                .sku,.single_price,.price,.num,.unit{
                    float:left;
                    width:179px;
                }
            }
            dd{
                height:90px;
                border-bottom:1px solid #ebebeb;
                text-align: center;
                color:#535353;
                font-size:14px;
                text-align: center;
                .price{
                    font-size:16px;
                    font-weight: bold;
                }
                .sku,.single_price,.price,.num,.unit{
                    float:left;
                    width:179px;
                    line-height:90px;
                }
                .name{
                    float:left;
                    margin:20px 0 0 20px;
                    width:281px;
                    .img{
                        float:left;
                        width:50px;
                        height:50px;
                        img{
                            max-width:100%;
                            max-height:100%;
                        }
                    }
                    .txt{
                        float:left;
                        margin:5px 0 0 14px;
                        width:196px;
                        height:38px;
                        line-height: 19px;
                        font-size:14px;
                        color:#535353;
                        text-align: left;
                        overflow:hidden;
                    }
                }

            }
        }
        .sum{
            margin:12px 11px 0;
            line-height: 19px;
            .num{
                float:left;
                font-size:14px;
                color:#535353;
            }
            .price{
                float:right;
                font-size:14px;
                color:#535353;
                font-weight: bold;
                b{
                    color:#E31D19;
                    font-size:18px;
                }
            }
        }
    }
    .box_ticket{
        padding:50px 0 12px;
        .title{
            margin:0 0 12px 9px;
            color:#535353;
            line-height: 19px;
            font-size:16px;
            font-weight: bold;
        }
        table{
            width:100%;
            th{
                height:40px;
                line-height: 40px;
                text-align: center;
                background: #F9F9F9;
                font-size:14px;
                color:#979797;
            }
            td{
                padding:11px 0;
                border-top:1px solid #EBEBEB;
                line-height: 24px;
                text-align: center;
                font-size:14px;
                color:#535353;
                vertical-align: middle;
                .look{
                    color:#E31D19;
                    cursor: pointer;
                }
            }
        }

    }
    .box_comment{
        margin:46px 0 56px;
        .title{
            padding:0 0 11px 9px;
            border-bottom:1px solid #D3D3D3;
            line-height: 21px;
            font-size:16px;
            color:#535353;
            font-weight: bold;
        }
        .info{
            margin-top:10px;
            .comment{
                float:left;
                width:650px;
                label{
                    float:left;
                    margin-left:36px;
                    width:70px;
                    font-size:14px;
                    color:#535353;
                    line-height: 32px;
                    font-weight: bold;
                }
                .comment_con{
                    margin:7px 0 0 106px;
                    .txt{
                        font-size:14px;
                        line-height:19px;
                        color:#535353;
                    }
                    .img_list{
                        margin-top:20px;
                        .img{
                            float:left;
                            margin-right:10px;
                            width:50px;
                            height:50px;
                            img{
                                max-width:100%;
                                max-width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
