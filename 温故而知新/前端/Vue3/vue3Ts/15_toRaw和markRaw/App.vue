<template>

  <h2>toRaw 和 markRaw </h2>
  <h3>state:{{state}}</h3>
  <hr>
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>
<script lang="ts">
import {defineComponent,toRaw,markRaw, reactive} from "vue";
import ts from "typescript/lib/tsserverlibrary";
import LogLevel = ts.server.LogLevel;

export default defineComponent({
  name: 'App',
  setup(){
    const state = reactive({
      name:'佐助',
      age:20,
      car:{
        name:'bem',
        color:'red'
      }
    })

    const testToRaw = ()=>{
      //把代理对象变成普通对象
      const user = toRaw(state)
      user.name += '=='
      // state.age = 32
      console.log('nihao')
    }

    const testMarkRaw = ()=>{
      console.log('buhao')
      const likes = ['不想学了', '回家']
      state.likes = markRaw(likes)
      setInterval(
          ()=>{
            state.likes[0] += '1'
            console.log(state.car)
          },1000
      )
    }

    return {
      state,
      testToRaw,
      testMarkRaw
    }
  }
})


</script>