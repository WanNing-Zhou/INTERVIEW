

<!--选项式 API 是在组合式 API 的基础上实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。-->
<template>
  <!--  Vue2中的html模板中必须要有一对跟标签,Vue3组件的html模板中可以没有根标签-->
  <div>这里是一段测试代码</div>
  <h1>{{state.number}}</h1>
  <button @click="updateCount">更新数据</button>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'

//响应式状态
let state = reactive({number:0})

//用来修改状态,触发更新的函数
function updateCount(){
  state.number++;
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>


