<template>
	<div class="cashier">
		<div class="cashier_bg"></div>
		<div class="order_info">
			<div class="title">
				<span>订单详情</span>
				<span class="title_info">订单提交成功，请在确认信息后付款！订单号：{{data.orderNo}}</span>
				<div class="right">实付金额 : <span class="totalFee">{{data.totalFee/100}}</span> 元</div>
			</div>
			<div class="content">
				<div class="item">
					<el-card class="box-card">
						<div class="item_title">寄件地址信息</div>
						<div class="info"><span>寄件人</span> : <span>{{data.senderName}}</span></div>
						<div class="info"><span>寄件地址</span> : <span>{{data.senderCountry}}/{{data.senderProv}}/{{data.senderCity}}/{{data.senderCounty}}/{{data.senderAddress}}</span></div>
						<div class="info"><span>联系方式</span> : <span>{{data.senderMobile}}</span></div>
						<div class="info"><span>邮编</span> : <span>{{data.senderPostcode}}</span></div>
					</el-card>
				</div>
				<div class="item">
					<el-card class="box-card">
						<div class="item_title">收件地址信息</div>
						<div class="info"><span>收件人</span> : <span>{{data.receiverName}}</span></div>
						<div class="info"><span>收件地址</span> : <span>{{data.receiverCountry}}/{{data.receiverAddress}}</span></div>
						<div class="info"><span>联系方式</span> : <span>{{data.receiverMobile}}</span></div>
						<div class="info"><span>邮编</span> : <span>{{data.receiverPostcode}}</span></div>
					</el-card>
				</div>
				<div class="item">
					<el-card class="box-card">
						<div class="item_title">包裹信息</div>
						<el-row :gutter="20">
							<el-col :span="6">
								<div><span>重量</span> : <span>{{data.weight?data.weight:0}}kg</span></div>
							</el-col>
							<el-col :span="6">
								<div><span>长度</span> : <span>{{data.length?data.length:0}}cm</span></div>
							</el-col>
							<el-col :span="6">
								<div><span>宽度</span> : <span>{{data.width?data.width:0}}cm</span></div>
							</el-col>
							<el-col :span="6">
								<div><span>高度</span> : <span>{{data.height?data.height:0}}cm</span></div>
							</el-col>
						</el-row>
						<el-row :gutter="20">
							<el-col :span="6">
								<div><span>是否保价</span> : <span>{{data.insured===1?'是':'否'}}</span></div>
							</el-col>
							<el-col :span="6" v-show='data.insured===1'>
								<div><span>保价金额</span> : <span>{{data.insuredAmount}}元</span></div>
							</el-col>
							<el-col :span="6">
								<div><span>是否退件</span> : <span>{{data.returnGood===1?'是':'否'}}</span></div>
							</el-col>
						</el-row>
					</el-card>
				</div>
				<div class="item">
					<el-card class="box-card">
						<div class="item_title">付款方式</div>
						<div class="weixin_pay clear">
							<div class="img left"><img src="/static/image/pay_weixin.png" alt="微信支付"></div>
							<div class="left">前往微信支付</div>
						</div>
					</el-card>
				</div>
				<div class="item">
					<el-card class="box-card">
						<div class="item_title">注意</div>
						<div>请在付款前确认寄件信息,以免由于地址信息的错误,给您的投递带来不便</div>
					</el-card>
				</div>
			</div>
		</div>
		<div style="height: 50px"></div>
	</div>
</template>
<script>
import { getOrderInfoByOrderNo } from "@/services/orderInfo"
export default {
	name: 'cashier',
	data(){
		return {
			data: {}
		}
	},
	created(){
		const order = location.hash.split('?order=')[1]
		this.getOrderInfo(order)
	},
	methods: {
		async getOrderInfo(orderNo){
			const data = await getOrderInfoByOrderNo({orderNo})
			if (data.code === 200 && data.obj) {
				this.data = data.obj
			}
		}
	}
}
</script>
<style lang="less">
.cashier {
	margin: 30px auto 30px;
	// background-color: #fff;
	.cashier_bg {
		position: absolute;
		top: 100px;
		left: 50%;
		margin-left: -650px;
		background-image: url(/static/image/cashier_bg.png);
		background-repeat: no-repeat;
		background-size: 1300px;
		z-index: -1;
		width: 1300px;
		height: 1000px;
	}
	.order_info {
		width: 1100px;
		// border: 1px solid #ddd;
		margin: 0px auto;
		position: relative;
		.title {
			font-size: 18px;
			color: #333;
			line-height: 2.2em;
			padding-left: 6px;
			border-bottom: 2px #eee solid;
			width: 90%;
			margin: 0px auto;
			.title_info {
				font-size: 12px;
				padding-left: 20px;
			}
			.right {
				padding-right: 20px;
				font-size: 14px;
				color: #444;
				.totalFee {
					font-size: 18px;
					color: #f52f3e;
				}
			}
		}
		.content {
			width: 90%;
			margin: 0px auto;
			.item {
				padding-top: 20px;
				.box-card {
					padding: 20px;
					font-size: 14px;
					line-height: 1.8em;
					.item_title {
						line-height: 2em;
						font-size: 18px;
					}
					.info {
					}
					.weixin_pay {
						margin-top: 20px;
						font-size: 16px;
						line-height: 40px;
						width: 160px;
						border-radius: 3px;
						padding: 6px;
						border: 1px solid #ddd;
						.img {
							height: 40px;
							img {
								width: inherit;
								height: inherit;
							}
							margin-right: 10px;
						}
					}
				}
			}
		}
	}
}
</style>