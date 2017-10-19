<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="img_site w"><img src="/static/img/banner_site.jpg" alt=""></div>
		<div class="site w">
			<div class="header">国际快递服务中心，已在上海、北京、广东、江苏、浙江、山东等多个省份拥有服务站点，并在多个高校开设面向大学生寄递服务的站点，致力于向客户提供优质安全多元化的快递解决方案。</div>
			<div class="chinamap"><img src="/static/img/china.png" alt="中国地图"></div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
	name: 'Site',
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
		window.document.title = '服务站点-上海明彰网络科技有限公司'
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