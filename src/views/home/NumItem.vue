<!-- by your name -->
<template> 
    <div class="box_list clearfix" :class="isSum==true?'sum':'tips'">
        <div class="item" v-for="item of sumList" :key="item.id" @click="pageTo(item.name)">
            <p class="name">{{item.name}}</p>
            <p class="num">{{item.num}}</p>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
    export default {
        name:"NumItem",
        data () {
            return {
            };
        },
        props:{
            sumList:{
                type:Array
            },
            isSum:{
                type:Boolean
            }
        },
        methods:{
            pageTo(name){
                if(this.isSum==true){
                    if(name=="产品"){
                        this.$router.push({path: '/myProduct' });
                    }
                }else{
                    if(name=="待确认"){
                        this.$router.push({ path: '/OrderList', query: { statusIndex:1 } });
                    }
                    if(name=="待买家付款"){
                        this.$router.push({ path: '/OrderList', query: { statusIndex:2 }});
                    }
                    if(name=="待发货"){
                        this.$router.push({ path: '/OrderList', query: { statusIndex:3} })
                    }
                    if(name=="待买家收货"){
                        this.$router.push({ path: '/OrderList', query: { statusIndex:4 } })
                    }
                    if(name=="待开票"){
                        this.$router.push({ path: '/OrderList', query: { statusIndex:5 } })
                    }
                    if(name=="交易中的订单"){
                        this.$router.push({ path: '/OrderList', query: { statusIndex:0 } })
                    }
                    
                }
                
            }
        }
    }
</script>
<style scoped lang="less">
.box_list{
    margin-top:14px;
    background: #fff;
    &.sum{
        .item{
            width:50%;
        }  
    }
    &.tips{
        .item{
            width:193px;
            &:last-child{
                width:235px;
            }
        }
    }
    .item{
        position:relative;
        float:left;
        padding:34px 0 33px;
        text-align: center;
        cursor: pointer;
        &:hover{
            .num{
                opacity: 0.8;
            }
        }
        &::after{
            content:"";
            position: absolute;
            top:39px;
            right:-1px;
            height:53px;
            width:0px;
            border-right:1px solid #EBEBEB;
        }
        &:last-child::after{
            border-right:0 none;
        }
        .name{
            line-height: 19px;
            font-size:14px;
            color:#535353;
        }
        .num{
            margin-top:9px;
            font-size:30px;
            line-height: 35px;
            color:#E31D19;
        }
    }
}
</style>