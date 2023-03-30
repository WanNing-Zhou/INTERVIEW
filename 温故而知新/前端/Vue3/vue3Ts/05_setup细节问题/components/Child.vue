<template>
  <div>子组件</div>
  <div>{{msg}}</div>
  <button @click="cal">更新数据</button>
</template>
<script setup>

// 使用attrs
  import {useAttrs} from 'vue'
  const props = defineProps(['msg'])
  const emits = defineEmits(['say'])

  const cal = ()=>{
    emits('say','说藏话')
  }
  //使用attrs
  const attrs = useAttrs()
  //
</script>
<style scoped lang=less>

</style>