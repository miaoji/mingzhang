<template>
  <div class="register">
    <div class="register-container">
      <div class="register-container-right">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名" prop="age">
                <el-input v-model="ruleForm2.age"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2"></el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="邮箱地址" prop="age">
                <el-input v-model="ruleForm2.age"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2"></el-col>
          </el-row>
          <el-row>
          <el-col :span="20">
          <el-form-item label="邮箱验证码" prop="age">
          <el-input v-model="ruleForm2.age"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="2"></el-col>
          </el-row>
          <el-row>
          <el-col :span="12">
          <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="2"></el-col>
          </el-row>
          <el-row>
          <el-col :span="12">
          <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="2"></el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
        age: [{ required: true, validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less">
.register {
  background-color: #fff;
  background-size: auto 1300px;
  background-position: center;
  background-image: url("/static/image/register_bg.jpg");
  &-container {
    margin: auto;
    width: 1300px;
    height: 800px;
    zoom: 1;
    &:after {
      content: "";
      height: 0;
      line-height: 0;
      display: block;
      visibility: hidden;
      clear: both;
    }
    &-right {
      float: left;
      width: 400px;
      height: 100%;
      margin-top: 60px;
      background-color: #fff;
      color: #fff;
      box-sizing: content-box;
      height: 460px;
      padding: 20px;
      // label.el-form-item__label {
      //   color: #fff!important;
      // }
    }
  }
}
</style>