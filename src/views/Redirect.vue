<template>
  <div class="redirect">
    <div class="redirect-container">
      跳转中
    </div>
  </div>
</template>
<script>
  export default {
    name: 'redirect',
    data () {
      return {}
    },
    created () {
      window.close()
    },
    methods: {}
  }
</script>
<style scoped lang="less">
</style>
