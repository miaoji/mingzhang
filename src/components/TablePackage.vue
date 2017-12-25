<template>
  <div class="table_package">
    <el-table
      :data="tableDate"
      style="width: 100%"
    >
      <el-table-column
        prop="nameCn"
        :label="info.name"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="unitPrice"
        :label="info.price"
        align="center"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="quantity"
        :label="info.size"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="worth"
        :label="info.worth"
        align="center"
      >
      </el-table-column>
      <el-table-column
        :label="info.operation"
        align="center"
      >
        <template slot-scope="scope">
          <el-button @click="updatePackageInfo(scope.row, scope.$index)" type="text" size="mini">{{info.update}}</el-button>
          <el-button @click="delPackageInfo(scope.$index)" style="color:red" type="text" size="mini">{{info.delete}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog calss="dialog" :title="modalTitle" width="600px" :visible.sync="dialogFormVisible">
      <el-form :model="item" label-width="20px">
        <el-form-item :label="info.name" :label-width="formLabelWidth">
          <el-input v-model="item.nameCn" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label="info.price" :label-width="formLabelWidth">
          <el-input v-model="item.unitPrice" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label="info.size" :label-width="formLabelWidth">
          <el-input v-model="item.quantity" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">{{info.confirm}}</el-button>
        <el-button @click="dialogFormVisible = false">{{info.cancel}}</el-button>
      </div>
    </el-dialog>
    <div class="add_package">
      <el-button type="info" plain @click="addPackageInfo">{{info.addPackage}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      updatePackageInfo (data, id) {
        this.modalTitle = this.info.updModalTitle
        this.item = {...data, id}
        this.dialogFormVisible = true
      },
      addPackageInfo () {
        this.modalTitle = this.info.addModalTitle
        this.item = {}
        this.dialogFormVisible = true
      },
      delPackageInfo (id) {
        this.tableDate.splice(id, 1)
      },
      confirm () {
        const item = this.item
        if (this.test(item) === false) {
          return
        }
        if (item.id || item.id === 0) {
          const id = item.id
          this.tableDate.splice(id, 1, {...item, worth: Number(item.quantity) * Number(item.unitPrice)})
        } else {
          this.tableDate.push({...item, worth: Number(item.quantity) * Number(item.unitPrice)})
        }
        this.dialogFormVisible = false
      },
      test (item) {
        // 判空
        if (item.nameCn === undefined || item.nameCn === '') {
          this.$message({
            message: this.info.msg1,
            type: 'warning'
          })
          return false
        }
        // 判空
        if (item.unitPrice === undefined || item.unitPrice === '') {
          this.$message({
            message: this.info.msg2,
            type: 'warning'
          })
          return false
        }
        if (!Number(item.unitPrice)) {
          this.$message({
            message: this.info.msg3,
            type: 'warning'
          })
          return false
        }
        // 判空
        if (item.quantity === undefined || item.quantity === '') {
          this.$message({
            message: this.info.msg4,
            type: 'warning'
          })
          return false
        }
        if (!Number(item.quantity)) {
          this.$message({
            message: this.info.msg5,
            type: 'warning'
          })
          return false
        }
      }
    },
    created () {
      if (this.$route.fullPath.split('/en/').length === 2) {
        this.info = {
          addModalTitle: 'Create customs information',
          updModalTitle: 'Update customs information',
          name: 'Name',
          price: 'Unit Price',
          size: 'Number',
          confirm: 'Confirm',
          cancel: 'Cancel',
          worth: 'Worth',
          operation: 'Operation',
          addPackage: 'addPackage',
          update: 'Update',
          delete: 'Delete',
          msg1: 'The name of the Chinese character you entered can not be empty',
          msg2: 'The unit price you entered can not be empty',
          msg3: 'The unit price you enter is not a valid number',
          msg4: 'The number you enter can not be empty',
          msg5: 'The number you enter is not a number'
        }
      }
    },
    data () {
      return {
        tableDate: [],
        dialogFormVisible: false,
        form: {},
        formLabelWidth: '120px',
        item: {},
        info: {
          addModalTitle: '创建报关信息',
          updModalTitle: '修改报关信息',
          modalTitle: '创建报关信息',
          name: '中文品名',
          price: '产品单价',
          size: '产品数量',
          confirm: '确认',
          cancel: '取消',
          worth: '价值',
          operation: '操作',
          addPackage: '添加包裹',
          update: '修改',
          delete: '删除',
          msg1: '您输入的中文品名不能为空',
          msg2: '您输入的单价不能为空',
          msg3: '您输入的单价不是一个有效的数字',
          msg4: '您输入的数量不能为空',
          msg5: '您输入的数量不是一个数字'
        }
      }
    },
    watch: {
      tableDate (val) {
        this.$emit('tablePackage', val)
      }
    }
  }
</script>
<style lang="less">
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .table_package {
    .add_package {
      // border-bottom: 1px #ddd solid;
      text-align: center;
      padding: 10px 0px;
    }
    .el-dialog__body {
      padding: 30px 50px 20px;
      border-top: 1px #ddd solid;
      border-bottom: 1px #ddd solid;
      .el-form-item__label {
        width: 80px !important;
      }
      .el-form-item__content {
        margin-left: 80px !important;
      }
    }
    .el-dialog__header {
      padding: 15px 15px 10px 25px !important;
    }
  }
</style>
