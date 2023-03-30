<template>
  <h2>shallowRef和shallowReactive的使用 </h2>
  <div>{{m1}}</div>
  <div>{{m2}}</div>
  <div>{{m3}}</div>
  <div>{{m4}}</div>
  <hr>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import {defineComponent, reactive, shallowReactive, shallowRef,ref} from "vue";

export default defineComponent({
  name:'App',
  setup(){
    //深度劫持(深监视) --- 深度响应式
    const m1 = reactive({
      name:'名人',
      age:20,
      car:{
        name:'本',
        color:'red'
      }
    })
    // 浅劫持(浅监视) --- 浅响应式
    const m2 = shallowReactive({
      name:'名人',
      age:20,
      car:{
        name:'本',
        color:'red'
      }
    })
    //深劫持 --- 做了reactive的处理
    const m3 = ref({      name:'名人',
      age:20,
      car:{
        name:'本',
        color:'red'
      }})
    //浅劫持 --- 没有做代理
    const m4 = shallowRef({      name:'名人',
      age:20,
      car:{
        name:'本',
        color:'red'
      }})
    const update = ()=>{
      // 更改m1的数据
      // m1.name += '+++'
      // m1.car.name += '=='
      // 更改m2的数据
      // m2.name += '+++'
      // m2.car.name += '=='
      // 更改m3的数据
      // m3.value.car.name += '--'
      // 更改m4的数据
      m4.value.car.name += '***'
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})



</script>