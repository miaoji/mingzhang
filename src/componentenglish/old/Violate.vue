<template>
<div>
	<Headers :show='show'></Headers>
	<div class="img_question w"><img src="/static/img/banner_question.jpg" alt=""></div>
	<div class="violate w clear">
		<div class="question_nav left">
			<div class="tit">Help&Support</div>
			<div class="comtent"><router-link to="/enQuestion">Troubleshooting</router-link><span></span></div>
			<div class="comtent"><router-link to="/enViolate">Prohibited Articles</router-link></div>
		</div>
		<div class="right">
			<div class="title">Prohibited Articles</div>
			<ul class="clear">
				<li>
					<div>
						<img src="/static/img/vj1.jpg" alt="wine">
						<span>1.wine</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj2.jpg" alt="hair-gel & mousse">
						<span>2.hair-gel & mousse</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj3.jpg" alt="match">
						<span>3.match</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj4.jpg" alt="alcohol">
						<span>4.alcohol</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj5.jpg" alt="kerosene">
						<span>5.kerosene</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj6.jpg" alt="canned gas">
						<span>6.canned gas</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj7.jpg" alt="paint">
						<span>7.paint</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj8.jpg" alt="gasoline">
						<span>8.gasoline</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj9.jpg" alt="firecrackers">
						<span>9.firecrackers</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj10.jpg" alt="gun & bullet">
						<span>10.gun & bullet</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj11.jpg" alt="toxic">
						<span>11.toxic</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj12.jpg" alt="flammables">
						<span>12.flammables</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj13.jpg" alt="chemical material">
						<span>13.chemical material</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj14.jpg" alt="battery">
						<span>14.battery</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj15.jpg" alt="magnet">
						<span>15.magnet</span>
					</div>
				</li>
			</ul>
			<dl>
				<dt>Ⅰ. The above images 1 to 15 are forbidden by air transportation; 14,15 can be transported by land.</dt>
				<dd></dd>

				<dt>Ⅱ. Other prohibited and restricted delivery items:</dt>
				<dd>1. All Chemical products that list in the "Handbook of Chemical Dangerous Goods" which published by chemical industry: explosive, flammable, corrosive, toxic, strongly acidic and radioactive, such as detonators, gunpowder, firecrackers, gasoline, alcohol, kerosene, tung oil, raw lacquers, matches, pesticides, etc.</dd>
				<dd>2. Narcotic drugs and psychiatric items such as opium, morphine, cocaine (high root), etc., national laws prohibit the circulation or delivery of items such as arms, national or foreign currencies.</dd>
				<dd>3. Easy rotten items, all kinds of live animals (such as fresh fish, fresh meat, etc.)</dd>
				<dd>4. Obstruction of public health items, such as bones (including incineration of the bones), the animal skins without skining, the animal bones without the medical preparation, etc.</dd>
				<dd>5. Reactionary newspapers, books, windows or obscene articles.</dd>
				<dd>6.If the chemical product you send is not included in the "Handbook of Chemical Dangerous Goods", you must provide certificate which issued by first-class chemical product identification department, to confirm that the relevant items are non-hazardous chemical products, ONLY with this certificate that your product can be delivered, and the relevant identification department must be responsible for the identification results.</dd>

				<dt>Ⅲ. China prohibit entry and exit (territory) items</dt>
				<dd>1. Prohibit entry items<br/>
					1）Various weapons, ammunition, simulated weapons and explosives.<br/>
					2）Imitation of currency and imitation of securities and so on.<br/>
					3）Prints, film, photographs, records, videos, tapes, laser discs, computer storage media and other items that are harmful to China's political economy and culture.<br/>
					4) All kinds of drugs.<br/>
					5) Opium, morphine, heroin, marijuana and other addictive narcotics, psychotropic substances.<br/>
					6) Animals, plants and other products with dangerous bacteria, pests and harmful animals.<br/>
					7) Any food, medicine or other thing from the affected area or anything that is harmful to the health of the population.<br/>
				</dd>
				<dd>2. Prohibit exit items<br/>
					1) All items that prohibited entry.<br/>
					2) Content covers documents of state secrets, prints, film, photographs, records, videos, tapes, laser discs, computer storage media and other items.<br/>
					3) Precious cultural relics and other prohibited cultural relics.<br/>
					4) On the verge of precious animals and plants (both containing specimens) and their seeds and propagation materials.<br/>
				</dd>
			</dl>
		</div>
	</div>	
	<Footers></Footers>
</div>
</template>
<script>
import Headers from '@/componentenglish/Headers'
import Footers from '@/componentenglish/Footers'

export default {
	name: 'enViolate',
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
		window.document.title = '禁运物品-上海明彰网络科技有限公司'
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
/* 疑难解答部分 */
/* banner 部分 */
.img_question{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_question>img{
	height: inherit;
	width: inherit;
}
/* 违禁物品 */
.violate>.question_nav{
	width: 200px;
	padding: 44px 22px;
	box-sizing: border-box;
	color: #555;
}
.violate>.question_nav>div{
	border-bottom: 1px #a0a0a0 dashed;
	line-height: 2em;
	text-align: center;
}
.violate>.question_nav>.tit{
	font-size: 22px;
	font-weight: bold;
}
.violate>.question_nav>.comtent{
	font-size: 18px;
	line-height: 24px;
}
/* 右侧正文部分 */
.violate>.right{
	width: 968px;
	box-sizing: border-box;
	padding: 0px 30px 30px;
	border-left: 1px #a0a0a0 dashed;
}
.violate>.right>.title{
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	color: #555;
	padding-bottom: 20px;
}
.violate{
	background-color: #fff;
	padding: 30px 0px 80px;
	box-sizing: border-box;
	// margin-top: 30px;
	margin-bottom: 100px;	
}

.violate>div>ul{
	list-style: none;
	margin-bottom: 50px;
}
.violate>div>ul>li{
	width: 194px;
	float: left;
	text-align: center;
	height: 164px;
}
.violate>div>ul>li>img{}
.violate>div>ul>li>div>span{
	display: block;
}
.violate>div>dl>dt{
	font-size: 20px;
	color: #555;
	font-weight: bold;
	line-height: 1.8em;
	margin-top: 10px;
}
.violate>div>dl>dd{
	font-size: 18px;
	color: #666;
	line-height: 1.5em;
	margin-top: 10px;
}
</style>