<template>
	<div>
		<div class="clear w">
			<div class="violate_left left">
				<div class="info">Help&Support</div>
				<div class="line"></div>
				<div class="content"><router-link to='/enQuestion'>Questions & Answers</router-link></div>
				<div class="content action"><router-link to='/enViolate'>Prohibited Articles</router-link></div>
			</div>
			<div class="violate right">
				<div class="image">
					<img src="/static/image/banner_question.png" alt="">
				</div>
				<div class="tit">Prohibited Answers</div>
				<div class="line"></div>
				<div class="image image_s">
					<img src="/static/image/violate.png" alt="">
				</div>
				<div class="violate_tit">Ⅰ. The above images 1 to 15 are forbidden by air transportation; 14,15 can be transported by land.</div>

				<div class="violate_tit">Ⅱ. Other prohibited and restricted delivery items:</div>
				<div class="answer">1. All Chemical products that list in the "Handbook of Chemical Dangerous Goods" which published by chemical industry: explosive, flammable, corrosive, toxic, strongly acidic and radioactive, such as detonators, gunpowder, firecrackers, gasoline, alcohol, kerosene, tung oil, raw lacquers, matches, pesticides, etc.</div>
				<div class="answer">2. Narcotic drugs and psychiatric items such as opium, morphine, cocaine (high root), etc., national laws prohibit the circulation or delivery of items such as arms, national or foreign currencies.</div>
				<div class="answer">3. Easy rotten items, all kinds of live animals (such as fresh fish, fresh meat, etc.)</div>
				<div class="answer">4. Obstruction of public health items, such as bones (including incineration of the bones), the animal skins without skining, the animal bones without the medical preparation, etc.</div>
				<div class="answer">5. Reactionary newspapers, books, windows or obscene articles.</div>
				<div class="answer">6.If the chemical product you send is not included in the "Handbook of Chemical Dangerous Goods", you must provide certificate which issued by first-class chemical product identification department, to confirm that the relevant items are non-hazardous chemical products, ONLY with this certificate that your product can be delivered, and the relevant identification department must be responsible for the identification results.</div>

				<div class="violate_tit">III.China prohibit entry and exit (territory) items</div>
				<div class="answer">1.	Prohibit entry items</div>
				<div class="answer">1)	Various weapons, ammunition, simulated weapons and explosives.</div>
				<div class="answer">2)	Imitation of currency and imitation of securities and so on.</div>
				<div class="answer">3)	Prints, film, photographs, records, videos, tapes, laser discs, computer storage media and other items that are harmful to China's political economy and culture.</div>
				<div class="answer">4)	All kinds of drugs.</div>
				<div class="answer">5)	Opium, morphine, heroin, marijuana and other addictive narcotics, psychotropic substances.</div>
				<div class="answer">6)	Animals, plants and other products with dangerous bacteria, pests and harmful animals.</div>
				<div class="answer">7)	Any food, medicine or other thing from the affected area or anything that is harmful to the health of the population.</div>
				<div class="answer">2. Prohibit exit items</div>
				<div class="answer">1)  All items that prohibited entry.</div>
				<div class="answer">2)  Content covers documents of state secrets, prints, film, photographs, records, videos, tapes, laser discs, computer storage media and other items.</div>
				<div class="answer">3)  Precious cultural relics and other prohibited cultural relics.</div>
				<div class="answer">4)  On the verge of precious animals and plants (both containing specimens) and their seeds and propagation materials.</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'violate',
	data(){
		return {
			show: true,
			link:'/Violate'
		}
	},
	created(){
		window.document.title = 'Shanghai Mingzhang Network Technology Co., Ltd.'
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
.violate_left{
	padding-top: 22px;
	width: 288px;
	height: 488px;
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.violate_left>.info{
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 38px 38px 10px;
	color: #333333;
}
.violate_left>.content{
	font-size: 14px;
	color: #666;
	line-height: 30px;
	margin: 0px 38px 10px;
	border-bottom: 1px #555 solid;
}
.violate_left>.content.action{
	color: red;
}
.violate_left>.info:last-child{}
.violate_left>.img{
	margin: 70px auto 0px;
	width: 180px;
	height: 180px;
	overflow: hidden;
}
.violate_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.violate{
	width: 978px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 100px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.violate>.line{
	width: 55px;
	height: 3px;
	margin-top: 14px;
	margin-bottom: 20px;
	background-color: #ea000a;
}
.violate_left>.line{
	width: 55px;
	height: 3px;
	margin-top: 2px;
	margin-left: 38px;
	margin-bottom: 30px;
	background-color: #ea000a;
}
.violate>.header_info{
	text-indent: 1em;
	margin-top: 8px;
	font-size: 16px;
	line-height: 30px;
	color: #666;
}
.violate>.tit{
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	line-height: 1.8em;
}
.violate>.tit>.icon{
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #333333;
	border-radius: 50%;
	margin-bottom: 2px;
	margin-right: 8px;
}
.violate>.comtent{
	margin-top: 6px;
	font-size: 16px;
	line-height: 1.8em;
	font-weight: bold;
}
.violate>.image{
	text-align: center;
	margin-top: 30px;
}
.violate>.image_s{
	margin: 40px auto;
}

.violate>.violate_tit{
	font-size: 16px;
	color: #333;
	font-weight: bold;
	line-height: 1.8em;
	margin-bottom: 10px;
	margin-top: 10px;
}
.violate>.answer{
	font-size: 13px;
	color: #666;
	line-height: 1.8em;
}
</style>