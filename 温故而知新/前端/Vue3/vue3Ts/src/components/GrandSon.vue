<template>
  <h3 :style="{color}">grandSon孙子组件</h3>
</template>
<script lang="ts">
import {defineComponent, inject} from "vue";

export default defineComponent({
  name:'GrandSon',
  setup(){
    //注入数据
    const color = inject('color')

    return {
      color
    }
  }
})

</script>
<style scoped lang=less>

</style>