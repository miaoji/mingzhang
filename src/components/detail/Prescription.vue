<template>
<div>
	<div class="img_prescription w"><img src="/static/img/banner_prescription.jpg" alt=""></div>
	<div class="prescription w">
		<div class="header">秉承"快捷、高效、安全"的现代化物流服务理念，为客户提供：专业化、高效能、一步到位的丰富完善的集运服务</div>
		<table border="1" cellspacing="0">
			<tr><td colspan="4" class="title">国际快递服务中心参考时效</td></tr>
			<tr>
				<th>区域</th>
				<th>分区</th>
				<th>国家/地区</th>
				<th>时效(工作日)(出仓开始计算)</th>
			</tr>
			<tr>
				<td rowspan="6">亚洲</td>
				<td>1</td>
				<td>澳门</td>
				<td>2-3</td>
			</tr>
			<tr>
				<td>2</td>
				<td>韩国等</td>
				<td>2-3</td>
			</tr>
			<tr>
				<td>3</td>
				<td>日本</td>
				<td>2-3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>缅甸等</td>
				<td>2-4</td>
			</tr>
			<tr>
				<td>5</td>
				<td>印度等</td>
				<td>4-5</td>
			</tr>
			<tr>
				<td>6</td>
				<td>巴基斯坦</td>
				<td>4-5</td>
			</tr>
			<tr>
				<td rowspan="5">美洲</td>
				<td>7</td>
				<td>美国</td>
				<td>2-3</td>
			</tr>
			<tr>
				<td>8</td>
				<td>加拿大</td>
				<td>3-4</td>
			</tr>
			<tr>
				<td>9</td>
				<td>墨西哥</td>
				<td>3-4</td>
			</tr>
			<tr>
				<td>10</td>
				<td>巴拿马等</td>
				<td>5-6</td>
			</tr>
			<tr>
				<td>11</td>
				<td>智利等</td>
				<td>5-6</td>
			</tr>
			<tr>
				<td rowspan="3">欧洲</td>
				<td>12</td>
				<td>德国等</td>
				<td>3-4</td>
			</tr>
			<tr>
				<td>13</td>
				<td>冰岛等</td>
				<td>5-6</td>
			</tr>
			<tr>
				<td>14</td>
				<td>俄罗斯</td>
				<td>5-7</td>
			</tr>
			<tr>
				<td>中东</td>
				<td>15</td>
				<td>阿联酋等</td>
				<td>4-5</td>
			</tr>
			<tr>
				<td rowspan="2">非洲</td>
				<td>16</td>
				<td>埃及等</td>
				<td>4-5</td>
			</tr>
			<tr>
				<td>17</td>
				<td>安哥拉等</td>
				<td>5-6</td>
			</tr>
			<tr>
				<td>大洋洲</td>
				<td>18</td>
				<td>新西兰等</td>
				<td>3-4</td>
			</tr>
		</table>
	</div>
</div>
</template>
<script>
export default {
	name: 'Prescription',
	created(){
		window.document.title = '参考时效-上海明彰网络科技有限公司'
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

/* 配送时效 */
.img_prescription{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_prescription>img{
	height: inherit;
	width: inherit;
}
.prescription{
	// margin-top: 30px;
	background-color: #fff;
	padding:40px;
	box-sizing: border-box;
	color: #555;
}
.prescription>.header{
	font-size: 24px;
	line-height: 2em;
}
.prescription>table{
	width: 800px;
	border-color: #bbb;
	margin: 30px auto;
}
.prescription>table tr td.title{
	text-align: center;
	font-size: 30px;
	line-height: 2em;
	/* border: 1px #000 solid; */
}
.prescription>table tr td{
	text-align: center;
	height: 30px;
}
</style>