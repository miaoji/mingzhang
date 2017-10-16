<template>
	<div class="news w">
		<h1>国际快递服务中心微信公众号上线！</h1>
		<p>经过精心的筹备，国际快递服务中心微信公众号将于8月28日正式上线运营。</p>
		<p>作为旨在客户海外寄递的服务平台，国际快递服务中心提供包括国际标快、国际特惠、国际小包等不同类型与时效标准的服务，并可根据客户需求量身定制快递服务，致力于全方位满足客户寄件至海外的需求。</p>
		<p>客服可关注“国际快递服务中心”官方微信公众号，可以直接在公众号寄快递，下单成功后会有工作人员上门收件，操作简单，快递寄件。</p>
		<p>目前，国际快递服务中心的微信公众号已初步成型，国际快递服务中心还将在模式创新、宣传用户体验和服务能力能方面，继续改进升级，不断提高服务能力。</p>
	</div>	
</template>
<script>
export default {
	name: 'News',
	async created(){
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