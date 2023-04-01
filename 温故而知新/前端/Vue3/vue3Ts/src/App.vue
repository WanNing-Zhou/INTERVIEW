<template>
  <h2>App父级组件Suspense</h2>
  <Suspense>
    <template #default>
<!--异步组件  -->
      <AsyncCom></AsyncCom>
    </template>
    <template v-slot:fallback>
<!--   loading的内容   -->
    </template>

  </Suspense>

</template>
<script lang="ts">

import {defineComponent,defineAsyncComponent} from "vue";
// const AsyncCom = ()=>import('./components/AsyncCom')

//Vue3中动态引入组件的写法
const  AsyncCom = defineAsyncComponent(()=>import('./components/ModalButton'))
// import AsyncCom from "./components/AsyncCom.vue";
export default defineComponent({
  name:'App',
  components:{
    AsyncCom
  }
  //vu2中动态引入组件的写法
})
</script>
<style scoped>
</style>