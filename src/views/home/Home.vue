<!-- by your name -->
<template>
    <div class="main_home">
        <div class="main_w1200">
            <div class="sum_notice_wrapper clearfix">
                <div class="box_sum">
                    <div class="box_title clearfix">
                        <h3><i class="count"></i>产品及供货酒店统计</h3>
                        <div class="right">出售中的商品：<span class="num">234</span></div>
                    </div>
                    <num-item :sum-list="list" :is-sum="isSum"></num-item>
                </div>
                <div class="box_notice">
                    <div class="box_title clearfix">
                        <h3><i class="news"></i>系统公告</h3>
                        <router-link :to="{path:'/SystemNotice',query:{id:-1}}" class="right">全部<i class="more"></i></router-link>
                        <router-view></router-view>
                    </div>
                    <div class="notice_list">
                        <router-link :to="{path:'/SystemNotice',query:{id:item.id}}" class="item" v-for="item of noticeList" :key="item.id">
                            <div class="date">{{item.date}}</div>
                            <div class="name">{{item.name}}</div>
                        </router-link>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <div class="box_tips">
                <div class="box_title clearfix">
                    <h3><i class="tip"></i>交易提示</h3>
                    <router-link :to="{path:'/orderList',query:{statusIndex:0}}" class="right">订单列表<i class="more"></i></router-link>
                    <router-view></router-view>
                </div>
                <div class="tips_list">
                    <num-item :sum-list="businessList" :is-sum="!isSum"></num-item>
                </div>
            </div>
        </div>
    </div>

</template>

<script type='text/ecmascript-6'>
    import NumItem from "./NumItem.vue"
    export default {
        name:"Home",
        data () {
            return {
                isSum:true,
                list:[
                    {
                        id:"001",
                        name:"产品",
                        num:345
                    },
                    {
                        id:"002",
                        name:"供货酒店",
                        num:34
                    }
                ],
                noticeList:[
                    {id:"001",date:"2018-07-06",name:"首旅如家供应商系统新版上线！"},
                    {id:"002",date:"2018-07-06",name:"首旅如家供应商系统新版上线！"},
                    {id:"003",date:"2018-07-06",name:"首旅如家供应商系统新版上线！"},
                ],
                businessList:[
                    {
                        id:"001",
                        name:"待确认",
                        num:0
                    },
                    {
                        id:"002",
                        name:"待买家付款",
                        num:0
                    },
                    {
                        id:"003",
                        name:"待发货",
                        num:0
                    },
                    {
                        id:"004",
                        name:"待买家收货",
                        num:0
                    },
                    {
                        id:"005",
                        name:"待开票",
                        num:0
                    },
                    {
                        id:"006",
                        name:"交易中的订单",
                        num:0
                    }
                ]
            };
        },
        components:{
            NumItem
        },
        mounted() {
        
        },
        methods:{
           
        }
    }
</script>
<style lang="less" scoped>
.main_home{
    min-width: 1200px;
    background: #f9f9f9;
}
.box_title{
    height:21px;
    line-height: 21px;
    h3{
        float:left;
        font-size:16px;
        color:#535353;
        font-weight: bold;
        .count{
            display: inline-block;
            margin-right:10px;
            width:16px;
            height:17px;
            background: url("../../assets/images/count_icon.png") no-repeat center center;
            vertical-align:text-top;
        }
        .news{
            display: inline-block;
            margin-right:12px;
            width:17px;
            height:17px;
            background: url("../../assets/images/news_icon.png") no-repeat center center;
            vertical-align:text-top;
        }
        .tip{
            display: inline-block;
            margin-right:10px;
            width:18px;
            height:17px;
            background: url("../../assets/images/tip_icon.png") no-repeat center center;
            vertical-align:text-top;
        }
    }
    .right{
        float:right;
        color:#979797;
        font-size:14px;
        cursor: pointer;
        span.num{
            font-weight: bold;
            color:#E31D19;
        }
        i.more{
            display: inline-block;
            margin:4px 0 0 10px;
            width:5px;
            height:9px;
            background: url("../../assets/images/jt_right.png") no-repeat center center;
            vertical-align:text-top;
        }
    }
}
.sum_notice_wrapper{
    padding-top:30px;
    .box_notice{
        margin-left:481px;
        .notice_list{
            margin-top:15px;
            padding:10px 25px 17px;
            height:103px;
            background: #fff;
            .item{
                line-height: 34px;
                font-size:14px;
                cursor: pointer;
                &:hover{
                    .name{
                        color:#2f2e2e;
                    }
                }
                .date{
                    float:right;
                    width:217px;
                    text-align: right;
                    color:#d3d3d3;
                }
                .name{
                    margin-right:217px;
                    color:#535353;
                }
            }
        }
    }
    .box_sum{
        float:left;
        width:451px;
        padding-right:40px;

    }
}
.box_tips{
    margin-top:42px;
    padding-bottom:47px;
    width:1200px;
    overflow: hidden;
    .tips_list{
        width:1300px;
    }
}
</style>
