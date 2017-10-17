<template>
		<div class="news w">
			<h1>国际快递服务中心扩大校园服务范围</h1>
			<p>继国际快递服务中心开通了多个高校的国际快递服务后，为了更好的满足高校学生的国际快递的寄递需求，日前，国际快递服务中心在高校设置收件中心，学生除了在“国际快递服务中心”官方公众号上提交订单，还可以到学校收件中心寄送快递，收件范围扩大到更多高校。</p>
			<p>国际快递服务中心，是为满足客户寄递物品至海外国家，推出时效稳定、具有高性价比的国际快递服务。适用于高校、外贸B2B客户及跨境电商企业。如有垂询，您可联系客服021—34120053。</p>
		</div>	
</template>
<script>
export default {
	name: 'News',
	created(){
		window.document.title = '新闻动态-上海明彰网络科技有限公司'
		this.menu()
	},
	methods: {
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style>
.news{
	background-color: #fff;
	padding: 30px;
	box-sizing: border-box;
	margin-top: 100px;
	margin-bottom: 100px;
}
.news>p{
	color: #555;
}
</style>