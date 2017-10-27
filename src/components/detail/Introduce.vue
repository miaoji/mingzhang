<template>
	<div>
		<Headers :show='show' :link='link'></Headers>
		<div class="clear w">
			<div class="introduce_left left">
				<div class="info">联系我们</div>
				<div class="line"></div>
				<div class="content">服务电话 ： 021-34120053</div>
				<div class="content">服务时间 : 9:00-18:00</div>
				<div class="content">加拿大客服热线 : 647-995-2600</div>
				<div class="content">网址：www.mingz-tech.com</div>
				<div class="content">地址: 上海市闵行区泰虹路168弄1号楼302室</div>
				<div class="content">微信号: IESC007</div>
				<div class="content">QQ: 3187904519</div>
				<div class="content">Email: custom_service@ming-tech.net</div>
				<div class="content">阿里旺旺: 明彰国际快递服务中心</div>
			</div>
			<div class="introduce right">
				<div class="image">
					<img src="/static/image/com.png" alt="">
				</div>
				<div class="tit">公司介绍</div>
				<div class="line"></div>
				<div class="header_info">国际快递服务中心是上海明彰网络科技有限公司旗下产品，专门从事国际快递、云仓集运、电子商务配送的专业物流服务机构，致力于给制造企业、贸易企业、跨境电商、个人用户等提供可靠便捷的国际快递服务，为打造“优质的国际物流整合服务”不懈努力。</div>
				<div class="header_info">国际快递服务中心，通过构筑信息网络平台和先进的运送体系，不断向客服提供满足需求的寄递服务，与客户共同设计包括仓储业务在内的整体物流程序的最佳方案。对仓储、配送、快递服务、航空运输等多个环节进行全球范围的实时监控，随时向客服提供业务追踪信息。</div>
				<div class="header_info">国际快递服务中心已在上海、北京、山东、广东、浙江、江苏等多个省份设有服务站点，客户下单，上门取件，想客户之所想，急客户之所急，不断提高服务质量和优化服务水平。国际快递服务中心，期待与您携手发展，实现双赢。</div>
			</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
	name: 'introduce',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			show: true,
			link:'/enIntroduce'
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style scoped>
.clear{
	margin-top: 35px;
}
/* 左侧边栏 */
.introduce_left{
	padding-top: 22px;
	width: 288px;
	/* height: 488px; */
	padding-bottom: 22px;
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.introduce_left>.info{
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 38px 38px 10px;
	color: #333333;
}
.introduce_left>.content{
	font-size: 14px;
	color: #666;
	line-height: 30px;
	margin: 0px 38px 10px;
	border-bottom: 1px #555 solid;
}
.introduce_left>.info:last-child{}
.introduce_left>.img{
	margin: 70px auto 0px;
	width: 180px;
	height: 180px;
	overflow: hidden;
}
.introduce_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.introduce{
	width: 978px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 100px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.introduce>.line{
	width: 55px;
	height: 3px;
	margin-top: 14px;
	margin-bottom: 20px;
	background-color: #ea000a;
}
.introduce_left>.line{
	width: 55px;
	height: 3px;
	margin-top: 2px;
	margin-left: 38px;
	margin-bottom: 30px;
	background-color: #ea000a;
}
.introduce>.header_info{
	text-indent: 1em;
	margin-top: 8px;
	font-size: 16px;
	line-height: 30px;
	color: #666;
}
.introduce>.tit{
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	line-height: 1.8em;
}
.introduce>.tit>.icon{
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #333333;
	border-radius: 50%;
	margin-bottom: 2px;
	margin-right: 8px;
}
.introduce>.comtent{
	margin-top: 6px;
	font-size: 16px;
	line-height: 1.8em;
	font-weight: bold;
}
.introduce>.image{
	text-align: center;
	margin-top: 30px;
}
</style>