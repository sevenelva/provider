<!-- by your name -->
<template>
    <div class="main_order_list">
        <div class="box_condition_filter">
            <div class="main_w1200">
                <div class="ipt_wrapper clearfix">
                    <div class="box_keywords">
                        <keywords-searach default-placeholder="输入订单号/买家关键字/送货地址关键字" @keywords-search="keywordsSearch"></keywords-searach>
                    </div>
                    <div class="box_date">
                        <label>订单日期</label>
                        <div class="date">
                            <!-- <div class="date_ipt start_date">时间范围起始</div>
                            <span>~</span>
                            <div class="date_ipt end_date">时间范围结束</div>
                             -->
                            <el-date-picker v-model="dateValue" type="daterange"
                            range-separator="~"
                            start-placeholder="时间范围起始"
                            end-placeholder="时间范围结束"
                            :picker-options="pickerOptions0">
                            </el-date-picker>
                            <div class="btn" @click="dateSearch">搜索</div>
                        </div>
                    </div>
                </div>
                <div class="tab_wrapper">
                    <div class="tab_kind clearfix">
                        <label>酒店类型：</label>
                        <div class="tab_choose clearfix">
                            <div class="tab"
                                :class="kindIndex==0?'cur':''"
                                @click="kindIndexChange(0)">全部</div>
                            <div class="tab"
                                :class="kindIndex==1?'cur':''"
                                @click="kindIndexChange(1)">直营店</div>
                            <div class="tab"
                                :class="kindIndex==2?'cur':''"
                                @click="kindIndexChange(2)">特许店</div>
                        </div>
                    </div>
                    <div class="tab_kind clearfix">
                        <label>订单状态：</label>
                        <div class="tab_choose clearfix">
                            <div class="tab" v-for="(item,index) of orderStatusList" :key="item.id" @click="statusIndexChange(index)" :class="index==statusIndex?'cur':''"
                            v-show="statusShow(index)">
                                {{item.text}}<span v-if="item.num!=undefined">({{item.num}})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_w1200">
            <div class="table_header clearfix">
                <div class="item item1">酒店类型</div>
                <div class="item item2">买家信息</div>
                <div class="item item3">产品种类数量</div>
                <div class="item item4">订单总额</div>
                <div class="item item5">订单状态</div>
                <div class="item item6">操作</div>
            </div>
            <div class="table_body">
                <div class="item" v-for="(item,index) of dataList" :key="item.OrderNo">
                    <div class="title clearfix">
                        <div class="fl">
                            <label v-show="statusIndex==3||statusIndex==5">
                                <input v-model="checkedNames" type="checkbox" :value="item.OrderNo">
                                <i class="choose_icon"></i>
                                订单编号：{{item.OrderNo}}
                            </label>
                            <label v-show="statusIndex!=3&&statusIndex!=5">
                                订单编号：{{item.OrderNo}}
                            </label>
                        </div>
                        <span class="fr">订单时间：{{item.CreateTime}}</span>
                    </div>
                    <div class="table_tr">
                        <div class="kind">
                            {{item.OrgType=="0"?"直营店":"特许店"}}
                        </div>
                        <div class="info">
                            <h3>{{item.OrgName}}</h3>
                            <p>{{item.ReceiverAddress}}</p>
                        </div>
                        <div class="num">{{item.ProductCount}}</div>
                        <div class="price">￥{{item.OrderAmount}}</div>
                        <div class="status">
                            <div class="txt">{{statusName(item.SubOrderStatus)}}</div>
                            <router-link :to="{path:'/orderDetail',query:{id:item.OrderNo}}" class="btn">订单详情</router-link>
                        </div>
                        <div class="act">
                            <div class="btn" v-if="item.SubOrderStatus==16" @click="ensureOrder(item.OrderSubNo)">确认订单</div>
                            <div class="wait_delivery"  v-if="item.SubOrderStatus==20">
                                <div class="import_send">
                                    <div class="import_title">已导入<span>物流信息</span></div>
                                    <div class="import_con">
                                        <hover-tips>
                                            <ul slot="hover">
                                                <li>
                                                    <span>物流公司：</span>
                                                    <b>{{item.LogisticsName}}</b>
                                                </li>
                                                <li>
                                                    <span>运单号：</span>
                                                    <b>{{item.LogisticsNum}}</b>
                                                </li>
                                                <li>
                                                    <span>发货时间：</span>
                                                    <b>{{item.SendTime}}</b>
                                                </li>
                                            </ul>
                                        </hover-tips>
                                    </div>
                                </div>
                                
                                <div class="btn" @click="sendDialog">确认发货</div>
                            </div>
                            <div class="look_logistics" v-if="item.SubOrderStatus==24">
                                <div class="title">查看物流</div>
                                <div class="logistics_con">
                                    <hover-tips></hover-tips>
                                </div>
                            </div>
                            <router-link class="btn btn_ticket"  v-if="item.SubOrderStatus==32"
                            :to="{path:'/invoice'}">立即开票</router-link>
                            <router-link class="look_comment" v-if="item.SubOrderStatus==32"
                            :to="{path:'/orderDetail',query:{id:item.OrderNo}}">查看评价和投诉</router-link>
                            <router-link class="btn btn_ticket"  v-if="item.SubOrderStatus==36"
                            :to="{path:'/invoice'}">修改开票</router-link>
                            <router-link class="btn" v-if="item.SubOrderStatus==100"
                            :to="{path:'/invoice'}">修改开票</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <pages @pageChange="pageChange"></pages>
            <div class="insert">
                <insert :insertInfo="insertInfo" v-show="statusIndex==3||statusIndex==5" @checkedAll="checkedAll"></insert>
            </div>
            
        </div>
        <send-dialog :isHide="isHide" @close="close"></send-dialog>
    </div>
