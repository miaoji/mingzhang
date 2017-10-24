<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="clear w">
			<div class="site_left left">
				<div class="info">Service Site</div>
				<div class="line"></div>
				<div class="img"><img src="/static/image/weixin.jpg" alt=""></div>
			</div>
			<div class="site right">
				<div class="tit">Sending online，quick response，door-to-door collection and delivery.</div>
				<div class="header_info">International express center has service sites in Shanghai, Beijing, Guangdong, Jiangsu, Zhejiang, Shandong and other provinces, at the same time we specially set up service sites in many campus so that university and college students can send courier more convenient.</div>
				<div class="header_info">We committed to provide customers with innovative solutions and satisfy their different needs.</div>
				<div class="map">
					<img src="/static/image/china.png" alt="">
				</div>
			</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/componentenglish/Headers'
import Footers from '@/componentenglish/Footers'

export default {
	name: 'Site',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			show: true,
		}
	},
	created(){
		window.document.title = 'Shanghai Mingzhang Network Technology Co., Ltd.'
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
.site_left{
	padding-top: 22px;
	width: 198px;
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
	margin: 0px auto;
	width: 180px;
	height: 180px;
	overflow: hidden;
}
.site_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.site{
	width: 1064px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 200px;
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
	margin-top: 30px;
}
</style>