<template>
	<div class="main_box show">
		<div class="banner"><img src="/static/img/banner1.jpg"/></div>
		<div class="main w">
			<div class="main_inquire clear">
				<div class="main_inquire_tit left">快件查询</div>
				<div class="main_inquire_inp left">
					<input id="input" type="text" placeholder="请输入单号进行查询" v-model='msg' />
				</div>
				<div @click='handleClick' id="btn" class="main_inquire_btn left">查询</div>
			</div>
			<div class="main_hint">
				<div class="main_hint_text">立即体验</div>
				<div class="main_hint_img"><img src="/static/img/line.png"/></div>
			</div>	
			<div class="main_experience">
				<ul class="clear">
					<li class="left item1"><router-link to="/Send"><div class="btn">我要寄件</div></router-link></li>
					<li class="left item2"><img src="/static/img/tp4.jpg"/></li>
					<li class="left item3"><img src="/static/img/tp5.jpg"/></li>
					<li class="left item4"><router-link to="/Prescription"><div class="btn">参考时效</div></router-link></li>
					<li class="left item5"><router-link to="/Site"><div class="btn">服务站点</div></router-link></li>
					<li class="left item6"><img src="/static/img/tp6.jpg"/></li>
					<!-- <li class="left item7"><img src="/static/img/tp4.png"/></li>
					<li class="left item8"><div class="btn">会员登录</div></li> -->
				</ul>
			</div>
			<div class="main_hint">
				<div class="main_hint_text">快递服务中心新闻</div>
				<div class="main_hint_img"><img src="/static/img/line.png"/></div>
			</div>	
			<div class="main_news">
				<ul>
					<li class="main_news_item"><router-link target='_blank' to="/new5">2017-10-09 年香港机场客机起火 火势猛烈烧毁不少货物</router-link></li>
					<li class="main_news_item"><router-link target='_blank' to="/new4">2017-09-28 中秋国庆假期服务安排</router-link></li>
					<li class="main_news_item"><router-link target='_blank' to="/new3">2017-09-11 关于国际快递服务中心快递时效受佛罗里达州飓风“艾尔玛”影响的提示</router-link></li>
					<li class="main_news_item"><router-link target='_blank' to="/new2">2017-09-01 国际快递服务中心扩大校园服务范围</router-link></li>
					<li class="main_news_item"><router-link target='_blank' to="/new1">2017-08-28 国际快递服务中心微信公众号上线！</router-link></li>
				</ul>
			</div>
		</div>
		<div class="service w">
			<div class="main_hint">
				<div class="main_hint_text">优质服务</div>
				<div class="main_hint_img"><img src="/static/img/line.png"/></div>
			</div>	
			<div class="service_items">
				<ul class="clear">
					<li class="service_items_item item1 left">
						<div class="img"></div>
						<div class="text">优质服务</div>
						<div>提供客户最需要的增值服务，为客户带来便利及节省费用。</div>
					</li>
					<li class="service_items_item item2 left">
						<div class="img"></div>
						<div class="text">性价比高</div>
						<div>在要求时效性和安全运输的同时，运输价格更优惠。</div>
					</li>
					<li class="service_items_item item3 left">
						<div class="img"></div>
						<div class="text">专业性强</div>
						<div>有着丰富的国际快递运输经验，对世界各国运输物品政策非常了解，让客户省心放心。</div>
					</li>
					<li class="service_items_item item4 left">
						<div class="img"></div>
						<div class="text">自主灵活</div>
						<div>提供多种快递运输线路，为客户选择性价比最高的物流解决方案。</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'IndexMain',
	data(){
		return {
			msg:'',
			link:'/GetOrderInfo'
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
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
<style>
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
	padding: 42px 100px;
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
	width: 158px;
	height: 58px;
	margin: 122px 212px;
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
.service>.service_items>ul>li.item1>.img{background-image: url(/static/img/ftp9.png);}
.service>.service_items>ul>li.item2>.img{background-image: url(/static/img/ftp1.png);}
.service>.service_items>ul>li.item3>.img{background-image: url(/static/img/ftp3.png);}
.service>.service_items>ul>li.item4>.img{background-image: url(/static/img/ftp5.png);}
.service>.service_items>ul>li.item1>.img:hover{background-image: url(/static/img/ftp10.png);}
.service>.service_items>ul>li.item2>.img:hover{background-image: url(/static/img/ftp2.png);}
.service>.service_items>ul>li.item3>.img:hover{background-image: url(/static/img/ftp4.png);}
.service>.service_items>ul>li.item4>.img:hover{background-image: url(/static/img/ftp6.png);}
.service>.service_items>ul>li.service_items_item>.text{
	text-align: center;
	font-weight: bold;
	font-size: 18px;
	padding-top: 30px;
	padding-bottom: 10px;
	// line-height: 64px;
}
</style>