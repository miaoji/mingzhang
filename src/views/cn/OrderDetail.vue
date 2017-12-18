<template>
	<div class="orderdetail" v-loading.fullscreen.lock="fullscreenLoading">
		<div class="orderdetail-item normal" v-show="hiddenStatus === 1">
			<div class="title">
			  订单详情
		  </div>
			<div class="detail">
				<detail-item title="订单编号:" :value="detailData['orderNo']"></detail-item>
				<detail-item title="订单总价:" :value="totalFee"></detail-item>
				<detail-item title="订单状态:" :value="statusList['short']"></detail-item>
				<detail-item title="下单时间:" :value="createdTime"></detail-item>
				<detail-item title="寄件地址:" :value="senderAddress"></detail-item>
				<detail-item title="收件地址:" :value="receiverAddress"></detail-item>
			</div>
			<div class="status">
				<div class="status-content">
					<i class="el-icon-info status-icon"></i>订单状态: {{statusList['content']}}
				</div>
			  <div class="status-tools">
			  	您可以
			  	<el-button type="success" size="small" v-show="detailData['status'] === 1">立即付款</el-button>
          <el-button type="text" size="small" @click="handleDelete" v-show="detailData['status'] === 1">取消订单</el-button>
			  	<el-button type="success" size="small" @click="handleRoute" v-show="canCheckRoute">查看物流</el-button>
			  </div>
			</div>
		</div>
		<div class="error" v-show="hiddenStatus === 0">
			<div>
				<el-alert
			    title="该订单已被删除，无法查看"
			    type="error"
			    show-icon>
			  </el-alert>
			</div>
		</div>
	</div>
</template>
<script>
import compact from 'lodash/compact'
import DetailItem from '@/components/DetailItem.vue'
import { show, remove } from '@/services/directMail'
import { format } from '@/utils/time'
import { orderstatus, statuscontent } from '@/filters'

export default {
	name: 'orderdetail',
	components: {
		DetailItem
	},
	data(){
		return {
			orderId: 0,
			detailData: {},
			fullscreenLoading: false
		}
	},
	created () {
		const {id} = this.$route.query
		this.orderId = id
		this.initDetail()
	},
	computed: {
		hiddenStatus () {
			const hiddenStatus = this.detailData['hiddenStatus']
			return hiddenStatus
		},
		totalFee () {
			let money = this.detailData['totalFee']
			money = (Number(money)/100).toFixed(2)
			return `￥${money}`
		},
		createdTime () {
			let time = this.detailData['createTime']
			time = new Date(time)
			return format('yyyy-MM-dd hh:mm:ss', time)
		},
		senderAddress () {
			const detail = this.detailData
			let sendList = [
			  detail['senderName'],
			  detail['senderMobile'],
			  detail['senderCountry'],
			  detail['senderProv'],
			  detail['senderCity'],
			  detail['senderCounty'],
			  detail['senderAddress'],
			  detail['senderPostcode'],
			]
			sendList = compact(sendList)
			return sendList.join(',')
		},
		receiverAddress () {
			const detail = this.detailData
			let receiverList = [
			  detail['receiverName'],
			  detail['receiverMobile'],
			  detail['receiverCountry'],
			  detail['receiverProv'],
			  detail['receiverCity'],
			  detail['receiverCounty'],
			  detail['receiverAddress'],
			  detail['receiverPostcode'],
			]
			receiverList = compact(receiverList)
			return receiverList.join(',')
		},
		statusList () {
			const status = this.detailData.status
			return {
				short: orderstatus(status),
				content: statuscontent(status)
			}
		},
		canCheckRoute () {
			const status = this.detailData.status
			return (status !== 0&&status !== 1&&status !== 2)
		}
	},
	methods:{
		async initDetail () {
			try {
				this.fullscreenLoading = true
				const res = await show({
					id: this.orderId
				})
				if (res.code === 200) {
					this.detailData = res.obj
				} else {
				  this.$message.error(res.msg)
				}
				return
			} catch (e) {
				console.error(e)
				this.$message.error(e.message)
			} finally {
				this.fullscreenLoading = false
			}
		},
    async handleDelete () {
    	this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
	    	try {
	    		this.fullscreenLoading = true
	    		const ids = this.orderId
	    	  const res = await remove({ids})
	    	  if (res.code === 200) {
	    	  	return this.$message({
	    	  	  message: '删除成功',
	    	  	  type: 'success'
	    	  	})
	    	  }
	    	  const errorMsg = res.msg || '删除失败'
	    	  return this.$message.error(errorMsg)
	    	} catch (e) {
	    		console.error(e)
	    		this.$message.error(e.message)
	    	} finally {
	    		this.initDetail()
	    	}
      }).catch(() => {
      })
    },
    handleRoute () {
    	
    }
	}
}
</script>
<style scoped lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/helpers.less';

.orderdetail {
	.normal-container;
	&-item {
		background: @grey-bg;
		padding: 1rem 1rem;
		margin-bottom: 1rem;
		.title {
			color: #333;
			font-size: 18px;
			padding-bottom: 1rem;
			border-bottom: 1px solid #333;
		}
		.detail {
			border-bottom: 1px solid #333;
		}
		.status {
			padding: 10px 0;
			&-content {
				padding-bottom: 20px;
				font-size: 16px;
				font-weight: 600;
				.status-icon {
					padding-right: 5px;
				}
			}
			&-tools {

			}
		}
	}
}
</style>