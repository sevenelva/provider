<!-- by your name -->
<template>
    <div class="hover_tips">
        <slot name="hover">
            <div class="express_title">中通快递：212189098767</div>
            <ul class="express_info">
                <li>
                    <div class="express_txt">[上海市]上海徐汇派件员：刘文隆 15900781624正在为您派件   </div>
                    <div class="time">2018-06-25 11:00:09</div>
                </li>
                <li>
                    <div class="express_txt">[上海市]快件已到达 上海徐汇</div>
                    <div class="time">2018-06-24 07:12:03</div>
                </li>
            </ul>
        </slot>

    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        name:"HoverTips",
        data () {
            return {
            };
        }
    }

</script>
<style lang='less' scoped>
.hover_tips{
    position:relative;
    padding:16px 14px 12px;
    background:#F9F9F9;
    box-shadow:0px 0px 4px 0px rgba(0,0,0,0.23);
    border-radius:5px;
    &:before{
        content:"";
        position:absolute;
        left:50%;
        top:-10px;
        margin-left:-10px;
        height:10px;
        width:20px;
        background:url("../assets/images/arrow-up.png") no-repeat center center;
    }
    .express_title{
        margin:0 6px;
        padding-bottom:12px;
        width:276px;
        border-bottom:1px solid #EBEBEB;
        height:16px;
        line-height: 16px;
        color:#535353;
        font-size:12px;
        text-align: left;
    }
    .express_info{
        padding:7px 6px 0 0;
        text-align:left;
        li{
            position:relative;
            margin-bottom:15px;
            padding-left:22px;
            line-height: 18px;
            color:#535353;
            font-size:12px;
            &:before{
                content:"";
                position:absolute;
                left:6px;
                top:6px;
                width:6px;
                height:6px;
                background: #E31D19;
                border-radius: 50%;
            }
            &:last-child{
                margin-bottom:0;
            }
        }
    }
}
</style>
