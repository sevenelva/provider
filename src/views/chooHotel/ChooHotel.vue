<template>
	<div class="ch_box">
		<div class="main_w1200">
			<h1>选择酒店</h1>
			<div class="choo_search">
				<keywords-search default-placeholder="输入酒店编号/酒店名称"
				>
				</keywords-search>
			</div>
			<div class="choo_table">
				<table cellpadding="0" cellspacing="0">
					<tr>
						<th class="choose">选择</th>
						<th class="number">酒店编号</th>
						<th class="name">酒店名称</th>
						<th class="brand">品牌</th>
						<th class="address">地址</th>
						<th class="main">纳税主体</th>
						<th class="head">开票名称/发票抬头</th>
						<th class="content">纳税属性</th>
						<th class="snumber">税号</th>
						<th class="kaddress">开票地址</th>
						<th class="kphone">开票电话</th>
						<th class="kbank">开票银行</th>
						<th class="kaccount">开票账号</th>
					</tr>
					<tr class="choo_hang" v-for="chooitem in choolist">
						<td>
							<div>
								<span class="choo_radio_span">
									<input class="radio_input" v-model=
									"picked" type="radio" checked="checked">
								</span>
							</div>
						</td>
						<td>{{chooitem.number}}</td>
						<td ><p class="name">{{chooitem.name}}</p></td>
						<td><p class="brand">{{chooitem.brand}}</p></td>
						<td ><p class="address">{{chooitem.address}}</p>
						</td>
						<td ><p class="main">{{chooitem.main}}</p></td>
						<td ><p class="head">{{chooitem.head}}</p></td>
						<td><p class="content">{{chooitem.content}}</p></td>
						<td><p class="snumber">{{chooitem.snumber}}</p></td>
						<td><p class="main">{{chooitem.kaddress}}</p>
						</td>
						<td><p class="kphone">{{chooitem.kphone}}</p>
						</td>
						<td><p class="kbank">{{chooitem.kbank}}</p></td>
						<td><p class="kaccount">{{chooitem.kaccount}}
						</p></td>
					</tr>
				</table>
			</div>
		</div>
		<div class="choo_foot">
			<div class="main_w1200">
				<a href="#" class="choo_foot_back fl">返回</a>
				<a class="choo_foot_button fr">确认选择</a>
			</div>
		</div>
	</div>
</template>
<script>
	import KeywordsSearch from "@/components/KeywordsSearch.vue";
	export default{
		name:'hotel',
		data(){
			return{
				picked:'',
				choolist:[
					{
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'莫泰',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'M0007',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'泊玺-银座佳驿',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'如家精选',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'云上四季 民宿',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'如家精选',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'如家精选',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'如家精选',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'如家精选',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					},
					{
						choose:'ddd',
						number:'J10001',
						name:'如家-北京昌平科技园区水屯店（内宾）',
						brand:'如家精选',
						address:'上海天钥桥路909号12楼桥路909桥上海天钥桥路909号12楼桥路909桥路',
						main:'北京觉品酒店管理有限公北京觉品酒',
						head:'北京觉品酒店管理有限公北京觉品酒',
						content:'一般纳税人',
						snumber:'91310104745601660G',
						kaddress:'上海天钥桥路909号12楼桥路909楼桥桥路上海天钥桥路909号12楼桥路909楼桥桥招商银行北京朝阳公园支行路',
						kphone:'021-33373333',
						kbank:'招商银行北京朝阳公园支行',
						kaccount:'217680001910001'
					}
				]
			}
		},
		components:{
			KeywordsSearch
		}
			
	}
</script>
<style lang="less">
	.ch_box{
		padding-bottom:100px;
		h1{
			font-size:20px;
			color:#535353;
			font-weight:bold;
			line-height:26px;
			padding:25px 0 12px 0;
		}
		.choo_search{
			.keywords_search{
				border-color:#E31D19;
				.btn{
					border-color:#E31D19;
					background:#E31D19;
					color:#fff;				
				}				
			}

		}
		.choo_table{
			font-size:12px;
			margin-top:20px;
			border:1px solid #EBEBEB;
			tr{
				th{
					border-bottom:1px solid #EBEBEB;
					color:#979797;
					line-height:40px;
					&.choose{
						padding:0 15px 0 14px;
						width:26px;
					}
					&.number{
						padding:0 2px;
						width:51px;
					}
					&.name{
						padding:0 10px 0 2px;
						width:120px;
					}
					&.brand{
						padding-right:13px;
						width:49px;
					}
					&.address{
						padding-right:10px;
						width:110px;
					}
					&.main{
						padding-right:14px;
						width:120px;				
					}
					&.head{
						padding-right:14px;
						width:120px;
					}
					&.content{
						padding-right:8px;
						width:52px;
					}
					&.snumber{
						padding-right:7px;
						width:73px;
					}
					&.kaddress{
						width:131px;
						padding-right:1px;
					}					
					&.kphone{
						padding-right:16px;
						width:52px;
					}
					&.kbank{
						padding-right:13px;
						width:84px;
					}
					&.kaccount{
						width:60px;
						padding-left:9px;
					}
				}
				td{
					vertical-align:middle;
					line-height:49px;
					color:#535353;
					span{
						&.choo_radio_span{
						background:url("../../assets/images/radio_icon.png") center center no-repeat;
						width:20px;
						height:20px;	
						display:inline-block;
						margin:-2px 0 0 15px;
						vertical-align:middle;					
						}
						.radio_input{
							opacity: 0;
							cursor: pointer;
							-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
							filter: alpha(opacity=0);
						}
						&.on{
							background:url("../../assets/images/radio_icon_on.png") center center no-repeat;

						}
					}
					p{
						line-height:16px;
						overflow:hidden; 
						text-overflow:ellipsis;
						display:-webkit-box; 
						-webkit-box-orient:vertical;
						-webkit-line-clamp:2; 	
						word-wrap:break-word;					
						&.name{
							width:114px;				
						}
						&.brand{
							width:49px;	
						}
						&.address{
							width:108px;				
						}						
						&.main{
							width:120px;
						}
						&.head{
							width:120px;
						}						
						&.content{
							width:37px;
						}
						&.snumber{
							width:70px;
						}
						&.kphone{
							width:54px;
						}
						&.kbank{
							width:84px;
						}
						&.kaccount{
							width:56px;
							padding-left:9px;
						}
					}
				}
				&:hover{
					background:#EFEFEF;
					cursor:pointer;
				}
			}
		}
		.choo_foot{
			background:#fff;
			height:60px;
			box-shadow:0px -6px 6px 0px rgba(0,0,0,0.06);
			-webkit-box-shadow:0px -6px 6px 0px rgba(0,0,0,0.06);
			position:fixed;
			bottom:0;
			width:100%;
			font-size:20px;
			a{
				line-height:60px;
				&.choo_foot_back{
					color:#535353;
					&:before{
						content:"";
						background:url("../../assets/images/choo_left_jt.png");
						background-repeat:no-repeat;
						background-size:7px 13px;
						width:7px;
						height:13px;
						display:inline-block;
						margin-right:13px;
						vertical-align:middle;
						margin-top:-3px;
					}
				}
				&.choo_foot_button{
					color:#fff;
					background:#E31D19;
					width:159px;
					height:60px;
					text-align:center;
					cursor:pointer;
				}
			}
		}
	}
</style>