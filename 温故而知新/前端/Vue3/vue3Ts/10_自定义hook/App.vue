<template>
  <h2>自定义的hook函数操作</h2>
  <h2>x:{{x}},y:{{y}}</h2>
  <h3 v-if="loading">证字啊加载中</h3>
  <h3 v-else-if="errorMsg">错误信息{{errorMsg}}</h3>
  <h3 v-else>
    <li>{{data.id}}</li>
    <li>{{data.address}}</li>
    <li>{{data.distance}}</li>
  </h3>
  <hr>
<!-- 数组数据-->
  <ul v-for="item in data" :key="item.name">
    <li>name:{{item.name}}</li>
    <li>age:{{item.age}}</li>
  </ul>
</template>
<script lang="ts">
import {defineComponent, watch,onBeforeUnmount, onMounted, ref} from "vue";
import useMountPosition from "./hooks/useMountPosition";
import useRequest from "./hooks/useRequest";

//定义接口,约束对象的类型

interface IAddressData{
  id:number;
  address:string;
  distance:string;
}

interface IProducts{
  name:string;
  age:string
}


export default defineComponent({
  name:'App',
  setup(){
    const {x,y} = useMountPosition()
    // const {loading,data,errorMsg} = useRequest<IAddressData>('/data/address.json') //获取对象数据
    const {loading,data,errorMsg} = useRequest<IProducts[]>('/data/products.json') //获取地址数据
    //页面已经加载完毕了,在进行点击的操作
    watch(data,()=>{
      if (data.value){
        console.log(data.value.length)
      }
    })
    return {
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})

</script>
