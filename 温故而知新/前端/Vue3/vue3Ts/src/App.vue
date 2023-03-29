

<!--选项式 API 是在组合式 API 的基础上实现的！关于 Vue 的基础概念和知识在它们之间都是通用的。-->
<template>
  <!--  Vue2中的html模板中必须要有一对跟标签,Vue3组件的html模板中可以没有根标签-->
  <div>这里是一段测试代码</div>
  <h3 >名字:{{user.name}}</h3>
  <h3>年龄:{{user.age}}</h3>
  <h3>媳妇:{{user.wife}}</h3>
  <h4>性别:{{user.gender}}</h4>
  <button @click="updateUser">更新数据</button>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
/*
* reactive 顶i有多个数据的响应式,
* const proxy = reactive(obj):接受一个普通对象然后返回改对象的响应式处理对象
* 响应式转换时"深层的":会影响对象内部所有嵌套的属性
* 内部基于ES6的Proxy实现,通过代理对象操作源对象内部数据都是响应式的
* */

//把数据变成响应式数据
//返回的是一个Proxy的代理对象,被代理者就是reactive中的传入的对象

const obj:any = {
  name:'小明',
  age:20,
  wife:{
    name:'小甜甜',
    age:18,
    cars:['奔驰','宝马','奥迪']
  }
}
const user = reactive(obj)
// user ---> 代理对象
// obj ----> 目标对象

//user对象或者obj对象添加一个新的属性,哪一种方式会影响页面的更新

// user对象或者obj对象移除一个移除一个属性,哪一种方式会影响页面的更新

const updateUser = ()=>{
  //直接使用目标对象的方式来更新目标对象中的成员的值，是不可能的
  //只能使用代理对象的方式来更新数据（响应式数据）
  // obj.name = '++++'
  // user.name= '小红'
  // user.age += 2
  // user.wife.name+='大'

  //这种方式不会引起页面的更新
  // obj.gender = '男'

  //通过这种方式会引起页面的更新,而且这个数据也添加到obj的对象上了
  // user.gender = '男'

  //delete obj.age //界面没有了更新渲染,obj中确实没有了age这个属性

  // delete user.age ///界面更新渲染了,obj中确实没有了age这个属性

  //如果操作代理对象,目标对象中的数据也会随之变化,同时如果想要再操作数据的时候,
  //界面也要跟着渲染,也是操作代理对象
}

</script>




