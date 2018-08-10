<template>
	<div class="my_product_box">
		<div class="key_bg">
			<div class="main_w1200">
				<div class="product_search fl">
					<keywords-search default-placeholder="请输入产品名称/产品编号" 
					></keywords-search>
				</div>
				<div class="product_year fr">
					<dropdown @curText = "fnDropdown"></dropdown>
				</div>				
			</div>
		</div>
		<div class="main_w1200">
			<div class="product_list">
				<table cellpadding="0" cellspacing="0" >
					<tr>
						<th width="215">产品名称</th>
						<th width="72">SKU</th>
						<th width="68">单价</th>
						<th width="70">酒店品牌</th>
						<th width="58">小类</th>
						<th width="71">中类</th>
						<th width="62">大类</th>
						<th width="100">规格描述</th>
						<th width="62">送货周期</th>
						<th width="91">产品税码</th>
						<th width="78">成交订单量</th>
						<th width="88">创建时间</th>
						<th width="83">操作</th>
					</tr>
					<tr v-for="(item,index) of products" :key="index"> 
						<td class="product_name fix">
							<p class="product_img fl"><img width="50" height="50" :src="item.image"></p>
							<p class="product_intro fl">{{item.name}}</p>
						</td>
						<td class="product_sku">{{item.sku}}</td>
						<td class="product_price">{{item.price}}</td>
						<td class="product_brand">{{item.brand}}</td>
						<td class="product_xiaolei">{{item.xiaolei}}</td>
						<td class="product_zlei">{{item.zlei}}</td>
						<td class="product_dlei">{{item.dlei}}</td>
						<td class="product_ms">
							<p>{{item.ms}}</p>
						</td>
						<td class="product_date">{{item.date}}</td>
						<td class="product_shuima">{{item.shuima}}</td>
						<td class="product_dingdan">{{item.dingdan}}</td>
						<td class="product_time">{{item.time}}</td>	
						<td class="procuct_caozuo"><router-link :to="'allot'"><b>{{item.caozuo}}</b></router-link></td>		
					</tr>
				</table>
			</div>
		</div>
		<div class="pages">
          <pages></pages>
        </div>
	</div>
</template>
<script>
import KeywordsSearch from "@/components/KeywordsSearch.vue";
import Dropdown from "@/components/Dropdown";// 下拉菜单
import Pages from "@/components/Pages"; // 分页器
export default {
    name:'MyProduct',
    data(){
    	return{
    		products:[
    		{
    			name:"打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		},{
    			name:"打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票打印机/佳博票",
    			image:"../../assets/images/product_img.png",
    			sku:"G0040090",
    			price:"￥2346",
    			brand:"如家精选",
    			xiaolei:"打印机",
    			zlei:"办公设备",
    			dlei:"电子设备/IT网络",
    			ms:"CS-290e打印机hiti专用色带CS",
    			date:"30天",
    			shuima:"2343223543",
    			dingdan:"4039",
    			time:"2018-05-08 16:30",
    			caozuo:"单品分析"

    		}]
    	}

    },
	components:{
		KeywordsSearch,
		Dropdown,
		Pages
	},
	methods:{
		// 获取下拉菜单内容
	    fnDropdown(text){

	    }
	 }
 }
</script>
<style lang="less" scoped>
	.product_search{
		padding-left:7px;
	}
	.product_year{
		padding-right:26px;
	}
	.my_product_box{
		.key_bg{
			background:#F9F9F9;
			height:52px;
			padding:17px 0 0 21px;
		}
		.product_list{
			
			padding-top:28px;
			font-size:14px;
			table{
				margin-bottom:24px;
				tr{
					th{
						color:#979797;
						line-height:19px;
						border-bottom:1px solid #EBEBEB;
						text-align:center;
						padding-bottom:9px;
					}
					td{
						vertical-align: middle;
						color:#535353;
						height:50px;
						text-align:center;
						line-height:50px;
						padding:17px 0 16px 0;
						border-bottom:1px solid #EBEBEB;
						&.product_name{
							
						}
						p{
							&.product_img{
								height:50px;
							}
							&.product_intro{
								width:148px;
								padding:6px 0 0 17px;
								line-height:19px;
								overflow:hidden; 
								text-overflow:ellipsis;
								display:-webkit-box; 
								-webkit-box-orient:vertical;
								-webkit-line-clamp:2; 	
								text-align:left;					
							}
						}
						&.product_price{
							font-size:16px;
						}
						&.product_dlei{
							line-height:19px;
							padding:0px 0px 0 8px;
						}
						&.product_ms{
							width:100px;
							line-height:19px;
							padding-left:11px;
							p{
							overflow:hidden;
							text-overflow:ellipsis;
							display:-webkit-box;
							-webkit-line-clamp:2;
							-webkit-box-orient:vertical;
							}

						}
						&.product_time{
							line-height:19px;
						}
						&.procuct_caozuo{
							b{
								border:1px solid #FFCDCD;
								background:#FEF3F3;
								border-radius:17px;
								-webkit-border-radius:17px;
								font-size:14px;
								color:#E31D19;
								line-height:32px;
								text-align:center;
								display:inline-block;
								width:81px;
								cursor:pointer;
								&:hover{
									filter:alpha(opacity=80);-moz-opacity:0.80;opacity:0.80;
									background:#FEF3F3;
								}
							}
						}
					}
				}
			}
		}
		.pages{
			padding-bottom:58px;
		}
	}
</style>