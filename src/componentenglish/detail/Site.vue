<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="img_site w"><img src="/static/img/banner_site.jpg" alt=""></div>
		<div class="site w">
			<div class="header">International express center has service sites in Shanghai, Beijing, Guangdong, Jiangsu, Zhejiang, Shandong and other provinces, at the same time we specially set up service sites in many campus so that university and college students can send courier more convenient.
			 we committed to provide customers with innovative solutions and satisfy their different needs.
			</div>
			<div class="chinamap"><img src="/static/img/china.png" alt="中国地图"></div>
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