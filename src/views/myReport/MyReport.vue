<!-- by your name -->
<template>
    <div class="main_report main_w1200">
        <div class="add_report">新增质检报告</div>
        <div class="report_list clearfix">
            <div class="item" v-for="(item,index) of reportList" :key="item.id">
                <div class="btn btn_del" @click="setDel(index)">删除</div>
                <div class="btn btn_look">查看</div>
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
    export default {
        name:"MyReport",
        data () {
            return {
                reportList:[
                    {id:'1',name:"质检报告1.pdf"},
                    {id:'2',name:"质检报告2.pdf"},
                    {id:'3',name:"质检报告3.pdf"},
                    {id:'4',name:"质检报告4.pdf"},
                    {id:'5',name:"质检报告5.pdf"},
                    {id:'6',name:"质检报告6.pdf"}
                    ]
            };
        },
        methods:{
            // 删除
            setDel(index){
                this.reportList.splice(index,1);
            }
        }
    }
</script>
<style lang='less'  scoped>
.main_report{
    margin:30px auto;
    .add_report{
        width:138px;
        height:32px;
        border:1px solid #E31D19;
        background: #FFF2F1;
        text-align: center;
        font-size:14px;
        font-weight: bold;
        color:#E31D19;
        line-height: 34px;
        cursor: pointer;
        &:hover{
            background: #FFEAEA;
        }
    }
    .report_list{
        .item{
            &:nth-child(2n){
                margin-right:0;
            }
            float:left;
            margin:20px 20px 0 0;
            padding:0 24px 0 25px;
            width:539px;
            height:58px;
            border:1px solid #EBEBEB;
            line-height: 58px;
            .btn{
                float:right;
                margin-left:40px;
                font-size:14px;
                color:#66A1FD;
                cursor: pointer;
                &:hover{
                    color:#2D7AF2;
                }
            }
            .name{
                margin-right:120px;
                color:#535353;
                font-size:16px;
                font-weight: bold;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