</template>

<script type='text/ecmascript-6'>
    import KeywordsSearach from "@/components/KeywordsSearch.vue";
    import HoverTips from "@/components/HoverTips.vue";
    import Pages from "@/components/Pages.vue";
    import Insert from "@/components/Insert.vue";
    import SendDialog from "@/components/SendDialog.vue";
    export default {
        name:"OrderList",
        components:{
            KeywordsSearach,
            HoverTips,
            Pages,
            Insert,
            SendDialog
        },
        data () {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() > Date.now() - 8.64e6
                    }
                },  
                insertInfo:{
                    import:'批量导出选中的订单',
                    export:'批量导入物流信息',
                    isBtn:true
                },
                isHide:false,
                checkedNames: [],
                dateValue: '',
                kindIndex:0,
                statusIndex:this.$route.query.statusIndex,
                orderStatusList:[
                    {
                        id:1,
                        text:"全部",
                    },
                    {
                        id:2,
                        text:"待确认",
                        num:0
                    },
                    {
                        id:3,
                        text:"待买家付款",
                        num:0
                    },
                    {
                        id:4,
                        text:"待发货",
                        num:0
                    },
                    {
                        id:5,
                        text:"待买家收货",
                        num:0
                    },
                    {
                        id:6,
                        text:"待开票",
                        num:0
                    },
                    {
                        id:7,
                        text:"待审发票",
                        num:0
                    },
                    {
                        id:8,
                        text:"待收款",
                        num:0
                    },
                    {
                        id:9,
                        text:"已完成",
                        num:0
                    },
                    {
                        id:10,
                        text:"已取消",
                        num:0
                    }
                ],
                dataList:[],  
                iptValue:"",
                startDate:"",
                endDate:"",
                pageIndex:1
            };
        },      
        mounted(){
            this.tableData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKind(this.kindIndex),this.startDate,this.endDate,this.pageIndex,10);
            this.numData(this.iptValue,this.indexToStatus(this.statusIndex),"",this.startDate,this.endDate);
        },
        methods:{
            //获取数据
            tableData:async function(keyword,orderStatus,hotelType,beginDate,endDate,pageIndex,pageSize) {
                let params = {
                    Keyword:keyword,
                    OrderStatus:orderStatus,
                    HotelType:hotelType,
                    BeginDate:beginDate,
                    endDate:endDate,
                    pageIndex:pageIndex,
                    PageSize:pageSize
                }
                let obj = {
                    isLoading:true
                }
                const res = await this.$root.http.get('Order//GetOrderList', params, this,obj);
                if(res.data.Code==0){
                    this.dataList=res.data.Data.DataList;
                    console.log(this.dataList);
                } 
            },
            //获取订单状态数字
            numData:async function(keyword,orderStatus,hotelType,beginDate,endDate){
                let params={
                    Keyword:keyword,
                    orderStatus:orderStatus,
                    hotelType:hotelType,
                    BeginDate:beginDate,
                    EndDate:endDate
                };
                let obj={
                    isLoading:false
                };
                const res=await this.$root.http.get("/Order/OrderTypeNum",params,this,obj);
            },
            //搜索
            keywordsSearch(iptValue){
                this.iptValue=iptValue;
                this.tableData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKind(this.kindIndex),this.startDate,this.endDate,this.pageIndex,10);
                this.numData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKindName(this.kindIndex),this.startDate,this.endDate);
            },
            //酒店类型切换
            kindIndexChange(index){
                this.kindIndex=index;
                this.tableData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKind(this.kindIndex),this.startDate,this.endDate,this.pageIndex,10);
                this.numData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKindName(this.kindIndex),this.startDate,this.endDate);
            },
            //订单状态切换
            statusIndexChange(index){
                this.statusIndex=index;
                this.tableData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKind(this.kindIndex),this.startDate,this.endDate,this.pageIndex,10);
                if(index==3){
                    this.insertInfo.import="批量导出选中的订单";
                    this.insertInfo.export="批量导入物流信息";
                    this.insertInfo.isBtn=true;

                }
                if(index==5){
                    this.insertInfo.import="批量导出选中的订单";
                    this.insertInfo.export="批量导入发票信息";
                    this.insertInfo.isBtn=false;
                }
            },
            //日期搜索
            dateSearch(){
                if(this.dateValue!=""){
                    this.startDate=this.dateToDate(this.dateValue[0]);
                    this.endDate=this.dateToDate(this.dateValue[1]);
                }else{
                    this.startDate=""
                    this.endDate="";
                }
                this.tableData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKind(this.kindIndex),this.startDate,this.endDate,this.pageIndex,10);
                this.numData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKindName(this.kindIndex),this.startDate,this.endDate);
            },
            //页面切换
            pageChange(val){
                this.pageIndex=val;
                this.tableData(this.iptValue,this.indexToStatus(this.statusIndex),this.indexToKind(this.kindIndex),this.startDate,this.endDate,this.pageIndex,10);
            },
            //酒店类型：索引--酒店类型代码
            indexToKind(index){
                if(index==0)
                {
                    return "";
                }else if(index==1){
                    return "0";
                }else{
                    return "1";
                }
            },
            //酒店类型：索引--酒店类型汉字
            indexToKindName(index){
               if(index==1){
                    return "特许";
                }else{
                    return "";
                }
            },
            //订单状态：索引--订单状态
            indexToStatus(index){
                switch (index){
                    case 0:
                        return -1;
                        break;
                    case 1:
                        return 16;
                        break;
                    case 2:
                        return 12;
                        break;
                    case 3:
                        return 20;
                        break;
                    case 4:
                        return 24;
                        break;
                    case 5:
                        return 32;
                        break;
                    case 6:
                        return 36;
                        break;
                    case 7:
                        return 40;
                        break;
                    case 8:
                        return 100;
                        break;
                    case 9:
                        return 0;
                        break;
                }
            },
            //日期转换
            dateToDate(value){
                if(value==""){
                    return "";
                }
                let curDate=new Date(value),
                    year=curDate.getFullYear(),
                    month=curDate.getMonth()+1,
                    date=curDate.getDate();
                return year+"-"+(month>=10?month:"0"+month)+"-"+(date>=10?date:"0"+date);
            },
            //是否显示全选栏
            statusShow(index){
                if(this.kindIndex==2&&index==6){
                    return false;
                }
                if(this.kindIndex==1&&index==2){
                    return false;
                }
                return true;
            },
            //确认发货出现
            sendDialog(){
                this.isHide=true;
            },
            //确认发货消失
            close(){
                this.isHide=false;
            },
            //全选、全不选
            checkedAll(isCheckedAll){
                if(isCheckedAll==true){
                    this.checkedNames = [];
                    for(var i=0;i<this.dataList.length;i++){
                        this.checkedNames.push(this.dataList[i].OrderNo);
                    }
                }
                else{
                    this.checkedNames=[];
                }
            },
            //订单状态判断
            statusName(status){
                switch (status){
                    case 0:
                        return "已取消";
                        break;
                    case 16:
                        return "待确认";
                        break;
                    case 20:
                        return "待发货";
                        break;
                    case 24:
                        return "待买家收货";
                        break;
                    case 32:
                        return "待开票";
                        break;
                    case 36:
                        return "待买家审发票";
                        break;
                    case 40:
                        return "待收款";
                        break;
                    case 100:
                        return "已完成";
                        break;
                }
            },
            //确认订单
            ensureOrder:async function(orderNo){
                let params = {
                    OrderSubNo:orderNo
                }
                let obj = {
                    isLoading:false
                }
                const res =await this.$root.http.post('Order/SupplierSubOrderConfirm', params,obj);
            },
        }
    }
