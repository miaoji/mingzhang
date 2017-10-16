<template>
	<div>
		<div class="img_send w"><img src="static/img/banner_send.jpg" alt=""></div>
		<div class="send w">
			<div class="heaer_info">提供速快、经济、大货等物品递送，给客户最合适的快递服务，可以将货物通过空运、海运、路运等运输至各地。</div>
			<div class="tit">一、寄件</div>
			<div class="comtent">1. 寄件方式：扫码关注“国际快递服务中心”微信号，或者拨打客服热线021-34120053。</div>
			<div class="comtent">2. 提供货件信息：物品名称，重量，目的地，物品价值等，在线下单。</div>
			<div class="comtent">3. 确认提货方式：上门取件【根据您的要求，安排取货时间】。</div>
			<div class="tit">二、货件处理</div>
			<div class="comtent">1. 确认货物品名及包装是否符合运输标准。</div>
			<div class="comtent">2. 免费打包加固，免费更换包装，免费压缩体积，规避运输风险。</div>
			<div class="comtent">3. 货物转运至操作中心，进行报关及安排航班。</div>
			<div class="tit">三、跟踪反馈</div>
			<div class="comtent">1. 系统全程在线跟踪快件信息。</div>
			<div class="comtent">2. 专业客服及时反馈转运及签收信息。</div>
			<div class="comtent">3. 问题件一对一处理。</div>
			<div class="tit">四、关注公众号,体验国际快递服务</div>
			<div class="comtent"><img src="/static/img/weixin.jpg" alt=""></div>
		</div>	
	</div>
</template>
<script>
export default {
	name: 'Send',
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style>
.img_send{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_send>img{
	height: inherit;
	width: inherit;
}
.send{
	background-color: #fff;
	padding: 40px;
	box-sizing: border-box;
	color: #555;
}
.send>.heaer_info{
	font-size: 24px;
	line-height: 40px;
}
.send>.tit{
	margin-top: 20px;
	font-size: 24px;
	font-weight: bold;
	line-height: 40px;
}
.send>.comtent{
	font-size: 18px;
	line-height: 32px;
}

</style>