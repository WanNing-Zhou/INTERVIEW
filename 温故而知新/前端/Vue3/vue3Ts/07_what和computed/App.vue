<template>
  <h2>计算属性与监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏:<input type="text" placeholder="请输入姓氏" v-model="user.firstName">
    <br>
    姓名:<input type="text" placeholder="请输入名字" v-model="user.lastName">
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName1">
    <br>
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName2">
    <br>
    姓名:<input type="text" placeholder="显示姓名" v-model="fullName3">

  </fieldset>
  <fieldset>
    <legend></legend>
  </fieldset>
  <button @click="update">更新数据</button>
</template>
<script setup lang="ts">
import {defineComponent, ref, reactive, computed, watch, watchEffect} from "vue";
  const user = reactive({
    //姓氏
    firstName:'东方',
    //名字
    lastName:'不败'
  })
  //vue3中的计算属性
//如果计算属性的函数中,只传入一个回调函数,表示的是get
  const fullName1 = computed(()=>{
    return user.firstName + '_' + user.lastName
  })

  const fullName2 = computed({
    get(){
      return user.firstName + '_' + user.lastName;
    },
    set(val:string){
      // console.log('====',val)
      const names = val.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    }
  })

//第三个名字:
let fullName3 = ref('')

// 监视--监视指定的数据
watch(user,({firstName, lastName})=>{
  fullName3.value = firstName + '_' + lastName;
},{immediate:true,deep:true})
// immediate 默认会执行一次watch
// deep深度监视



// //监视,不需要配置immediate,本身默认就会进行监视(默认执行一次)
// watchEffect(()=>{
//   fullName3.value = user.firstName + user.lastName
// })

// 监视fullName3属性据, 改变firstName 和 lastName

watchEffect(()=>{
  const names = fullName3.value.split('_')
  user.firstName = names[0]
  user.lastName = names[1]
})

// watch -- 可以监视多个数据的
// watch([user.firstName,user.lastName,fullName3],()=>{
//
//   //修改user.firstName 和 user.LastName的时候没有执行,
//   // fullName3是响应式的
//   // user,fristName 和user.lastName 不是响应式的
//   console.log('=====1')
// })

// 当我们使用watch监视非响应式数据的时候,代码需要好修改一下
watch([()=>user.firstName,()=>user.lastName,],()=>{

  console.log('=====1')
})


</script>



<style scoped lang=less>

</style>


