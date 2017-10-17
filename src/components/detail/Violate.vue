<template>
<div>
	<div class="img_question w"><img src="/static/img/banner_question.jpg" alt=""></div>
	<div class="violate w clear">
		<div class="question_nav left">
			<div class="tit">帮助支持</div>
			<div class="comtent"><router-link to="/Question">疑难解答</router-link><span></span></div>
			<div class="comtent"><router-link to="/Violate">禁运物品</router-link></div>
		</div>
		<div class="right">
			<div class="title">国际快递违禁物品范围</div>
			<ul class="clear">
				<li>
					<div>
						<img src="/static/img/vj1.jpg" alt="酒">
						<span>1</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj2.jpg" alt="发胶摩丝">
						<span>2</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj3.jpg" alt="火柴">
						<span>3</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj4.jpg" alt="酒精">
						<span>4</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj5.jpg" alt="煤油">
						<span>5</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj6.jpg" alt="灌装气体">
						<span>6</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj7.jpg" alt="油漆">
						<span>7</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj8.jpg" alt="汽油">
						<span>8</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj9.jpg" alt="鞭炮">
						<span>9</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj10.jpg" alt="枪弹">
						<span>10</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj11.jpg" alt="剧毒">
						<span>11</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj12.jpg" alt="易燃品">
						<span>12</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj13.jpg" alt="化学原料">
						<span>13</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj14.jpg" alt="电池">
						<span>14</span>
					</div>
				</li>
				<li>
					<div>
						<img src="/static/img/vj15.jpg" alt="磁铁">
						<span>15</span>
					</div>
				</li>
			</ul>
			<dl>
				<dt>一、上图中1至15号均属航空禁运物品；14、15号可以通过网络车运输。</dt>
				<dd></dd>
				<dt>二、其它禁止和限制寄递的物品：</dt>
				<dd>1、爆炸性、易燃性、腐蚀性、毒性、强酸碱性和放射性的各种危险物品，如雷管、火药、爆竹、汽油、酒精、煤油、桐油、生漆、火柴、农药等所有列入化学工业出版社出版的“化学危险品实用手册”中的化工产品；</dd>
				<dd>2、麻醉药物和精神物品，如鸦片、吗啡、可卡因（高根）等；国家法令禁止流通或寄递的物品，如军火武器、本国或外国货币等；</dd>
				<dd>3、容易腐烂的物品、各种活的动物（如鲜鱼、鲜肉等）；</dd>
				<dd>4、妨碍公共卫生的物品，如尸骨（包括已焚化的尸骨）、未经硝制的兽皮、未经药制的兽骨等；</dd>
				<dd>5、反动报刊、书籍、窗口或者淫秽物品等；</dd>
				<dd>6、如你交寄的化工产品未列入“化学危险品实用手册”中的，你必须提供地市面上一级化工产品鉴定部门出具的鉴定书，证实相关物品属非危险化工产品方可交寄，相关鉴定部门必须对鉴定结果负责。</dd>
				<dt>三、国家禁止进、出口（境）物品：</dt>
				<dd>1、禁止进境的物品：<br/>
				（1）各种武器、弹药、仿真武器及爆炸物品；<br/>
				（2）仿造的货币及仿造的有价证券等；<br/>
				（4）对中国政治经济文化道德有害的印刷品、胶卷、照片、唱片、影片、录音带、激光视盘、计算机存储介质及其他物品；<br/>
				（4）各种烈性毒药；<br/>
				（5）鸦片、吗啡、海洛英、大麻及其它能使人成瘾的麻醉品、精神药物；<br/>
				（6）带有危险性病菌、害虫及其它有害生物的动物、植物及其它产品；<br/>
				（7）有碍人畜健康的来自疫区的及其它能传播疾病的食品、药品或其它物品。<br/>
				</dd>
				<dd>2、禁止出境的所有物品：<br/>
				（1）列入禁止进境范围的所有物品；<br/>
				（2）内容涉及国家秘密的手稿、印刷品、胶卷、照片、唱片、影片、录音带、激光视盘、计算机存储介质及其他物品；<br/>
				（3）珍贵文物及其它禁止出境的文物；<br/>
				（4）濒临的和珍贵的动物、植物（均含标本）及其种子和繁殖材料。<br/>
				</dd>
			</dl>
		</div>
	</div>	
</div>
</template>
<script>
export default {
	name: 'Violate',
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
<style>
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
	width: 180px;
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
}
/* 右侧正文部分 */
.violate>.right{
	width: 988px;
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

}
</style>