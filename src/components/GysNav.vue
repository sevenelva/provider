<template>
	<div class="nav_bg">
		<div class="main_w1200 fix">
			<div class="nav">
				<p class="fl"><router-link :to="'home'"><img src="../assets/images/gys_logo.png"></router-link><span></span></p>
				<div class="nav_intro fl" v-if="flag">
					<dl class="nav_txt fl" >
						<dt>上海竞赢商贸有限公司</dt>
						<dd>KPI综合分：<b>4.98</b></dd>
					</dl>			
					<div  class="navR fl">
						<div class="navR_list fl">
							<h1 class="fl">联系方式：</h1>
							<ul class="fl">
								<li>陈某某 13789878909</li>
								<li>李某某 13909878909</li>
							</ul>
						</div>
						<div class="navR_list fl">
							<h1 class="fl">地址：</h1>
							<ul class="fl">
								<li>上海市青浦区XXXXX路1221号</li>
							</ul>
						</div>			
					</div>
				</div>
				<p class="nav_name fl" v-if='!flag'>{{$route.meta.title}}</p>
			</div>
		
		</div>
	</div>
</template>
<script>
	export default{
		name:'GysNav',
		data(){
			return{
				flag:false
			}
		},
		watch:{
			$route(to,from){
				if(to.name=='Home'){
					this.flag=true
				}else{
					this.flag=false

				}
			}
		}
		
	}
</script>
<style lang="less" scoped>
	.nav_bg{ 
		background:#E31D19; height:80px;
		min-width:1200px;
     }
	.nav{
		color:#fff;
		p{ 
			img{ margin:27px 33px 27px 27px;vertical-align:middle;}
			span{border-right:1px solid #fff;opacity:0.2495; height:27px; display:inline-block; vertical-align:middle;}
			&.nav_name{
				font-size:18px; 
				line-height:80px;
				color:#fff;
				padding-left:30px;
			}
		}
		dl{ padding:18px 117px 0 28px;
			text-align:left;
			dt{
		 	font-size:16px; 
		 	line-height:21px;
		 	font-weight:bold;
			}
			dd{
				font-size:12px;
				vertical-align:middle;
				line-height:26px;
				padding-top:4px;
				b{ 
					font-size:20px;
					color:#FFEC00;
					font-weight:bold;
					vertical-align:middle;
					display:inline-block;
					margin-top:-3px;
				}
			}
		}			

	}
	.navR{ 
		padding:15px 0px 0 0;
		vertical-align:middle;
		line-height:20px;
		padding-right:4px;
		.navR_list{
			font-size:12px;
			color:#fff;
			padding:0 72px;
			h1{
				font-weight:bold;
				padding-right:10px;
			}
		ul{
			li{
				line-height:20px;
			}
		  }
	    }
	  }
</style>