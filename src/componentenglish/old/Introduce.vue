<template>
<div>
	<Headers :show='show'></Headers>
	<div class="img_introduce w"><img src="/static/img/banner_introduce.jpg" alt=""></div>
	<div class="introduce w">
		<div class="header">1. Company Profile</div>
		<div class="tit">International Express Service Center belongs to Shanghai Ming Zhang Network Technology Co., Ltd, specialized in international express delivery, cloud storage transport, e-commerce distribution, committed to providing reliable and convenient international courier service to the manufacturing enterprises, trade enterprises, cross-border electricity providers and consumers. To create "high-quality international logistics integration services", we will spare no effort.</div>			
		<div class="tit">Through the construction of information network platform and advanced delivery system, our service center continue to provide customer service to meet their delivery needs, and, together with customer design the best solution for the whole logistics procedure including warehousing business with customers. In the storage, distribution, courier services, air transport and other aspects of global real-time monitoring, ready to provide customer tracking information.</div>
		<div class="tit">International express center has service sites in Shanghai, Beijing, Shandong, Guangdong, Zhejiang, Jiangsu and other provinces. You send express, we send qualified courier, door-to-door collection. Faster and safer.</div>
		<div class="tit">We think what customer think, we focus on what customer focus on. International express service center, look forward to cooperating with you together to achieve a win-win situation.</div>
		<div class="header">2. Contact us</div>
		<div class="tit">TEL:  021-34120053</div>			
		<div class="tit">Operating Hours:  9:00-18:00  Mon - Fri</div>
		<div class="tit">Website:  www.mingz-tech.com</div>
		<div class="tit">Address：Room No.1, 168 alley, Hongtai Road, Hongqiao business district, Shanghai, China.</div>
	</div>
	<Footers></Footers>
</div>
</template>
<script>
import Headers from '@/componentenglish/Headers'
import Footers from '@/componentenglish/Footers'

export default {
	name: 'enIntroduce',
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
		window.document.title = '公司介绍-上海明彰网络科技有限公司'
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
<style scoped>
/* 公司介绍 */
.img_introduce{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_introduce>img{
	height: inherit;
	width: inherit;
}
.introduce{
	// margin-top: 30px;
	background-color: #fff;
	padding:40px;
	box-sizing: border-box;
	color: #555;
}
.introduce>.tit{
	margin-bottom: 10px;
	font-size: 18px;
	line-height: 1.5em;
}
.introduce>.header{
	// text-align: center;
	font-size: 24px;
	line-height: 2em;
	font-weight: bold;
	// margin-bottom: 30px;
}
</style>