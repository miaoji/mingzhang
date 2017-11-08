<template>
	<div>
		<Headers :show='show' :link='link'></Headers>
		<div class="clear w">
			<div class="send_left left">
				<div class="info">
					Please follow our we-chat official account to experience the new express world.
				</div>
				<div class="img"><img src="/static/image/WeChat.jpg" alt=""></div>
			</div>
			<div class="send right">
				<div class="tit">Integrate international express service Provide more choice</div>
				<div class="header_info">We provide documents, parcels and other items delivery, offer customer the most appropriate services. The goods can be transported to all over the world by air, sea, and land.</div>
				<div class="tit">Send Process</div>
				<div class="line"></div>
				<div class="tit"><span class="icon"></span>Send Out</div>
				<div class="comtent">1. Way of sending: scan a QR code to follow we-chat official account: international express service center, or call the customer service hotline: 021-34120053,Canada Hotline : 647-995-2600.</div>
				<div class="comtent">2. Provide goods information: item name, weight, destination, item value, etc. Then place an order online.</div>
				<div class="comtent">3. Confirm delivery mode:<br/> 1) Pick up : arrange picking time according to your request.<br/>2)Post delivery: place order online first, then put your goods in nearby post box according to online indication, we will send our courier to take out and send</div>
				<div class="tit"><span class="icon"></span>Packing & Transportation</div>
				<div class="comtent">1. Make sure the goods item name and package meet the transport standards.</div>
				<div class="comtent">2. Free package reinforcement, free replacement packaging, free compression volume, in order to avoid transport risks.</div>
				<div class="comtent">3. Transport goods to the operation center, declare at the customs then arrange flights.</div>
				<div class="tit"><span class="icon"></span>Track & Feedback</div>
				<div class="comtent">1. The system tracks the express information online.</div>
				<div class="comtent">2. Professional customer service feedback transport and receipt information without delay.</div>
				<div class="comtent">3. one to one service if there is any problem.</div>
			</div>	
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/componentenglish/Headers'
import Footers from '@/componentenglish/Footers'

export default {
	name: 'Send',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			show: true,
			link:'/Send'
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

@media screen and (max-width: 980px) {
    .send_left {
    	display: none;
    }
    .send{
		width: 1094px;
		border: 1px solid #e1e1e0;
		background-color: #fff;
		float: none;
		margin: 0 auto;
		box-sizing: border-box;
		color: #333;
		margin-bottom: 150px;
    }
    .send>.header_info{
    	padding: 40px 0px;
    }
    .send>.comtent{
    	padding: 20px 0px; 
    }
}
.clear{
	margin-top: 35px;
}
/* 左侧边栏 */
.send_left{
	padding-top: 22px;
	width: 198px;
	height: 488px;
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.send_left>.info{
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 28px 28px 10px;
	color: #333333;
}
.send_left>.img{
	margin: 0px auto;
	width: 180px;
	height: 180px;
	overflow: hidden;
}
.send_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.send{
	width: 1064px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 200px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.send>.line{
	width: 55px;
	height: 3px;
	margin-top: 14px;
	background-color: #ea000a;
}
.send>.header_info{
	margin-top: 8px;
	font-size: 16px;
	line-height: 30px;
	color: #999999;
}
.send>.tit{
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	line-height: 1.8em;
	color: #555;
}
.send>.tit>.icon{
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #333333;
	border-radius: 50%;
	margin-bottom: 2px;
	margin-right: 8px;
}
.send>.comtent{
	margin-top: 6px;
	color: #666;
	font-size: 16px;
	line-height: 1.8em;
	font-weight: bold;
}

</style>