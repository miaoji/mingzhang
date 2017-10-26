<template>
	<div>
		<Headers :show='show' :link='link'></Headers>
		<div class="clear w">
			<div class="order_left left">
				<div class="icon"><img src="/static/image/sen_sea.png" /></div>
				<div class="info">快件查询</div>
				<div class="line"></div>
				<div class="input"><input placeholder="请输入单号进行查询" type="text" v-model='order'/></div>
				<div class="button" @click="getOrderInfo">搜索</div>
			</div>
			<div class="order right">
				<div class="icon"><img src="/static/image/sen_res.png" /></div>
				<div class="icon"><img src="" alt=""></div>
				<div class="tit">快件轨迹</div>
				<div class="line"></div>
				<div class="order_info">
					<ul>
						<!-- <li><span class="order_info_tit">2017.05.14</span><span class="icon"></span><span class="line"></span><span class="order_info_content">快递已签收,感谢您使用圆通快递! </span></li>
						<li><span class="order_info_tit">2017.05.13</span><span class="icon"></span><span class="line"></span><span class="order_info_content">成都市洞子口公司 的 刘云辉 正在派件 (电话:13456789)</span></li>
						<li><span class="order_info_tit">2017.05.12</span><span class="icon"></span><span class="line"></span><span class="order_info_content">成都市洞子口公司 已收入 (电话:13456789)</span></li> -->
						<li v-for='item in cnOrderdData'><span class='order_info_tit'>{{item.time}}</span><span class='icon'></span><span class='line'></span><span class='order_info_content' :title="item.context">{{item.context}}</span></li>
						<li v-for='item in intlOrderData'><span class='order_info_tit'>{{item.time}}</span><span class='icon'><span class='line'></span></span><span class='order_info_content' :title="item.context">{{item.context}}</span></li>
						<li style="text-align: center;padding-top: 50px;font-size:20px;" v-if="show">暂无快递信息</li>
					</ul>
				</div>
			</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
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
			show:true,
			link:'/enGetOrderInfo'
		}
	},
	created(){
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
							company:res.obj.kdCompanyCodeCn||'zhongtong',
							source:'frontend'
					})
					console.log('cnorder',cnorder)
					if (cnorder.code === 200) {
						this.cnOrderdData = cnorder.obj.data
						console.log('cnOrderdData',this.cnOrderdData)
					}
					if (cnorder.code === 200) {
						this.show = false
					}
				}else{
					this.cnOrderdData = []
					this.show = true
				}
				if (res.obj.intlNo) {
					let intlorder = await queryByCompany({
						num:res.obj.intlNo,
						company:res.obj.kdCompanyCode,
						source:'frontend'
					})
					if (intlorder.code === 200) {
						this.intlOrderData = intlorder.obj.data
					}
					if (intlorder.code === 200) {
						this.show = false
					}
					console.log('intlorder111',intlorder)
				}else{
					this.intlOrderData = []
				}
			}else{
				console.log('查询失败了',res)
				this.show = true
				this.cnOrderdData = []
				this.intlOrderData = []
			}
		}
	}
}
</script>
<style scoped>
.clear{
	margin-top: 35px;
	margin-bottom: 35px;
}
/* 左侧边栏 */
.order_left{
	width: 510px;
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.order_left>.icon{
	position: relative;
	top: 74px;
	left: 53px;
}
.order>.icon{
	position: relative;
	top: 74px;
	left: 0px;
}
.order_left>.info{
	height: 41px;
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 39px 90px 0px;
	color: #333333;
}
.order_left>.line{
	width: 55px;
	height: 3px;
	margin-left: 90px;
	margin-bottom: 30px;
	background-color: #ea000a;
}
.order_left>.input{
	margin: 31px 50px 32px;
}
.order_left>.input>input{
	box-sizing: border-box;
	width: 410px;
	height: 63px;
	padding: 0px 22px;
	border: 1px #e1e1e0 solid;
	border-radius: 3px;
	font-size: 14px;
	color: #a3a1a6;
}
.order_left>.input>input::-webkit-input-placeholder {
	color: #a3a1a6;
}
.order_left>.input>input::-moz-placeholder {
	color: #a3a1a6;
}
.order_left>.input>input::-ms-input-placeholder {
	color: #a3a1a6;
}
.order_left>.button{
	cursor: pointer;
	margin-left: 50px;
	width: 150px;
	height: 62px;
	background-color: #d7132e;
	color: #fff;
	line-height: 62px;
	text-align: center;
	font-size: 18px;
	border-radius: 5px;
	margin-bottom: 33px;
}
.order_left>.button:hover{

}
/* 右侧边栏 */

.order{
	width: 770px;
	min-height: 306px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 100px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.order>.line{
	width: 55px;
	height: 3px;
	margin-top: 14px;
	margin-bottom: 20px;
	margin-left: 30px;
	background-color: #ea000a;
}
.order>.tit{
	margin-left: 30px;
	margin-top: 20px;
	font-size: 16px;
	font-weight: bold;
	line-height: 1.8em;
}
.order>.order_info{
}
.order>.order_info>ul{
	list-style: none;
	padding: 0px;
	color: #999999;
	margin: 0px;
}
.order>.order_info>ul>li{
	position: relative;
}
.order>.order_info>ul>li:first-child{
	color: #333333;
}
.order>.order_info>ul>li>span{
	display: inline-block;
	line-height: 50px;
}
.order>.order_info>ul>li>span.order_info_tit{
	font-size: 14px;
	margin-right: 20px;
}
.order>.order_info>ul>li>span.icon{
	width: 8px;
	height: 8px;
	margin-right: 20px;
	background-color: #999;
	border-radius: 50%;
	position: relative;
	top: -2px;
}
.order>.order_info>ul>li:first-child>span.icon{
	background-color: #333;
}
.order>.order_info>ul>li:last-child>span.icon{
	background-color: #333;
}
.order>.order_info>ul>li>span.icon>span.line{
	width: 2px;
	height: 36px;
	background-color: #3f3f3f;
	position: absolute;
	top: -50px;
	left: 3px;
}
.order>.order_info>ul>li:first-child>span.icon>span.line{
	display: none;
}
.order>.order_info>ul>li>span.order_info_content{
	white-space:nowrap;
	text-overflow:ellipsis;
	-o-text-overflow:ellipsis;
	overflow:hidden;
	width: 480px;
	font-size: 14px;
	position: relative;
	top: 19px;
}
</style>