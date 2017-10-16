<template>
<div>
	<div class="img_site w"><img src="/static/img/banner_site.jpg" alt=""></div>
	<div class="site w">
		<div class="header">国际快递服务中心，已在上海、北京、广东、江苏、浙江、山东等多个省份拥有服务站点，并在多个高校开设面向大学生寄递服务的站点，致力于不断向客户提供富有创新和满足客户不同需求的解决方案。</div>
		<div class="chinamap"><img src="/static/img/china.png" alt="中国地图"></div>
	</div>
</div>
</template>
<script>
export default {
	name: 'Site',
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
/* 服务站点 */
.img_site{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_site>img{
	height: inherit;
	width: inherit;
}
.site{
	// margin-top: 30px;
	background-color: #fff;
	padding:40px;
	box-sizing: border-box;
	color: #555;
}
.site>.header{
	font-size: 24px;
	line-height: 2em;
}
.site>.chinamap{
	width: 100%;
	margin: 30px 0px;
	text-align: center;
}
</style>