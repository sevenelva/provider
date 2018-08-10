<template>
    <div class="loading" v-show="$root.isLoading==true">
        <div class="mask"></div>
        <div class="loading_con">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        name:"Loading",
        data () {
            return {
            };
        }
    }

</script>
<style lang='less' scoped>
.loading{
    @-webkit-keyframes loading{
        0%{
            transform:scaleY(1);
            -moz-transform:scaleY(1);
            -webkit-transform:scaleY(1);
        }
        50%{
            transform:scaleY(.4);
            -moz-transform:scaleY(.4);
            -webkit-transform:scaleY(.4);
        }
        100%{
            transform:scaleY(1);
            -moz-transform:scaleY(1);
            -webkit-transform:scaleY(1);
        }
    }
    .loading_con{
        display:none;
        position: fixed;
        z-index:501;
        top:50%;
        left:50%;
        margin:-45px 0 0 -61px;
        padding-top:27px;
        width:121px;
        height:63px;
        background: #f6f6f6;
        text-align: center;
        border-radius: 8px;
        i{
            display:inline-block;
            width:4px;
            height:35px;
            border-radius:2px; 
            background:#333;
            margin:0 2px;
            &:nth-child(1){
                animation:loading 1s ease-in .1s infinite;
            }
            &:nth-child(2){
                animation:loading 1s ease-in .2s infinite;
            }
            &:nth-child(3){
                animation:loading 1s ease-in .3s infinite;
            }
            &:nth-child(4){
                animation:loading 1s ease-in .4s infinite;
            }
            &:nth-child(5){
                animation:loading 1s ease-in .5s infinite;
            }
        }
        
    }
}
</style>