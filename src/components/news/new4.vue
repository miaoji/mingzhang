<template>
		<div class="news w">
			<h1>中秋国庆假期服务安排</h1>
			<p>感谢您一直以来对“国际快递服务中心”的支持和信任。在国庆中秋即将来临之际，“国际快递服务中心”祝您和您的家人合家团圆，幸福安康。结合我司实际情况，作出以下安排：
				9月30日（周六）中午11点之前正常提供服务
			</p>
			<p>10月1日至10月8日（共8天）因受海关和航班变化影响，暂停服务。</p>
			<p>10月9日（周一）恢复正常服务。</p>
			<p>放假期间给您带来不方便，敬请谅解。再次感谢您的理解与支持，祝节日快乐！</p>
			<p class="clear"><span class="right">国际快递服务中心</span></p>
			<p class="clear"><span class="right">2017年9月28日</span></p>
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