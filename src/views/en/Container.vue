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
import Headers from '@/components/en/Headers'
import Footers from '@/components/en/Footers'

export default {
  name: 'container',
  components: {
    Headers,
    Footers
  }
}
</script>