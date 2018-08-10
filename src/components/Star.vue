<template>


</template>
<script>
	export default{
		name:"Star",
		data(){
			return{
				stars:[
					{
						name:"产品质量",
						percent:"",
						score:"4分"
					},
					{
						name:"物流服务",
						percent:"",
						score:"5分"
					},
					{
						name:"服务态度",
						percent:"",
						score:"3分"
					}
				]
			}
		}

	}
</script>
<style lang="less" scoped>
	.star_box{
		padding:7px 0 0 182px;
		.star_list{
			font-size:14px;
			color:#535353;
			line-height:40px;
			padding-bottom:3px;
			span{ vertical-align:middle; display:inline-block}

		}
	}
</style>