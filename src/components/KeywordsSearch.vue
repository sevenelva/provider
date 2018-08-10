<!-- by your name -->
<template>
    <div class="keywords_search">
        <input type="text" :placeholder="defaultPlaceholder" v-model.trim="iptValue"><div class="btn" @click="keywordsSearch">搜索</div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        name:"KeywordsSearch",
        data () {
            return {
                iptValue:""
            };
        },
        props:{
            defaultPlaceholder:{
                type:String
            }
        },
        methods:{
            keywordsSearch(){
                this.$emit("keywords-search",this.iptValue);
            }
        }
    }

</script>
<style lang='less' scoped>
.keywords_search{
    width:360px;
    height:34px;
    border:1px solid #D3D3D3;
    background: #fff;
    border-radius:34px;
    overflow: hidden;
    input{
        float:left;
        padding:0 16px;
        width:261px;
        height:34px;
        border:0 none;
        line-height:34px;
        color:#535353;
        font-size:14px;
        outline: none;
        &::-webkit-input-placeholder{
            color:#D3D3D3;
        }
    }
    .btn{
        margin-left:293px;
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
</style>