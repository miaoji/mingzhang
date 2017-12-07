<template>
  <div class="completion-input-box">
    <input 
    type="text" 
    ref="input"
    @input="$emit('input', $event.target.value)"
    >

  </div>
</template>
<script>
export default {
  name: 'inputlsit',
  props: ['text', 'value'],
  methods: {
    aaa (){
      alert(this.value)
    }
  }

}
</script>