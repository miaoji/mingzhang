<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="img_send w"><img src="static/img/banner_send_en.jpg" alt=""></div>
		<div class="send w">
			<div class="heaer_info">We provide documents, parcels and other items delivery, offer customer the most appropriate services. The goods can be transported to all over the world by air, sea, and land.</div>
			<div class="tit">Send out：</div>
			<div class="comtent">1. Way of sending: scan a QR code to follow we-chat official account: international express service center, or call the customer service hotline: 021-34120053.</div>
			<div class="comtent">2. Provide goods information: item name, weight, destination, item value, etc. Then place an order online.</div>
			<div class="comtent">3. Confirm delivery mode: pick up : arrange picking time according to your request.</div>
			<div class="tit">Packing & Transportation</div>
			<div class="comtent">1. Make sure the goods item name and package meet the transport standards.</div>
			<div class="comtent">2.Free package reinforcement, free replacement packaging, free compression volume, in order to avoid transport risks.</div>
			<div class="comtent">3. Transport goods to the operation center, declare at the customs then arrange flights.</div>
			<div class="tit">Track & Feedback</div>
			<div class="comtent">1. The system tracks the express information online。</div>
			<div class="comtent">2. Professional customer service feedback transport and receipt information without delay.</div>
			<div class="comtent">3. one to one service if there is any problem.</div>
			<div class="tit">Please follow our we-chat official account to experience the new express world.</div>
			<div class="comtent"><img src="/static/img/weixin.jpg" alt=""></div>
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
		}
	},
	created(){
		window.document.title = '我要寄件-上海明彰网络科技有限公司'
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
.img_send{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_send>img{
	height: inherit;
	width: inherit;
}
.send{
	background-color: #fff;
	padding: 40px;
	box-sizing: border-box;
	color: #555;
}
.send>.heaer_info{
	font-size: 24px;
	line-height: 40px;
}
.send>.tit{
	margin-top: 20px;
	font-size: 24px;
	font-weight: bold;
	line-height: 40px;
}
.send>.comtent{
	font-size: 18px;
	line-height: 32px;
}

</style>