import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
import Country from '@/parts/Country'
import SelectCity from '@/parts/SelectCity'
import SelectPackage from '@/parts/SelectPackage'
export default {
	name: 'orderSend',
	components:{
		Headers,
		Footers,
		Country,
		SelectCity,
		SelectPackage
	},
	data(){
		return {
			show: true,
			link: '/OrderSend',
			dialogVisible: false,
			form: {},
			showSendCitySelect: false,
			showPackageList: false
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
	},
	methods:{
		onSubmit(){
			console.log('data', this.form)
		},
		onCancel(){
			this.form={}
		},
		menu(){
			window.scrollTo(0,0)
		},
		coutrySendChange(data) {
			// 获取寄件人国家信息
			this.form.senderCountry=data
			if (data === '中国') {
				this.showSendCitySelect = true
			}else{
				this.showSendCitySelect = false
			}
		},
		selectCityChange(data) {
			// 获取寄件人地区三联信息
			if (data && data.length === 3) {
				this.form.province=data[0].split('/')[1]
				this.form.city=data[1].split('/')[1]
				this.form.county=data[2].split('/')[1]
				console.log('from', this.form)
			}
		},
		coutryReceiveChange(data) {
			this.form.receiverCountry=data
		}
	}
}