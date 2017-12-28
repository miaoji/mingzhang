<template>
  <div class="directmail">
    <div class="directmail-container">
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="10"
          layout="prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </div>
      <el-table
        :data="listData"
        stripe
        border
        style="width: 100%"
        v-loading.body="loading"
      >
        <el-table-column
          :label="$t('message.directmail.t1')"
          fixed="left"
          width="160"
          prop="ORDER_NO">
        </el-table-column>
        <el-table-column
          :label="$t('message.directmail.t2')"
          prop="SENDER_NAME">
        </el-table-column>
        <el-table-column
          :label="$t('message.directmail.t3')"
          prop="RECEIVER_NAME">
        </el-table-column>
        <el-table-column
          :label="$t('message.directmail.t4')"
          prop="TOTAL_FEE"
          :formatter="handleMoney">
        </el-table-column>
        <el-table-column
          :label="$t('message.directmail.t5')">
          <template slot-scope="status">
            <span>{{status.row.STATUS | orderstatus}}</span>
            <div>
              <el-button @click="handleDetail(status.row.ORDER_NO)" type="text" size="small">{{$t('message.directmail.t6')}}</el-button>
            </div>
            <div v-show="status.row.STATUS !== 1 && status.row.STATUS !== 0">
              <el-button @click="checkTrace(status.row.ORDER_NO)" type="text" size="small">{{$t('message.directmail.t7')}}</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('message.directmail.t8')"
          prop="CREATE_TIME"
          width="170"
          sortable
          :formatter="handleTime">
        </el-table-column>
        <el-table-column
          fixed="right"
          :label="$t('message.directmail.t9')"
          width="100">
          <template slot-scope="tools">
            <el-button v-show="tools.row.STATUS === 1" type="success" size="small" @click.native="handelPay(tools.row)">
              {{$t('message.directmail.t10')}}
            </el-button>
            <el-button type="text" size="small"
                       v-show="tools.row.STATUS === 0 || tools.row.STATUS === 1 || tools.row.STATUS === 4"
                       @click="handleDelete(tools.row.ID)">
              {{$t('message.directmail.t11')}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <el-dialog
      :title="$t('message.directmail.t12')"
      width="250px"
      :visible.sync="payDialogVisible"
      :close-on-press-escape="false"
      :close-on-click-modal="false">
      <div slot="title">
        <img src="../../../assets/images/icon16_wx_logo.png" alt="wxlogo" style="vertical-align: middle;">
        <span>
      	  {{$t('message.directmail.t12')}}
      	</span>
      </div>
      <div
        element-loading-background="rgba(0, 0, 0, 0.8)"
        v-loading="qrLoading">
        <div v-html="payImg"></div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import {remove} from '@/services/directMail'
  import {format} from '@/utils/time'
  import {orderstatus} from '@/filters'
  // import {storage} from '@/utils'

  export default {
    name: 'directmail',
    data () {
      return {
        currentPage: 1,
        loading: true,
        payDialogVisible: false,
        payImg: '',
        qrLoading: false,
        href: window.sessionStorage.locale || '/cn/'
      }
    },
    created () {
      const page = this.$route.query['page'] || 1
      this.currentPage = Number(page)
      this.refreshTable({page})
    },
    computed: {
      ...mapGetters({
        'list': 'getDirectmailList'
      }),
      total () {
        return this.list['total']
      },
      listData () {
        return this.list['data']
      }
    },
    methods: {
      ...mapActions([
        'setDirectmailList'
      ]),
      async refreshTable () {
        try {
          this.loading = true
          const page = this.currentPage
          const res = await this.setDirectmailList({page})
          if (res.type !== 'success') {
            this.$message.error(res.msg)
          }
        } catch (e) {
          console.error(e)
          this.$message.error(e.message)
        } finally {
          this.loading = false
        }
      },
      handleDetail (orderNo) {
        this.$router.push({
          path: this.href + 'orderdetail',
          query: {
            orderNo
          }
        })
      },
      checkTrace (no) {
        this.$router.push({
          path: this.href + 'getorderinfo',
          query: {
            order: no
          }
        })
      },
      handleSizeChange (val) {
        console.info(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.currentPage = val
        this.setDirectmailList({page: val})
        this.$router.push({
          path: this.href + 'user/directmail',
          query: {
            page: val
          }
        })
      },
      handleStatus (val) {
        const status = Number(val.STATUS)
        return orderstatus(status)
      },
      handleMoney (val) {
        let money = val.TOTAL_FEE
        money = (Number(money) / 100).toFixed(2)
        return `￥${money}`
      },
      handleTime (val) {
        const date = new Date(val.CREATE_TIME)
        return format('yyyy-MM-dd hh:mm:ss', date)
      },
      async handelPay (val) {
        try {
          this.$router.push(this.href + 'cashier?order=' + val.ORDER_NO)
          return
        } catch (e) {
          console.error(e)
        } finally {
          this.qrLoading = false
        }
      },
      async handleDelete (ids) {
        this.$confirm(this.$t('message.directmail.t15'), this.$t('message.directmail.t16'), {
          confirmButtonText: this.$t('message.directmail.t17'),
          cancelButtonText: this.$t('message.directmail.t18'),
          type: 'warning'
        }).then(async () => {
          try {
            this.loading = true
            const res = await remove({ids})
            if (res.code === 200) {
              return this.$message({
                message: this.$t('message.directmail.t19'),
                type: 'success'
              })
            }
            const errorMsg = res.msg || this.$t('message.directmail.t20')
            return this.$message.error(errorMsg)
          } catch (e) {
            console.error(e)
            this.$message.error(e.message)
          } finally {
            this.refreshTable()
          }
        }).catch(() => {
        })
      }
    }
  }
</script>
<style scoped lang="less">
  .directmail {
    .pagination {
      padding: 1rem 0;
    }
  }
</style>
