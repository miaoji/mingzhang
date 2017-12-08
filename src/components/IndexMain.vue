<template>
	<div>
		<Headers :show='show' :link='link'></Headers>
		<div class="main_box show">
			<div class="banner"><img src="/static/image/index_banner.jpg"/></div>
			<div class="main w">
				<div class="main_inquire clear">
					<div class="main_inquire_tit left"><span class="ico"></span>快件查询</div>
					<div class="main_inquire_inp left">
						<input id="input" type="text" placeholder="请输入单号进行查询" v-model='msg' />
					</div>
					<div class="main_inquire_btn_box right">
						<div @click='handleClick' id="btn" class="main_inquire_btn left">查询</div>
					</div>
				</div>
			</div>
			<div class="service w">
				<div class="main_hint">
					<div class="main_hint_text"><span class="tit">优势服务</span><span class="line"></span></div>
				</div>	
				<div class="service_items">
					<ul class="clear">
						<li class="service_items_item item1 left">
							<div class="img"></div>
							<div class="text">服务优势</div>
							<div class="text_item">多元化,多链路,保障快件妥投，一站式寄件体验。</div>
						</li>
						<li class="service_items_item item2 left">
							<div class="img"></div>
							<div class="text">性价比高</div>
							<div class="text_item">在保障时效性和安全性的同时，提供更优惠的价格。</div>
						</li>
						<li class="service_items_item item3 left">
							<div class="img"></div>
							<div class="text">专业性强</div>
							<div class="text_item">丰富的国际快递从业经验，了解世界各国运输政策。</div>
						</li>
						<li class="service_items_item item4 left">
							<div class="img"></div>
							<div class="text">自主灵活</div>
							<div class="text_item">多种快递运输链路，为客户提供多元化的解决方案。</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
	name: 'IndexMain',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			msg: '',
			show: false,
			link: '/enIndex',
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
		this.$emit('showbtn',false)
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		},
		handleClick(){
			// alert(this.msg)
			if (this.msg == '') {
				alert('您输入的订单号为空!!!')
			}else{
				this.$router.push({path:'/GetOrderInfo?order='+this.msg})
			}
		}
	}
}
</script>
<style scoped>
/* banner图部分 */
.main_box{
	width: 100%;
	overflow: hidden;
	/*background-color: #fafafa;*/
}
.banner{
	width: 1920px;
	height: 640px;
	overflow: hidden;
	position: relative;
	left: 50%;
	margin-left: -960px;
}
.banner>img{
	width: inherit;
	height: inherit;
}

/* 快件查询部分-查询按钮部分 */

