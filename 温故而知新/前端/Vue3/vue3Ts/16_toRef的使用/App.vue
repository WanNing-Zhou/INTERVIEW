<template>
  <h2>toRef的使用及特点</h2>
  <h3>{{age}}</h3>
  <h3>{{money}}</h3>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import {defineComponent,reactive,toRef,ref} from "vue";

export default defineComponent({
  name:'App',
  setup(){
    const state = reactive({
      name:'佐助',
      age: 45,
      money:100
    })

    //把响应式的state对象中的某个属性age变成了ref对象了
    const age = toRef(state,'age')
    // 把响应式对象的某个属性使用ref进行包装
    const money = ref(state.money)

    const update = ()=>{
      //更新数据的
      // state.age += 2;
      // age.value += 2;
      // money.value += 10
    }
    return {
      state,
      age,
      money,
      update
    }

  }
})


</script>
<style scoped>
</style>