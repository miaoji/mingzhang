<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="main_box show">
			<div class="banner"><img src="/static/img/banner2.jpg"/></div>
			<div class="main w">
				<div class="main_inquire clear">
					<div class="main_inquire_tit left">EXPRESS TRACK</div>
					<div class="main_inquire_inp left">
						<input id="input" type="text" placeholder="Please Input Your Waybill No. " v-model='msg' />
					</div>
					<div @click='handleClick' id="btn" class="main_inquire_btn left">Enter</div>
				</div>
				<div class="main_hint">
					<div class="main_hint_text">Experience Now</div>
					<div class="main_hint_img"><img src="/static/img/line.png"/></div>
				</div>	
				<div class="main_experience">
					<ul class="clear">
						<li class="left item1"><router-link to="/enSend"><div class="btn">Send Out</div></router-link></li>
						<li class="left item2"><img src="/static/img/tp4.jpg"/></li>
						<li class="left item3"><img src="/static/img/tp5.jpg"/></li>
						<li class="left item4"><router-link to="/enPrescription"><div class="btn">Reference Time</div></router-link></li>
						<li class="left item5"><router-link to="/enSite"><div class="btn">Service Site</div></router-link></li>
						<li class="left item6"><img src="/static/img/tp6.jpg"/></li>
						<!-- <li class="left item7"><img src="/static/img/tp4.png"/></li>
						<li class="left item8"><div class="btn">会员登录</div></li> -->
					</ul>
				</div>
				<div class="main_hint hide">
					<div class="main_hint_text">ANNOUNCEMENT</div>
					<div class="main_hint_img"><img src="/static/img/line.png"/></div>
				</div>	
				<div class="main_news hide">
					<ul>
						<li class="main_news_item"><router-link target='_blank' to="/new5">2017-10-09 A lot of goods ruined due to the big fire in Hongkong airport.</router-link></li>
						<li class="main_news_item"><router-link target='_blank' to="/new4">2017-09-28 Service arrangement during Mid-Autumn Festival and National Day.</router-link></li>
						<li class="main_news_item"><router-link target='_blank' to="/new3">2017-09-11 Tips for hurricane in Florida, "Alma" will influent delivery of goods.</router-link></li>
						<li class="main_news_item"><router-link target='_blank' to="/new2">2017-09-01 International express service center expanded service area in campus.</router-link></li>
						<li class="main_news_item"><router-link target='_blank' to="/new1">2017-08-28 Online! We-chat official accounts of International express service center.</router-link></li>
					</ul>
				</div>
			</div>
			<div class="service w">
				<div class="main_hint">
					<div class="main_hint_text">advantages Services</div>
					<div class="main_hint_img"><img src="/static/img/line.png"/></div>
				</div>	
				<div class="service_items">
					<ul class="clear">
						<li class="service_items_item item1 left">
							<div class="img"></div>
							<div class="text">Quality Service</div>
							<div>Well-established system.Various logistics routes to choose.</div>
						</li>
						<li class="service_items_item item2 left">
							<div class="img"></div>
							<div class="text">Reasonable Price Ratio</div>
							<div>Competitive price.Safer & Faster.</div>
						</li>
						<li class="service_items_item item3 left">
							<div class="img"></div>
							<div class="text">Highly Professional</div>
							<div>Extensive experience in international express.Deep knowledge about global express policy.</div>
						</li>
						<li class="service_items_item item4 left">
							<div class="img"></div>
							<div class="text">Unrestrained & Flexible</div>
							<div>Focus on customer needs.Various routes to choose.Perfect logistics solution.</div>
						</li>
					</ul>
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
	name: 'IndexMain',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			msg: '',
			show: false,
			link: '/enGetOrderInfo',
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
				this.$router.push({path:'/enGetOrderInfo?order='+this.msg})
			}
		}
	}
}
</script>
<style scoped>
/* banner图部分 */

.banner{
	width: 100%;
	overflow: hidden;
}
.banner>img{
	position: relative;
	left: 50%;
	margin-left: -950px;
	height: 500px;
}

/* 快件查询部分 */

.main{}
.main>.main_inquire{
	height: 42px;
	margin-top: -63px;
	background-color: #666666;
	position: relative;
	z-index: 99;
	padding: 42px 40px;
}
.main>.main_inquire>.main_inquire_tit{
	font-size: 30px;
	line-height: 42px;
	color: #fff;
}
.main>.main_inquire>.main_inquire_inp{
	margin: 0px 30px;
}
.main>.main_inquire>.main_inquire_inp>input{
	font-size: 16px;
	height: 38px;
	width: 610px;
	padding-left: 10px;
	color: #ccc;
	border-radius: 3px;
	border-width: 1px;
	border-top-color: #cbcbcb!important;
	border-bottom-color: #cbcbcb!important;
	border-left-color: #cbcbcb!important;
	border-right-color: #cbcbcb!important;
	outline: none;
}
.main>.main_inquire .main_inquire_btn{
	font-size: 16px;
	font-weight: bold;
	line-height: 40px;
	color: #fff;
	width: 160px;
	background-color: #ff535f;
	border-radius: 3px;
	text-align: center;
	cursor:pointer;
	user-select: none;
	-webkit-user-select: none;
}

/* 提示文字 */

.main_hint{
	text-align: center;
	height: 114px;
}
.main_hint>.main_hint_text{
	color: #555;
	font-size: 24px;
	font-weight: bold;
	padding-top: 25px;
	padding-bottom: 10px;
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
	/*font-family: '宋体';*/
	margin-top: 30px;
	background-color: #fff;
}
.service>.service_items{}
.service>.service_items>ul{
	padding: 0px 0px 30px 0px;
	margin: 0px;
	// margin: 0px 0px 30px 0px;
	// padding: 0px 84px 29px;
}
.service>.service_items>ul>li.service_items_item{
	font-size: 14px;
	text-align: center;
	box-sizing: border-box;
	list-style: none;
	width: 292px;
	color: #333;
	// margin-right: 203px;
	padding: 0px 60px;
}
.service>.service_items>ul>li.service_items_item:last-child{
	margin-right: 0px;
}
.service>.service_items>ul>li.service_items_item>.img{
	margin: 0 auto;
	width: 98px;
	height: 98px;
}
.service>.service_items>ul>li.item1>.img{background-image: url(/static/img/ftp01.png);}
.service>.service_items>ul>li.item2>.img{background-image: url(/static/img/ftp02.png);}
.service>.service_items>ul>li.item3>.img{background-image: url(/static/img/ftp03.png);}
.service>.service_items>ul>li.item4>.img{background-image: url(/static/img/ftp04.png);}
.service>.service_items>ul>li.item1>.img:hover{background-image: url(/static/img/ftph01.png);}
.service>.service_items>ul>li.item2>.img:hover{background-image: url(/static/img/ftph02.png);}
.service>.service_items>ul>li.item3>.img:hover{background-image: url(/static/img/ftph03.png);}
.service>.service_items>ul>li.item4>.img:hover{background-image: url(/static/img/ftph04.png);}
.service>.service_items>ul>li.service_items_item>.text{
	text-align: center;
	font-weight: bold;
	font-size: 18px;
	padding-top: 30px;
	padding-bottom: 10px;
	// line-height: 64px;
}
</style>