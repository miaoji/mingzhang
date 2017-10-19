<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="img_send w"><img src="static/img/banner_send.jpg" alt=""></div>
		<div class="send w">
			<div class="heaer_info">提供快速、经济的投递服务，满足客户多元化的快递需求。</div>
			<div class="tit">一、寄件</div>
			<div class="comtent">1. 寄件渠道：扫码关注“国际快递服务中心”微信公众号，或者拨打客服热线021-34120053。</div>
			<div class="comtent">2. 下单方式: 提供线上、线下等多种下单方式，并提供全物流轨迹追踪。</div>
			<div class="comtent">3. 取件方式：上门取件【根据您的要求，安排取货时间】，驿站投递等。</div>
			<div class="tit">二、快件处理</div>
			<div class="comtent">1. 确认快件品名及包装是否符合运输标准。</div>
			<div class="comtent">2. 免费打包加固、更换包装、压缩体积，规避运输风险。</div>
			<div class="comtent">3. 提供国内外快件报关、清关服务。</div>
			<div class="tit">三、跟踪反馈</div>
			<div class="comtent">1. 在线查询快件全物流轨迹。</div>
			<div class="comtent">2. 专业客服及时反馈关键信息。</div>
			<div class="comtent">3. 问题件一对一处理。</div>
			<div class="tit">四、关注公众号,体验国际快递服务</div>
			<div class="comtent"><img src="/static/img/weixin.jpg" alt=""></div>
		</div>	
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
	name: 'Send',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			show: true
		}
	},
	created(){
		window.document.title = '我要寄件-上海明彰网络科技有限公司'
		this.$emit('showbtn',true)
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