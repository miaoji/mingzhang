<template>
  <div>
    <headers/>
    <transition name="el-fade-in">
      <router-view></router-view>
    </transition>
    <footers/>
  </div>
</template>

<script>
  import Headers from '@/components/cn/Headers'
  import Footers from '@/components/cn/Footers'

  export default {
    name: 'container',
    components: {
      Headers,
      Footers
    }
  }
</script>
