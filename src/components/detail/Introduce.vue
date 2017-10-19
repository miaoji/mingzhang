<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="img_introduce w"><img src="/static/img/banner_introduce.jpg" alt=""></div>
		<div class="introduce w">
			<div class="header">一、公司介绍</div>
			<div class="tit">国际快递服务中心是上海明彰网络科技有限公司旗下产品，专门从事国际快递、云仓集运、电子商务配送的专业物流服务机构，致力于给制造企业、贸易企业、跨境电商、个人用户等提供可靠便捷的国际快递服务，为打造“优质的国际物流整合服务”不懈努力。</div>			
			<div class="tit">国际快递服务中心，通过构筑信息网络平台和先进的运送体系，不断向客服提供满足需求的寄递服务，与客户共同设计包括仓储业务在内的整体物流程序的最佳方案。对仓储、配送、快递服务、航空运输等多个环节进行全球范围的实时监控，随时向客服提供业务追踪信息。</div>
			<div class="tit">国际快递服务中心已在上海、北京、山东、广东、浙江、江苏等多个省份设有服务站点，客户下单，上门取件，想客户之所想，急客户之所急，不断提高服务质量和优化服务水平。国际快递服务中心，期待与您携手发展，实现双赢。</div>
			<div class="header">二、联系我们</div>
			<div class="tit">服务电话： 021-34120053</div>			
			<div class="tit">服务时间 : 周一至周五 9:00-18:00</div>
			<div class="tit">网址：www.mingz-tech.com</div>
			<div class="tit">地址 : 上海市闵行区泰虹路168弄1号</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
	name: 'Introduce',
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
		window.document.title = '公司介绍-上海明彰网络科技有限公司'
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
/* 公司介绍 */
.img_introduce{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_introduce>img{
	height: inherit;
	width: inherit;
}
.introduce{
	// margin-top: 30px;
	background-color: #fff;
	padding:40px;
	box-sizing: border-box;
	color: #555;
}
.introduce>.tit{
	margin-bottom: 6px;
	font-size: 18px;
	line-height: 1.5em;
}
.introduce>.header{
	// text-align: center;
	font-size: 24px;
	line-height: 2em;
	font-weight: bold;
	// margin-bottom: 30px;
}
</style>