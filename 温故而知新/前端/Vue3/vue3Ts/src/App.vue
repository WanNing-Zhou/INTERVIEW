<template>
  <h2>App父组件</h2>
  <h2>mgs:{{msg}}</h2>
  <button @click="msg+='--'">更新数据</button>
  <hr>
  <Child :msg="msg"/>
</template>
<script setup lang="ts">
import {defineComponent,ref} from "vue";
import Child from './components/Child.vue'

const msg = ref('what are you no sha lei')



</script>
<style scoped lang=less>

</style>