.main{}
.main>.main_inquire{
	border-radius: 5px;
	height: 86px;
	width: 874px;
	margin-top: -86px;
	background: -webkit-linear-gradient(#494949, #1d1d1d); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#494949, #1d1d1d); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#494949, #1d1d1d); /* Firefox 3.6 - 15 */
	background: linear-gradient(#494949, #1d1d1d); /* 标准的语法 */
	position: relative;
	z-index: 99;
}
.main>.main_inquire>.main_inquire_tit{
	font-size: 14px;
	line-height: 86px;
	margin-left: 32px;
	color: #fff;
}
.main>.main_inquire>.main_inquire_tit>.ico{
	display: inline-block;
	width: 25px;
	height: 25px;
	background-image: url(/static/image/search.png);
	background-repeat: no-repeat;
	margin-right: 16px;
	position: relative;
	top: 10px;
}
.main>.main_inquire>.main_inquire_inp{
	margin: 0px 30px;
}
.main>.main_inquire>.main_inquire_inp>input{
	font-size: 16px;
	height: 48px;
	width: 362px;
	padding-left: 20px;
	margin: 18px 0px;
	color: #ccc;
	border-radius: 1px;
	border: 1px solid #d9d9d9;
	outline: none;
}
.main>.main_inquire>.main_inquire_inp>input::-webkit-input-placeholder {
	color: #a3a1a6;
}
.main>.main_inquire>.main_inquire_inp>input::-moz-placeholder {
	color: #a3a1a6;
}
.main>.main_inquire>.main_inquire_inp>input::-ms-input-placeholder {
	color: #a3a1a6;
}
.main>.main_inquire .main_inquire_btn_box{
	height: 100%;
	width: 196px;
	border-top-right-radius:5px;
	border-bottom-right-radius:5px;
	background-color: #fff;
}
.main>.main_inquire .main_inquire_btn{
	font-size: 18px;
	font-weight: 500;
	line-height: 50px;
	color: #fff;
	width: 130px;
	margin: 18px 33px;
	background-color: #d7132e;
	border-radius: 3px;
	text-align: center;
	cursor:pointer;
	user-select: none;
	-webkit-user-select: none;
}

/* 提示文字 */

.main_hint{
	/*text-align: center;*/
	/*height: 114px;*/
	margin-bottom: 44px;
}
.main_hint>.main_hint_text{
	height: 80px;
	color: #333333;
	font-size: 20px;
	font-weight: 500;
}
.main_hint>.main_hint_text>span{
	display: block;
}
.main_hint>.main_hint_text>.tit{
	padding-top: 13px;
	line-height: 64px;
}
.main_hint>.main_hint_text>.line{
	width: 55px;
	height: 3px;
	background-color: #ea000a;
}
.main_hint>.main_hint_img{}
.main_hint>.main_hint_img>img{}

/* 体验区 */

.main_experience{}
.main_experience>ul{
	padding: 0px;
	margin: 0px;
}
.main_experience>ul>li{
	width: 585px;
	height: 304px;
	list-style: none;
	overflow: hidden;
}
.main_experience>ul>li.item1{
	background-color: #0ec3bc;
}
.main_experience>ul>li.item4{
	background-color: #7bc3e6;
}
.main_experience>ul>li.item5{
	background-color: #799fe5;
}
.main_experience>ul>li.item8{
	background-color: #56c998;
}
.main_experience ul li .btn{
	width: 200px;
	height: 58px;
	margin: 122px 190px;
	background-color: inherit;
	border: 1px #fff solid;
	text-align: center;
	color: #fff;
	font-size: 24px;
	line-height: 58px;
	border-radius: 3px;
	cursor: pointer;
}
.main_experience>ul>li>img{
	height: inherit;
	width: inherit;
}

/* 最新消息 */

.main_news{
	background-color: #fff;
}
.main_news>ul{
	margin: 0px;
	padding: 0px 40px;
}
.main_news>ul>li.main_news_item{
	list-style: none;
	height: 73px;
	border-bottom: 1px #999999 dotted;
	font-size: 16px;
	color: #494949;
	line-height: 73px;
}
.main_news>ul>li.main_news_item:last-child{
	border: none;
}
.main_news>ul>li.main_news_item>a{
	text-decoration: none;
	color: inherit;
}

/* 客户服务 */

.service{
	/*background-color: #fff;*/
}
.service>.service_items{}
.service>.service_items>ul{
	padding: 0px 0px 30px 0px;
	margin: 0px 0px 50px;
}
.service>.service_items>ul>li.service_items_item{
	font-size: 16px;
	text-align: center;
	box-sizing: border-box;
	list-style: none;
	width: 293px;
	color: #666;
	background-color: #fff;
	margin-right: 42px;
	/*padding: 0px 60px;*/
}
.service>.service_items>ul>li.service_items_item:last-child{
	margin-right: 0px;
}
.service>.service_items>ul>li.service_items_item>.img{
	/*margin: 0 auto;*/
	width: 293px;
	height: 250px;
}
.service>.service_items>ul>li.item1>.img{background-image: url(/static/image/picf.png);}
.service>.service_items>ul>li.item2>.img{background-image: url(/static/image/pics.png);}
.service>.service_items>ul>li.item3>.img{background-image: url(/static/image/pict.png);}
.service>.service_items>ul>li.item4>.img{background-image: url(/static/image/picfo.png);}
.service>.service_items>ul>li.service_items_item>.text{
	text-align: center;
	font-weight: bold;
	font-size: 20px;
	padding: 30px 24px 0px;
	color: #333;
}
.service>.service_items>ul>li.service_items_item>.text_item{
	padding: 30px 24px 30px;
}
</style>