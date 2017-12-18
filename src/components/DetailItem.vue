<template>
  <div class="detailitem">
    <el-row :gutter="5">
      <el-col :xs="4" :sm="4" :md="4" :lg="3">
        {{title}}
      </el-col>
      <el-col :xs="18" :sm="18" :md="18" :lg="18">
        {{value}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
	name: 'country',
  computed: {
  },
	props: {
		title: {
			type: String,
			default: '空'
		},
    value: {
      type: String
    }
	},
	created(){
	},
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.detailitem {
  color: #666;
  padding: 6px;
}
</style>