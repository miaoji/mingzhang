<template>
  <div class="table_package">
    <el-table
      :data="tableDate"
      style="width: 100%"
      >
      <el-table-column
        prop="name"
        label="中文品名"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="unitPrice"
        label="单价/元"
        align="center"
        width="180"
        >
      </el-table-column>
      <el-table-column
        prop="size"
        label="数量"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价值/元"
        align="center"
        >
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        >
        <template slot-scope="scope">
          <el-button @click="updatePackageInfo(scope.row, scope.$index)" type="text" size="mini">修改</el-button>
          <el-button @click="delPackageInfo(scope.$index)" style="color:red" type="text" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog calss="dialog" :title="modalTitle" width="600px" :visible.sync="dialogFormVisible">
      <el-form :model="item" label-width="20px">
        <el-form-item label="中文品名" :label-width="formLabelWidth">
          <el-input v-model="item.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="产品单价" :label-width="formLabelWidth">
          <el-input v-model="item.unitPrice" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="产品数量" :label-width="formLabelWidth">
          <el-input v-model="item.size" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <div class="add_package">
      <el-button type="info" plain @click="addPackageInfo">添加包裹</el-button>
    </div>
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      updatePackageInfo(data, id){
        console.log('key',id)
        console.log('data',data)
        this.modalTitle = '修改报关信息'
        this.item = {...data, id}
        this.dialogFormVisible = true
      },
      addPackageInfo(){
        this.modalTitle = '创建报关信息'
        this.item={}
        this.dialogFormVisible = true
      },
      delPackageInfo(id){
        this.tableDate.splice(id, 1)
      },
      confirm(){
        const item = this.item
        if (this.test(item)===false) {
          return
        }
        if (item.id || item.id === 0) {
          const id = item.id
          console.log('id', id)
          this.tableDate.splice(id,1,{...item, price: Number(item.size) * Number(item.unitPrice)})
        }else{
          this.tableDate.push({...item,price: Number(item.size) * Number(item.unitPrice)})
        }
          this.dialogFormVisible = false
      },
      test(item){
        // 判空
        if (item.name === undefined || item.name === '') {
          this.$message({
            message: '您输入的中文品名不能为空',
            type: 'warning'
          })
          return false
        }
        // 判空
        if (item.unitPrice === undefined || item.unitPrice === '') {
          this.$message({
            message: '您输入的单价不能为空',
            type: 'warning'
          })
          return false
        }
        if (!Number(item.unitPrice)) {
          this.$message({
            message: '您输入的单价不是一个有效的数字',
            type: 'warning'
          })
          return false
        }
        // 判空
        if (item.size === undefined || item.size === '') {
          this.$message({
            message: '您输入的数量不能为空',
            type: 'warning'
          })
          return false
        }
        if (!Number(item.size)) {
          this.$message({
            message: '您输入的数量不是一个数字',
            type: 'warning'
          })
          return false
        }
      }
    },
    created(){
    },
    data() {
      return {
        modalTitle: '创建报关信息',
        tableDate: [],
        dialogFormVisible: false,
        form: {},
        formLabelWidth: '120px',
        item: {}

      }
    }
  }
</script>
<style lang="less">
.table_package {
  .add_package {
    // border-bottom: 1px #ddd solid;
    text-align: center;
    padding: 10px 0px;
  }
  .el-dialog__body {
    padding:30px 50px 20px;
    border-top: 1px #ddd solid;
    border-bottom: 1px #ddd solid;
    .el-form-item__label {
      width: 80px!important;
    }
    .el-form-item__content {
      margin-left: 80px!important;
    }
  }
  .el-dialog__header {
    padding:15px 15px 10px 25px!important;
  }
}

</style>