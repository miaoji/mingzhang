		this.$emit('location',location.hash)
<template>
	<div>
		<div class="clear w">
			<div class="site_left left">
				<div class="info">服务站点</div>
				<div class="line"></div>
				<div class="img"><img src="/static/image/banner_site.png" alt=""></div>
			</div>
			<div class="site right">
				<div class="tit">在线寄件,快速响应,上门取件</div>
				<div class="header_info">国际快递服务中心，已在上海、北京、广东、江苏、浙江、山东等多个省份拥有服务站点，并在多个高校开设面向大学生寄递服务的站点。</div>
				<div class="header_info">我们致力于向客户提供优质安全多元化的快递解决方案。</div>
				<div class="map">
					<img src="/static/image/china.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'site',
	data(){
		return {
			show: true,
			link: '/enSite'
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
		this.$emit('location',location.hash)
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
.site_left{
	padding-top: 22px;
	width: 288px;
	height: 488px;
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.site_left>.info{
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 28px 28px 10px;
	color: #333333;
}
.site_left>.img{
	margin: 70px auto 0px;
	width: 250px;
	height: 250px;
	overflow: hidden;
}
.site_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.site{
	width: 978px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 100px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.site>.line{
	width: 55px;
	height: 3px;
	margin-top: 14px;
	background-color: #ea000a;
}
.site_left>.line{
	width: 55px;
	height: 3px;
	margin-top: 2px;
	margin-left: 28px;
	background-color: #ea000a;
}
.site>.header_info{
	margin-top: 8px;
	font-size: 16px;
	line-height: 30px;
	color: #999999;
}
.site>.tit{
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	line-height: 1.8em;
}
.site>.tit>.icon{
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #333333;
	border-radius: 50%;
	margin-bottom: 2px;
	margin-right: 8px;
}
.site>.comtent{
	margin-top: 6px;
	font-size: 16px;
	line-height: 1.8em;
	font-weight: bold;
}
.map{
	text-align: center;
	margin-top: 60px;
}
</style>