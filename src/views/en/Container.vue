<template>
  <div>
    <headers :link="location"/>
    <transition name="el-fade-in">
      <router-view @location='listen'></router-view>
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
  },
  data(){
    return {
      location:''
    }
  },
  methods: {
    listen(e){
      console.log(e)
      const hash = e.split('/')
      if (hash && hash.length === 3) {
        this.location = '/cn/' + hash[2]
      }else{
        this.location = '/cn/'
      }
    }
  }
}
</script>