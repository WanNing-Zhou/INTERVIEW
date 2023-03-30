<template>
  <h2>自定义的hook函数操作</h2>
  <h2>x:{{x}},y:{{y}}</h2>
</template>
<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import useMountPosition from "./hooks/useMountPosition";
export default defineComponent({
  name:'App',
  setup(){
    const {x,y} = useMountPosition()

    //页面已经加载完毕了,在进行点击的操作
  }
})

</script>
