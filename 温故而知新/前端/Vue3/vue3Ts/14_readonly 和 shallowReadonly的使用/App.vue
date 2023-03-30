<template>

  <h2>readonly 和 shallowReadonly</h2>
  <h3>state:{{state2}}</h3>
  <hr>
  <button @click="update">更新数据</button>

</template>
<script lang="ts">
import {defineComponent, reactive,readonly,shallowReadonly} from "vue";

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

    //只读的数据 -- 深度的只读
    // const state2 = readonly(state)

    //只读的只读  -- 浅只读
    const state2 = shallowReadonly(state)
    const update = ()=>{
        // state2.name = 'kakaxi';

        state2.car.name = 'kakaxi';
    }
    return {
      state2,
      update
    }
  }
})


</script>