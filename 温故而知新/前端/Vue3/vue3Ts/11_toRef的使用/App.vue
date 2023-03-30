<template>
  <h2>toRefs的使用</h2>
  <h3>name:{{name}}</h3>
  <h3>age:{{age}}</h3>
</template>
<script lang="ts">

import {defineComponent, reactive,toRefs} from "vue";

export default defineComponent({
  name:'App',
  setup(){
    const state = reactive({
      name:'自来也',
      age:47
    })

    //toRefs可以把一个响应式对象转换成为普通对象
    // 该普通对象的每个属性都是ref
    // const state2 = toRefs(state)
    const {name,age} = toRefs(state)

    setInterval(()=>{
      // state2.age.value ++
      age.value++
      console.log('玛瑞奥')
    },2000)
    return{
      // ...state2 //不是响应式的数据了 ---> {name:'自来也',age:'47'}
      name,
      age
    }


  }
})

</script>
