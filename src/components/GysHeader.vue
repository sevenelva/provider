<template>
	<div class="headbox main_1200">
		<el-row :gutter="20" style="margin-right:-12px;">
			<el-col :span="7"><div class="grid-content bg-purple head_company"><span>上海竞赢商贸有限公司</span>,<b>您好</b> <code>退出</code></div></el-col>
			<el-col :span="17" style="padding-right:0;">
				<div class="grid-content bg-purple head_nav">
					<router-link :to="'myReport'"><span class="report_icon">我的质检报告<em></em></span></router-link>
					<span class="logist_icon">我的物流<em></em></span>
					<span class="search_icon">
					查询<b></b><em></em>
						<ul class="search_hover">
							<li>发票查询</li>
							<li>收款查询</li>
						</ul>					
					</span>
					<router-link :to="'honor'"><span class="credit_icon">我的信誉
					<em></em></span></router-link>
					<router-link :to="'myproduct'"><span class="product_icon">
					我的产品</span></router-link>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
  name: 'GysHeader',
  data(){
  	return{
  		company:{}
  	}
  },
  mounted(){
  	this.aaa();
  },
  methods:{
	aaa:async function () {
	    let params = {

	    }
        let obj={
        	isLoading:false
        }	    
	    const res = await this.$root.http.get('login/GetUserInfo', params, this,obj)
	        if(res.data.Code == 0){
	        	this.company=res.data.Data
	        }
	    console.log(res)
	}
  }

}
</script>
<style lang="less">
	@main_1200:{width:1200px; margin:0 auto; min-width:1200px;}
	@color1: #535353;
	@color2: #979797;
	@fonts:14px;
	@textc:left;
	@images:"../assets/images";
	@back:no-repeat;
	@position:left center;
	@vm:midddle;	
	.headbox{ height:40px; background:#fff; line-height:40px;}
	.main_1200{@main_1200();}
	.head_company{ 
		font-size:@fonts;
		text-align:@textc;
		span{color:@color1;}
		b{color:@color2;font-weight:normal;}
		code{color:@color2;padding-left:29px;}
	}

	.head_nav{
		padding-left:18px; text-align:right;
		span{
			color:@color2;
			font-size:@fonts; 
			padding-right:13px;
			cursor:pointer;
			&.report_icon{ 
				background:url("@{images}/report_icon.png");
				background-repeat:@back;
				background-position:@position;
				width:15px; 
				height:14px; 
				padding-left:20px;
			}	
			&.logist_icon{
				background:url("@{images}/logist_icon.png");
				background-repeat:@back;
				width:15px; 
				height:14px;
				padding-left:20px; 
			}
	        &.search_icon{
	        	background:url("@{images}/search_icon.png");
	            background-repeat:@back; 
	            width:15px; 
	            height:14px;
	            padding-left:20px; 
	            padding-bottom:8px;
	            position:relative;
	            b{
	            	background:url("@{images}/nav_down.png");
	            	background-repeat:@back;
	            	width:9px;
	            	height:7px;
	            	display:inline-block;
	            	margin:0px 4px 0 7px;
	            	&.is-active{
	            		transform: rotate(-180deg);
	            	}
	            }
	            &:hover{
	            	.search_hover{
	            		display:block;
	            		li:hover{
	            			background:#fff;
	            			display:inline-block;
	            		}
	            	}
	            }
	        }
	        &.credit_icon{
	        	background:url("@{images}/credit_icon.png");
	        	background-repeat:@back;
	        	width:14px; 
	        	height:15px;
	        	padding-left:19px; 
	        }
			&.product_icon{
				background:url("@{images}/product_icon.png");
	            background-repeat:@back;
	            width:15px; 
	            height:14px;
	            padding-left:20px;
	        } 
	        em{
	        	border-right:1px solid #EBEBEB;
	        	width:1px;
	        	height:14px;
	        	margin-left:17px;
	        }      
		}
		ul{ 
			&.search_hover{
				display:none;
				position:absolute;
				left:-14px;
				top:50%;
				z-index:99;
				padding:3px 0;
				margin-top:13px;
				font-size:12px;
				color:#535353;
				line-height:30px;
				box-shadow:0px 0px 4px 0px rgba(0,0,0,0.23);
    			border-radius:5px; 
    			background:#F9F9F9;
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
    			li{
    				padding:0 24px 0 25px;
    			}
			}
		}		
	}

</style>