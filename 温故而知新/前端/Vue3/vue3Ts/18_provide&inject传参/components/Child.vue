<template>
  <div>这是一个字组件</div>
  <div>{{msg}}</div>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from "vue";

export default defineComponent({
  name:'Child',
  setup(){
    console.log('3.0中的setup')
    const msg = ref(33);
    const update = ()=>{
      msg.value ++;
    }

    onBeforeMount(()=>{
      console.log('3.0中的onBeforeMount')
    })

    onMounted(()=>{
      console.log('3.0中的Mounted')
    })

    onBeforeUpdate(()=>{
      console.log('3.0中的onBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('3.0中的onUpdated')
    })

    onBeforeUnmount(()=>{
      console.log('3.0中的onBeforeUnmount')
    })

    onUnmounted(()=>{
      console.log('3.0中的onUnmount')
    })

    return {
      msg,
      update
    }
  },
  //vue2.x中的生命中周期钩子
  beforeCreate() {
    console.log('2.x的beforeCreate')
  },
  created() {
    console.log('2.x的created')
  },
  beforeMount() {
    console.log('2.x的beforeMount')
  },
  mounted() {
    console.log('2.x的mounted')
  },
  beforeUpdate() {
    console.log('2.x的beforeUpdate')
  },
  updated() {
    console.log('2.x的update')
  },

  //vue2.x中的beforeDestory和destoryed这两个生命周期回调已经在
  //vue3中改名了,成为了beforeUnmount和umounted

  beforeUnmount() {
    console.log('2.x的beforeUnmount')
  },
  unmounted() {
    console.log('2.x的unmount')
  }


})
</script>