</script>
<style lang='less'>
.el-date-table td.end-date span, .el-date-table td.start-date span{
    background:#E31D19;
}
.el-date-table td.end-date.disabled span, .el-date-table td.start-date.disabled span{
   background:#fff;
}
.el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div{
    background: #FEF3F3;
}
.el-date-table.is-week-mode .el-date-table__row:hover .disabled div,.el-date-table td.in-range.disabled div:hover {
    background: #fff;
}
.el-date-table td.today span,.el-date-table td.available:hover{
    color:#E31D19;
}
.el-date-table td.disabled div{
    background: #fff;
}
.main_order_list{
    min-width: 1200px;
    padding-bottom:50px;
    .box_condition_filter{
        background: #f9f9f9;
        .ipt_wrapper{
            padding:17px 0;
            border-bottom:1px dashed #DEDEDE;
            .box_keywords{
                float:left;
            }
            .box_date{
                float:left;
                margin-left:266px;
                label{
                    float:left;
                    font-size:14px;
                    line-height: 36px;
                    color:#535353;
                }
                .date{
                    margin-left:66px;
                    padding-left:6px;
                    width:352px;
                    height:34px;
                    border:1px solid #D3D3D3;
                    background: #fff;
                    border-radius:34px;
                    overflow: hidden;
                    .el-date-editor--daterange.el-input__inner{
                        float:left;
                        width:290px;
                        padding:0;
                        border:0 none;
                        height:34px;
                        line-height: 34px;
                        color:#535353;
                        font-size:14px;
                        .el-range-input{
                            float:left;
                            padding-left:6px;
                            width:102px;
                            text-align:left;
                            font-size:14px;
                            line-height: 34px;
                        }
                        .el-range__icon {
                            float:left;
                            margin-left:10px;
                            width:17px;
                            height:16px;
                            font-size:0;
                            text-align: left;
                            background: url("../../assets/images/data.png") no-repeat center center;
                        }
                    }
                    .date_ipt{
                        position: relative;
                        float:left;
                        padding-left:33px;
                        width:102px;
                        font-size:14px;
                        line-height: 34px;
                        color:#D3D3D3;
                        &::before{
                            content:"";
                            position: absolute;
                            top:50%;
                            left:11px;
                            margin-top:-8px;
                            width:16px;
                            height:16px;
                            background: url("../../assets/images/tip_icon.png") no-repeat center center;
                        }
                    }
                    span{
                        float:left;
                        color:#535353;
                        line-height: 34px;
                        font-size:14px;
                    }
                    .btn{
                        margin-left:290px;
                        height:34px;
                        border-left:1px solid #d3d3d3;
                        line-height: 34px;
                        background: #F5F5F5;
                        font-size:14px;
                        color:#535353;
                        text-align: center;
                        cursor: pointer;
                    }
                }
            }
        }
        .tab_wrapper{
            padding:5px 0 24px;
            .tab_kind{
                margin-top:7px;
                label{
                    float:left;
                    margin-top:10px;
                    width:80px;
                    line-height: 26px;
                    font-size:14px;
                    color:#979797;
                }
                .tab_choose{
                    margin-left:80px;
                    .tab{
                        float:left;
                        margin:10px 28px 0 0;
                        padding:0 14px;
                        height:26px;
                        line-height: 26px;
                        font-size:14px;
                        color:#535353;
                        border-radius: 26px; 
                        cursor: pointer;                   
                        &.cur,&:hover{
                            background: #E31D19;
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
    .table_header{
        padding:26px 0 11px 0;
        height:19px;
        line-height: 19px;
        border-bottom:1px solid #EBEBEB;
        .item{
            float:left;
            font-size:14px;
            color:#979797;
            &.item1{
                padding-left:42px;
            }
            &.item2{
                padding-left:238px;
            }
            &.item3{
                padding-left:198px;
            }
            &.item4{
                padding-left:93px;
            }
            &.item5{
                padding-left:107px;
            }
            &.item6{
                padding-left:120px;
            }
        }
    }
    .table_body{
        margin-bottom:30px;
        .item{
            .title{
                padding:21px 0 10px;
                line-height: 19px;
                font-size:14px;
                color:#535353;
                input{
                    display: none;
                    &+.choose_icon{
                        position:relative;
                        top:2px;
                        display: inline-block;
                        margin-right:11px;
                        width:13px;
                        height:13px;
                        background: url("../../assets/images/bill_choose_icon.png") no-repeat center center;
                    }
                    &:checked+.choose_icon{
                        background: url("../../assets/images/bill_chooseon_icon.png") no-repeat center center;
                    }
                }
                
                
            }
            .table_tr{
                height:100px;
                border:1px solid #EBEBEB;
                .kind{
                    float:left;
                    width:136px;
                    border-right:1px solid #ebebeb;
                    color:#535353;
                    font-weight: bold;
                    font-size:14px;   
                    line-height: 100px;
                    text-align: center;
                }
                .info{
                    float:left;
                    padding:27px 20px 26px 35px;
                    width:356px;
                    border-right:1px solid #ebebeb;
                    color:#535353;
                    font-size:14px;   
                    line-height: 19px;
                    h3,p{
                        height:19px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    h3{
                        margin-bottom:9px;
                        font-weight: bold;
                    }
                }
                .num,.price{
                    float:left;
                    width:161px;
                    border-right:1px solid #ebebeb;
                    color:#535353;
                    font-weight: bold;
                    font-size:14px;   
                    line-height: 100px;
                    text-align: center;
                }
                .status{
                    float:left;
                    width:162px;
                    height:100px;
                    border-right:1px solid #ebebeb;
                    text-align: center;
                    .txt{
                        padding-top:21px;
                        line-height: 19px;
                        font-size:14px;
                        color:#535353;
                    }
                    .btn{
                        display:inline-block;
                        margin-top:10px;
                        width:90px;
                        height:30px;
                        line-height: 30px;
                        border-radius: 30px;
                        font-size:14px;
                        color:#E31D19;
                        background:#FEF3F3;
                        cursor: pointer;
                        &:hover{
                            background: #FFEAEA;
                        }
                    }
                }
                .act{
                    position:relative;
                    float:left;
                    width:162px;
                    height:100px;
                    text-align: center;
                    .btn{
                        display:inline-block;
                        margin-top:35px;
                        width:90px;
                        height:30px;
                        line-height: 30px;
                        border-radius: 30px;
                        font-size:14px;
                        color:#fff;
                        background:#E31D19;
                        cursor: pointer;
                        &:hover{
                            background: rgba(227,29,25,0.8);
                        }
                    }
                    .look_logistics{
                        position:relative;
                        margin-top:40px;
                        &:hover{
                            .logistics_con{
                                display:block;
                            }
                        }
                        .title{
                            padding:0;
                            line-height:20px;
                            color:#E31D19;
                            font-size:14px;
                            text-align: center;
                            cursor: pointer;
                        }
                        .logistics_con{
                           display: none;
                            position:absolute;
                            z-index:10;
                            top:27px;
                            right:0;
                            .hover_tips:before{
                                margin-left:67px;
                            }
                        }
                    }
                    .btn_ticket{
                        margin-top:21px;
                        cursor: pointer;
                    }
                    .look_comment{
                        margin-top:8px;
                        font-size:14px;
                        color:#535353;
                        line-height: 19px;
                        cursor: pointer;
                    }
                    .wait_delivery{
                        .import_send{
                            position:absolute;
                            top:13px;
                            left:50%;
                            width:162px;
                            margin-left:-81px;
                            &:hover{
                                .import_con{
                                    display: block;
                                }
                            }
                            .import_title{
                                height:16px;
                                line-height: 16px;
                                color:#979797;
                                font-size:12px;
                                span{
                                    color:#E31D19;
                                }
                            }
                            .import_con{
                                display:none;
                                position:absolute;
                                z-index:10;
                                top:23px;
                                left:50%;
                                transform:translate(-50%,0);
                                width:178px;
                                li{
                                    height:18px;
                                    line-height: 18px;
                                    font-size:0;
                                    color:#979797;
                                    text-align: left;
                                    span{
                                        display: inline-block;
                                        width:65px;
                                        font-size:12px;
                                    }
                                    b{
                                        display: inline-block;
                                        color:#535353;
                                        font-weight: normal;
                                        font-size:12px;
                                    }
                                }
                            }
                        }
                    }
                   
                }
            
            }
        }
    }
    .insert{
        margin:30px auto 0;
    }
}
</style>
