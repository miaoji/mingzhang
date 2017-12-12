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
import Headers from '@/components/cn/Headers'
import Footers from '@/components/cn/Footers'

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
      const hash = e.split('/')
      if (hash && hash.length === 3) {
        this.location = '/en/' + hash[2]
      }else{
        this.location = '/en/'
      }
    }
  }
}
</script>