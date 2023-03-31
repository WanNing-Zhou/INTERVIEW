<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword">
  <p>{{keyword}}</p>
</template>
<script lang="ts">
import {defineComponent, ref,customRef} from "vue";

//自定义hook防抖函数
/**
 *
 * @param value 传入的数据,将来的数据类型不确定,所以用泛型
 * @param delay 防抖的时间
 */
function useDebouncedRef<T>(value:T,delay=200){
  // 准备一个存储定时器的id变量
  let timeOutId: number

  return customRef((track,trigger)=>{
    return {
      //返回数据的
      get() {
        //告诉Vue追踪数据
        track()
        return value
      },
      //设置数据的
      set(newValue:T){
        //清除定时器
        clearTimeout(timeOutId)

        timeOutId = setTimeout(()=>{
          value = newValue;
          //告诉Vue更新界面
          trigger()
        },delay)


      },
    }
  })
}

export default defineComponent({
  name: 'App',
  setup(){
    const keyword = useDebouncedRef('abc')
    return {
      keyword
    }
  }
})

</script>
<style scoped>
</style>