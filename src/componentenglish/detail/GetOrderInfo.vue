<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="order_box">
			<div class="order_main w">
				<div class="order_main_title">运单状态</div>
				<div class="main_inquire clear">
					<div class="main_inquire_tit left">快件查询</div>
					<div class="main_inquire_inp left">
						<input id="orderInput" type="text" placeholder="请输入单号进行查询" v-model='order'/>
					</div>
					<div id="orderBtn" class="main_inquire_btn left" @click="getOrderInfo">查询</div>
				</div>
				<div class="express_info">
					<div class="express_info_tit"><span class="express_code" id="express_code">{{order}}</span> 的运单状态</div>
					<ul id="info_ul">
						<li class="tit"><span class="title">时间</span><span class="info">地点和跟踪进度</span></li>
						<!--<li><span class="title">时间</span><span class="ico"></span><span class="ico1"></span><span class="info">地点和跟踪进度</span></li>-->
						<li v-for='item in cnOrderdData'><span class='title'>{{item.time}}</span><span class='ico'></span><span class='ico1'></span><span class='info'>{{item.context}}</span></li>
						<li v-for='item in intlOrderData'><span class='title'>{{item.time}}</span><span class='ico'></span><span class='ico1'></span><span class='info'>{{item.context}}</span></li>
						<li style="text-align: center;" v-if="show">暂无快递信息</li>
					</ul>
				</div>	
			</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/componentenglish/Headers'
import Footers from '@/componentenglish/Footers'

import { getOrderInfoByOrderNo, queryByCompany } from '@/services/orderInfo'
export default {
	name: 'GetOrderInfo',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			order:'',
			cnOrderdData:[],
			intlOrderData:[],
			show: true
		}
	},
	created(){
		window.document.title = '订单查询-上海明彰网络科技有限公司'
		this.order = location.hash.split('?order=')[1]
		this.getOrderInfo()
		this.menu()
	},
	methods:{
		menu() {
			window.scrollTo(0,0);
		},
		async getOrderInfo(){
			this.$router.push({path:'/GetOrderInfo?order='+this.order})
			let res = await getOrderInfoByOrderNo({
				orderNo:this.order
			})
			if(res.code === 200){
				if (res.obj.cnNo) {
					let cnorder = await queryByCompany({
							num:res.obj.cnNo,
							company:res.obj.kdCompanyCodeCn||'zhongtong'
					})
					console.log('cnorder',cnorder)
					if (cnorder.code === 200) {
						this.cnOrderdData = cnorder.obj.data
						console.log('cnOrderdData',this.cnOrderdData)
					}
					if (cnorder.obj.data) {
						this.show = false
					}
				}else{
					this.cnOrderdData=[]
					this.show = true
				}
				if (res.obj.intlNo) {
					let intlorder = await queryByCompany({
						num:res.obj.intlNo,
						company:res.obj.kdCompanyCode
					})
					if (intlorder.code === 200) {
						this.intlOrderData = intlorder.obj.data
					}
					if (intlorder.obj.data) {
						this.show = false
					}
					console.log('intlorder111',intlorder)
				}else{
					this.intlOrderData=[]
				}
			}else{
				this.show = true
				this.cnOrderdData=[]
				this.intlOrderData=[]
			}
		}
	}
}
</script>
<style>
/* 快递查询  */
.express_info{
	width: 1030px;
	margin: 0 auto;
	color: #555;
}
.express_info>.express_info_tit{
	line-height: 60px;
}
.express_code{
	color: #ff525e;
}
.express_info>ul{
	padding: 0px;
	margin: 0px;
	background-color: #fff;
}
.express_info>ul>li{
	list-style: none;
	position: relative;
	border-bottom:1px #ccc solid;
	border-left: 1px #ccc solid;
	border-right: 1px #ccc solid;
	height: 58px;
	text-align: left;
	line-height: 58px;
	padding-left:30px;
}
.express_info>ul>li:first-child{
	padding-left: 90px;
	border-top: 1px #ccc solid;
	font-weight: 600;
}
.express_info>ul>li>.title{
	// width: 235px;
	padding-right:30px ;
	display: inline-block;
}
.express_info>ul>li>.info{
	padding-left:50px ;
	display: block;
	float: right;
	white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow:hidden;
	height: 58px;
	width: 750px;
}
.express_info>ul>li>.ico{
	display: inline-block;
	height: 26px;
	width: 26px;
	position: absolute;
	left: 230px;
	top: 17px;
	z-index: 22;
	background-image: url(/static/img/ico_1.png);
	background-repeat: no-repeat;
}
.express_info>ul>li>.ico1{
	display: inline-block;
	height: 100%;
	width: 26px;
	position: absolute;
	left: 230px;
	background-image: url(/static/img/lines.png);
}
.express_info>ul>li:nth-child(2)>.ico1{
	height: 50%;
	top: 29px;
}
.express_info>ul>li:last-child>.ico1{
	height: 50%;
}
.express_info>ul>li:nth-child(2)>.ico{
	background-image: url(/static/img/ico_2.png);
}
.express_info>ul>li:last-child>.ico{
	background-image: url(/static/img/ico_3.png);
}
/* order 部分 */
.order_box{
	margin: 30px auto;
	background-color: #fff;
	width: 1170px;
	padding: 30px 0px;
}
.order_main>.order_main_title{
	font-size: 24px;
	color: #555;
	line-height: 66px;
	margin: 0 55px 28px;
	border-bottom: 1px #ccc solid;
}
.order_main>.main_inquire{
	width: 1060px;
	box-sizing: border-box;
	height: 100px;
	margin: 0 auto;
	background-color: #fff;
	position: relative;
	z-index: 99;
	padding: 29px 48px;
	border: 1px #ccc solid;
}
.order_main>.main_inquire>.main_inquire_tit{
	font-size: 30px;
	line-height: 42px;
	color: #555;
}
.order_main>.main_inquire>.main_inquire_inp{
	margin: 0px 28px;
}
.order_main>.main_inquire>.main_inquire_inp>input{
	font-size: 16px;
	height: 38px;
	width: 610px;
	padding-left: 10px;
	color: #ccc;
	border-radius: 3px;
	border: 1px #cbcbcb solid;
	outline: none;
}

.order_main>.main_inquire>.main_inquire_btn{
	font-size: 16px;
	font-weight: bold;
	line-height: 40px;
	color: #fff;
	width: 160px;
	background-color: #ff535f;
	border-radius: 3px;
	text-align: center;
	cursor:pointer;
	user-select: none;
	-webkit-user-select: none;
}
.order_main>.main_inquire>.main_inquire_btn:hover{
	background-color: #ff0000;
}
</style>