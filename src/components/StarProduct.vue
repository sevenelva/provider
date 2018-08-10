<template>
<div class="star_box fl">
	<div class="star_list fix">
		<span class="fl">{{star.name}}</span>
		<div class="star_icon star_big_icon fl">
			<div class="star_icon_one"></div>
			<div class="star_icon_two" :style="{width: star.width+'%'}">
			</div>
		</div>
		<span>{{star.pingfen}}分</span>
	</div>
</div>
</template>
<script>
	export default{
		name:"starproduct",
		props:{
			star:{
				type:Object
			}
		}

	}
</script>
<style lang="less" scoped>
.star_box{
	padding:7px 0 0 170px;
	.star_list{
		span{font-size:14px; color:#535353; line-height:40px;}
		.star_icon{
			margin:8px 20px 0 29px;
			position:relative;
			&.star_big_icon{
				width:146px;
				height:21px;
				overflow:hidden;
				.star_icon_one{
					width:146px;
					height:21px;
					background-image:url("../assets/images/star_icon.png");
					background-position:0 21px;
				}
				.star_icon_two{
					position:absolute;
					top:0px;
					left:0;
					height:21px;
					background-image:url("../assets/images/star_icon.png");
					background-position:0 0;
				}			
			}
			&.star_small_icon{
				width:102px;
				height:15px;
				overflow:hidden;
				.star_icon_one{
					width:1402x;
					height:15px;
					background-image:url("../assets/images/star_small_icon.png");
					background-position:0 15px;
				}
				.star_icon_two{
					position:absolute;
					top:0px;
					left:0;
					height:15px;
					background-image:url("../assets/images/star_small_icon.png");
					background-position:0 0;
				}			
			}		
		}
	}
}
</style>