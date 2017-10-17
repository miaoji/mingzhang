<template>
		<div class="news w">
			<h1>关于国际快递服务中心快递时效受佛罗里达州飓风“艾尔玛”影响的提示</h1>
			<p>尊敬的客户</p>
			<p>近期，受美国佛罗里达州飓风“艾尔玛”影响，美国佛罗里达州进口及出口的国际标快、国际特惠、国际重货、国际小包等快件的送达日期将可能有一定的延后。我司会密切关注当地飓风的影响情况，合理调配资源，全力确保您的快件安全并尽快送达。</p>
			<p>如有疑问请咨询客服热线021—34120053。感谢您一直以来对国际快递服务中心的信任与支持！</p>
			<p class="clear"><span class="right">国际快递服务中心</span></p>
			<p class="clear"><span class="right">2017年9月11日</span></p>
		</div>	
</template>
<script>
export default {
	name: 'News',
	created(){
		window.document.title = '新闻动态-上海明彰网络科技有限公司'
		this.$emit('showbtn',true)
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