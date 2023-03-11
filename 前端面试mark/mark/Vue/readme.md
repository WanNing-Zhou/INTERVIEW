## 前端面试Vue部分总结
_____

本笔记由作者在复习前端Vue部分的相关的一些总结, 如果有什么错误的地方或者有什么相关的建议欢迎联系我

这份笔记借鉴了很多网上的文章, 如果有雷同或者相似的地方, 不用怀疑, 那就是搬得, 如果你是当中一些文章得作者,
如果觉得这种行为不恰当, 请与我联系, 收到消息后我会尽快处理

邮箱: zwn_fobj@foxmail.com

QQ: 1879154660  
QQ昵称: 只为你乱了浮生

感谢各位观看者的支持, 希望能对正在面临面试的你有所帮助,
____

## 目录 

- [一 Vue面试题<](#one)
    - [1. Vue优点?](#1)
    - [2. vue父组件向子组件传递数据？](#2)
    - [3. 子组件向父组件传递事件？](#3)
    - [4. v-show和v-if指令的共同点和不同点？](#4)
    - [5.如何让CSS只在当前组件中起作用？](#5) 
    - [6. keep-alive的作用是什么](#6)
    - [7. 如何获取dom?](#7)
    - [8. 说出几种vue当中的指令和它的用法？](#8)
    - [9. vue-loader是什么? 使用它的用途有哪些?](#9)
    - [10.为什么使用key?](#10)
    - [11.axios及安装?](#11)
    - [12. v-modal的使用。](#12)
    - [13.请说出vue.cli项目中src目录每个文件夹和文件的用法？](#13)
    - [14.分别简述computed和watch的使用场景](#14)
    - [16.$ nextTick的使用](#16)
    - [17. vue组件中data为什么必须是一个函数？](#17)
    - [18.渐进式框架的理解](#18)
    - [19.Vue中双向数据绑定是如何实现的？](#19)
    - [20.单页面应用和多页面应用区别及优缺点](#20)
  
- [二 声明周期函数面试题](#two)
    - [1.什么是 vue 生命周期？有什么作用？](#21)
    - [2.第一次页面加载会触发哪几个钩子？](#22)
    - [3.简述每个周期具体适合哪些场景](#15)
    - [4.created和mounted的区别](#23)
    - [5.vue获取数据在哪个周期函数](#24)
    - [6.请详细说下你对vue生命周期的理解？](#25)
  
- [三、vue路由面试题 ](#three)
    - [1.mvvm 框架是什么？](#26)
    - [2.vue-router 是什么?它有哪些组件<](#27)
    - [3.active-class 是哪个组件的属性？](#28)
    - [4.怎么定义 vue-router 的动态路由? 怎么获取传过来的值？](#29)
    - [5.vue-router 有哪几种导航钩子?](#31)
    - [6.$route 和 $router 的区别</h2>](#32)
    - [7.vue-router的两种模式](#33)
    - [8.vue-router实现路由懒加载（ 动态加载路由 ）](#34)
    
- [四, vuex常见面试题](#four)
    - [1. vuex是什么？怎么使用？哪种功能场景使用它？](#35)
    - [2.vuex有哪几种属性？](#36)
    - [3.Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？](#37)
    - []()
    - []()
    - []()
    - []()
    - []()
    - []()
    - []()
-----

# <h1 id="one">一 Vue面试题</h1>

## <h2 id="1">1. Vue优点?</h2>

答：轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；  
简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；  
双向数据绑定：保留了angular的特点，在数据操作方面更为简单；   
组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；  
视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；   
虚拟DOM：dom操作是非常耗费性能的， 不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；  
运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势

## <h2 id="2">2. vue父组件向子组件传递数据？</h2>

通过props

## <h2 id="3">3. 子组件向父组件传递事件？</h2>

答：$emit方法

## <h2 id="4">4. v-show和v-if指令的共同点和不同点？</h2>

答:
共同点：都能控制元素的显示和隐藏；  

不同点：实现本质方法不同，v-show本质就是通过控制css中的display设置为none，
控制隐藏，只会编译一次；v-if是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。
而且v-if不停的销毁和创建比较消耗性能。

总结：如果要频繁切换某节点，使用v-show(切换开销比较小，初始开销较大)。如果不需要频繁切换某节点使用v-if（初始渲染开销较小，切换开销比较大）。

## <h2 id="5">5.如何让CSS只在当前组件中起作用？</h2>

在组件中的style前面加上scoped

## <h2 id="6">6. keep-alive的作用是什么</h2>

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
## <h2 id="7">7. 如何获取dom?</h2>

答：ref=“domName” 用法：this.$refs.domName

## <h2 id="8">8. 说出几种vue当中的指令和它的用法？</h2>

答：
v-model双向数据绑定；  
v-for循环；  
v-if v-show 显示与隐藏；  
v-on事件；v-once: 只绑定一次。    

## <h2 id="9">9. vue-loader是什么? 使用它的用途有哪些?</h2>

答：vue文件的一个加载器，将template/js/style转换成js模块。  
用途：js可以写es6、style样式可以scss或less、template可以加jade等  

## <h2 id="10">10.为什么使用key?</h2>

答：需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。  
作用主要是为了高效的更新虚拟DOM。

## <h2 id="11">11.axios及安装?</h2>

答：请求后台资源的模块。npm install axios --save装好，  
js中使用import进来，然后.get或.post。返回在.then函数中如果成功，失败则是在.catch函数中。

## <h2 id="12">12. v-modal的使用。</h2>

答：
v-model用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：
v-bind绑定一个value属性；
v-on指令给当前元素绑定input事件。

## <h2 id="13">13.请说出vue.cli项目中src目录每个文件夹和文件的用法？</h2>

答：assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置; app.vue是一个应用主组件；main.js是入口文件。

## <h2 id="14">14.分别简述computed和watch的使用场景</h2>

答：  
computed:  
当一个属性受多个属性影响的时候就需要用到computed  
最典型的栗子： 购物车商品结算的时候  
watch:  
当一条数据影响多条数据的时候就需要用watch  
栗子：搜索数据  

## <h2 id="16">16.$ nextTick的使用</h2>

答：当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值，
你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后在获取，才能成功。

## <h2 id="17">17.vue组件中data为什么必须是一个函数？</h2>

答：因为JavaScript的特性所导致，在component中，data必须以函数的形式存在，不可以是对象。  
组建中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，  
相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个data，
这样改一个全都改了

## <h2 id="18">18.渐进式框架的理解</h2>
答：主张最少；可以根据不同的需求选择不同的层级；
## <h2 id="19">19.Vue中双向数据绑定是如何实现的？</h2>

答：vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的，   
也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；  
核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。

## <h2 id="20">20.单页面应用和多页面应用区别及优缺点</h2>

答：  
单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。
所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，
单页面的页面跳转，仅刷新局部资源。多应用于pc端。  

多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新  

单页面的优点：  
用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。  

单页面缺点：
不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。

# <h1 id="two">声明周期函数面试题</h1>

## <h2 id="21">1.什么是 vue 生命周期？有什么作用？</h2>

答：每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。
同时在这个过程中也会运行一些叫做 生命周期钩子 的函数，这给了用户在不同阶段添加自己的代码的机会。
（ps：生命周期钩子就是生命周期函数）例如，如果要通过某些插件操作DOM节点，如想在页面渲染完后弹出广告窗， 那我们最早可在mounted 中进行。

## <h2 id="22">2.第一次页面加载会触发哪几个钩子？</h2>

答：beforeCreate， created， beforeMount， mounted

## <h2 id="15">3.简述每个周期具体适合哪些场景</h2>

答：  
beforeCreate：在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。
在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法   

created：data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作  

beforeMount：执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的  

mounted：执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。
如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行  (可以再这个时候发送一些网络请求)

beforeUpdate： 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步  

updated：页面显示的数据和data中的数据已经保持同步了，都是最新的

beforeDestory：Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁
(这个时候通常会关闭一些定时器的使用)

destroyed： 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。


## <h2 id="23">4.created和mounted的区别</h2>

答：  
created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。  
mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

## <h2 id="24">5.vue获取数据在哪个周期函数</h2>

答：一般 created/beforeMount/mounted 皆可.  
比如如果你要操作 DOM , 那肯定 mounted 时候才能操作.

## <h2 id="25">6.请详细说下你对vue生命周期的理解？</h2>

答：  
总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。  

创建前/后： 在beforeCreated阶段，vue实例的挂载元素 $ el和数据对象data都为undefined， 还未初始化。  
在created阶段，vue实例的数据对象data有了，$ el还没有。  

载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点， data.message还未替换。
在mounted阶段，vue实例挂载完成，data.message成功渲染。  

更新前/后：当data变化时，会触发beforeUpdate和updated方法。  

销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。


# <h1 id="three">三、vue路由面试题 </h1>

## <h2 id="26">1.mvvm 框架是什么？</h2>

答：  
vue是实现了双向数据绑定的mvvm框架，当视图改变更新模型层，当模型层改变更新视图层。
在vue中，使用了双向绑定技术，就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。

## <h2 id="27">2.vue-router 是什么?它有哪些组件</h2>

答：vue用来写路由一个插件。<font color="red">router-link、router-view</font> 

## <h2 id="28">3.active-class 是哪个组件的属性？</h2>

答：vue-router模块的router-link组件。children数组来定义子路由

## <h2 id="29">4.怎么定义 vue-router 的动态路由? 怎么获取传过来的值？</h2>

答：在router目录下的index.js文件中，对path属性加上/:id。 使用router对象的params.id。

## <h2 id="31">5.vue-router 有哪几种导航钩子?</h2>

答：三种，
第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子
第三种：单独路由独享组件

## <h2 id="32">6.$route 和 $router 的区别</h2>

答：   
router是VueRouter的实例，在script标签中想要导航到不同的URL,
使用router.push方法。返回上一个历史history用$router.to(-1)

$route为当前router跳转对象。里面可以获取当前路由的name,path,query,parmas等。

## <h2 id="33">7.vue-router的两种模式</h2>

答:

hash模式：即地址栏 URL 中的 # 符号；

history模式：window.history对象打印出来可以看到里边提供的方法和记录长度。 
利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）。


## <h2 id="34">8.vue-router实现路由懒加载（ 动态加载路由 ）</h2>

答:  
三种方式  

第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 ,
可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。  

第二种：路由懒加载(使用import)。    

第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。
这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。  

# <h1 id="four">四, vuex常见面试题</h1>

## <h2 id="35">1.vuex是什么？怎么使用？哪种功能场景使用它？</h2>

答：vue框架中状态管理。在main.js引入store，注入。

新建了一个目录store.js，…… export 。  

场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车


## <h2 id="36">2.vuex有哪几种属性？</h2>

答：   
有五种，分别是 State、 Getter、Mutation 、Action、 Module  
state => 基本数据(数据源存放地)  
getters => 从基本数据派生出来的数据  
mutations => 提交更改数据的方法，同步！  
actions => 像一个装饰器，包裹mutations，使之可以异步。   
modules => 模块化Vuex  

## <h2 id="37">3.Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？</h2>

答：   
如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。  
如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用。   


# <h1>后续补充内容</h1>

## <h2 id="38">1. Vue组件间通信方式总结</h2>

Vue组件间通信方式: props、$emit/$on、vuex、$parent / $children、$attrs/$listeners和provide/inject

![img.png](img.png)

#### 方法一: `props`/`$emit`  

如组件A通过props的方式向子组件B传递, B to A通过在B组件中$emit, A组件中v-on的方式实现

1. 父组件向子组件传值: 在子组件中获取获取父组件中的数据 

```javascript
//App.vue父组件
<template>
  <div id="app">
    <users v-bind:users="users"></users>//自定义名称便于子组件调用，后者要传递数据名
  </div>
</template>
<script>
import Users from "./components/Users"
export default {
  name: 'App',
  data(){
    return{
      users:["Henry","Bucky","Emily"]
    }
  },
  components:{
    "users":Users
  }
}
</script>
```

```javascript
/users子组件
<template>
  <div class="hello">
    <ul>
      <li v-for="user in users">{{user}}</li>//遍历传递过来的值，然后呈现到页面
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props:{
    users:{           //这个就是父组件中子标签自定义名字
      type:Array,     //这个是值的类型
      required:true   // 值是否必须传递
    }
  }
}
</script>
```
总结：父组件通过props向下传递数据给子组件。注：组件中的数据共有三种形式：data、props、computed

2. 子组件向父组件传值（通过事件形式）  
事件在父组件里申明,由子组件调用,在传递参数的时候使用的是子组件的参数, 这样就完成了子组件向父组件传值

```javascript
// 子组件
<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1> <!--//绑定一个点击事件-->
  </header>
</template>
<script>
export default {
  name: 'app-header',
  data() {
    return {
      title:"Vue.js Demo"
    }
  },
  methods:{
    changeTitle() {
      this.$emit("titleChanged","子向父组件传值");//自定义事件  传递值“子向父组件传值”
    }
  }
}
</script>
```


```javascript
// 父组件
<template>
  <div id="app">
    <app-header v-on:titleChanged="updateTitle" ></app-header>//与子组件titleChanged自定义事件保持一致
    // updateTitle($event)接受传递过来的文字
    <h2>{{title}}</h2>
  </div>
</template>
<script>
  import Header from "./components/Header"
  export default {
  name: 'App',
  data(){
  return{
  title:"传递的是一个值"
}
},
  methods:{
  updateTitle(e){   //声明这个函数
  this.title = e;
}
},
  components:{
  "app-header":Header,
}
}
</script>

```
总结：子组件通过events给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。

#### 方法二: `$emit/on`  

这种方法通过一个空的Vue的示例作为中央事件总线(事件中心), 用它来触发事件和监听事件, 巧妙而轻量地实现了任何组件的通信,
包括父子,兄弟,跨级, 当我们的项目比较大时, 可以选择个好的状态管理解决方案vuex

1. 具体实现方式：

```javascript
    var Event=new Vue();
    Event.$emit(事件名,数据);
    Event.$on(事件名,data => {});
```
2. 举个例子

假设兄弟组件有三个，分别是A、B、C组件，C组件如何获取A或者B组件的数据
```html
<div id="itany">
  <my-a></my-a>
  <my-b></my-b>
  <my-c></my-c>
</div>
<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button
    @click="send">将数据发送给C组件
  </button>
</div>
</template>
<template id="b">
  <div>
    <h3>B组件：{{age}}</h3>
    <button
    @click="send">将数组发送给C组件
  </button>
</div>
</template>
<template id="c">
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>
<script>
  
var Event = new Vue();//定义一个空的Vue实例
  
var A = { // A组件
  template: '#a',
  data() {
    return {
        name: 'tom'
    }
  },
  methods: {
    send() {
      Event.$emit('data-a', this.name);
    }
  }
}
  
var B = { // B组件
  template: '#b',
  data() {
    return {
        age: 20
    }
  },
  methods: {
    send() {
        Event.$emit('data-b', this.age);
    }
  }
}
  
var C = { // C 组件
  template: '#c',
  data() {
    return {
      name: '',
      age: ""
    }
  },
  mounted() {//在模板编译完成后执行
    Event.$on('data-a',name => {
        this.name = name;//箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
    })
    Event.$on('data-b',age => {
        this.age = age;
    })
  }
}

var vm = new Vue({
  el: '#itany',
  components: {
        'my-a': A,
        'my-b': B,
        'my-c': C
    }
});
</script>
```

![img_1.png](img_1.png)

#### 方法三: vuex

![img_2.png](img_2.png)

1. 简单介绍Vuex原理  

Vuex实现了一个单向数据流, 在全局中拥有一个State存放数据, 当组件要更改State中的数据时, 必须通过Mutation进行,
Mutation同时提供了订阅者模式供外部插件调用State数据的更新,而当所有异步操作(常见于调用后端接口异步获取更新数据)
或批量的同步操作需要走Action, 但Action也是无法直接修改State的,还是需要通过Mutation来修改的数据,最后State的变化,
渲染到视图上

2. 简要介绍各模块在流程中的功能: 

+ VueComponents: Vue组件,HTML页面上,负责接收用户操作等交互行为,执行dispatch方法触发对应action进行回应
+ dispatch: 操作行为触发方法, 是唯一能执行action的方法
+ actions: 操作行为处理模块, 由组件中$store.dispatch('action 名称', data1)来触发,然后由commit()来触发mutation的调用
  间接更新state,负责处理Vue Components 接收到所有交互行为, 包含同步/异步操作,支持多个同名方法, 按照注册的顺序一次触发;
  向后台API请求的操作就这个模块中进行,包括触发其他action以及提交mutation的操作; 该模块提供了Promise的封装,以及支持action的
  链式触发
  
+ commit:状态改变提交操作方法, 对mutation进行提交,是唯一能操作mutation的方法
+ mutations: 状态改变操作方法,由actions中的`commit('mutation 名称')`来触发, 是Vue修改State的唯一推荐方法,
该方法只能进行同步操作,且方法名只能全局唯一,操作之中会有一些hook暴露出来,以及进行state的监控等
  
+ state:页面装台管理容器对象,几种存储Vue commponents中data对象的零散数据,全局唯一,以进行统一的状态管理,
页面显示所需的数据从该对象中进行读取,利用Vue的细粒度数据响应机制来进行高效的状态更新
  
+ getters: state对象读取方法,图中没有单独列出该模块,应该包含在render中, Vue Components 通过该方法读取全局state对象


3. Vuex与localStorage

vuex 是 vue的状态管理器, 存储的数据是响应式的并不会保存起来,刷新之后就回到了初始状态,具体做法应该在vuex里数据改变的时候把数据拷贝一份到localStorage里面,
刷新之后,如果localStorage里由保存的数据,取出来再替换store里的state

```javascript
let defaultCity = "上海"
try {   // 用户关闭了本地存储功能，此时在外层加个try...catch
  if (!defaultCity){
    defaultCity = JSON.parse(window.localStorage.getItem('defaultCity'))
  }
}catch(e){}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
      window.localStorage.setItem('defaultCity', JSON.stringify(state.city));
      // 数据改变的时候把数据拷贝一份保存到localStorage里面
      } catch (e) {}
    }
  }
})

```

这里需要注意的是: 由于vuex,我们保存的状态都是数组,而localStorage只支持字符串,所以需要用JSON转换

```javascript
JSON.stringify(state.subscribeList);   // array -> string
JSON.parse(window.localStorage.getItem("subscribeList"));    // string -> array
```

#### 方法四. $attrs/$listeners

1. 简洁  

多组件嵌套需要传递数据时,通常使用的方法是vuex, 但如果仅仅是传递数据,而不做中间处理, 使用vuex, 未免有点大材小用,
为此Vue2.4版本提供了另一种方法----`$attrs`/`$listeners`

- `$attrs`: 包含了父作用域中不被prop所识别(且获取)的特性绑定(class和style除外),当一个组件没有声明任何prop时,
这里会报含所有父作用域的绑定(class和style除外),并且可以同故宫v-bind="$attrs"传入内部组件,通常配合inheritAttrs选择一起使用  
  
- `$listeners`:包含了父作用域中的(不含 .native 修饰器的)v-on事件监听器,它可以通过v-on="$listeners"传入内部组件

跨级别通信的例子:

```javascript
// index.vue
<template>
  <div>
    <h2>浪里行舟</h2>
    <child-com1
      :foo="foo"
      :boo="boo"
      :coo="coo"
      :doo="doo"
      title="前端工匠"
    ></child-com1>
  </div>
</template>
<script>
const childCom1 = () => import("./childCom1.vue");
export default {
  components: { childCom1 },
  data() {
    return {
      foo: "Javascript",
      boo: "Html",
      coo: "CSS",
      doo: "Vue"
    };
  }
};
</script>
```
```javascript
// childCom1.vue
<template class="border">
  <div>
    <p>foo: {{ foo }}</p>
    <p>childCom1的$attrs: {{ $attrs }}</p>
    <child-com2 v-bind="$attrs"></child-com2>
  </div>
</template>
<script>
const childCom2 = () => import("./childCom2.vue");
export default {
  components: {
    childCom2
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    foo: String // foo作为props属性绑定
  },
  created() {
    console.log(this.$attrs); // { "boo": "Html", "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  }
};
</script>

```

```javascript
// childCom2.vue
<template>
  <div class="border">
    <p>boo: {{ boo }}</p>
    <p>childCom2: {{ $attrs }}</p>
    <child-com3 v-bind="$attrs"></child-com3>
  </div>
</template>
<script>
const childCom3 = () => import("./childCom3.vue");
export default {
  components: {
    childCom3
  },
  inheritAttrs: false,
  props: {
    boo: String
  },
  created() {
    console.log(this.$attrs); // { "coo": "CSS", "doo": "Vue", "title": "前端工匠" }
  }
};
</script>
```

```javascript
// childCom3.vue
<template>
  <div class="border">
    <p>childCom3: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  props: {
    coo: String,
    title: String
  }
};
</script>

```

#### 方法五. provide/inject

1. 简介  

Vue2.2.0新增API, 这对选择需要一起使用, 以允许一个祖先组件向所其所有子孙后代注入一个依赖,不论组件层次有多深,并再起上下游关系成立
的时间里始终生效, 一言而蔽之：祖先组件中通过provider来提供变量，然后在子孙组件中通过inject来注入变量。
provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，
主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。

2. 举个栗子

假设有两个租价: A.vue 和 B.vue B是A的子组件
```javascript
// A.vue
export default {
  provide: {
    name: '浪里行舟'
  }
}
```
```javascript
// B.vue
export default {
  inject: ['name'],
  mounted () {
    console.log(this.name);  // 浪里行舟
  }
}
```

可以看到，在 A.vue 里，我们设置了一个`provide`: name，
值为 浪里行舟，它的作用就是将`name`这个变量提供给它的所有子组件。
而在 B.vue 中，通过`inject`注入了从 A 组件中提供的`name`变量，
那么在组件 B 中，就可以直接通过`this.name`访问这个变量了，
它的值也是 浪里行舟。这就是 provide / inject API 最核心的用法。
需要注意的是：provide 和 inject 绑定并不是可响应的。这是刻意为之的。
然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的----vue官方文档

所以，上面 A.vue 的 name 如果改变了，B.vue 的`this.name`是不会改变的，仍然是 浪里行舟。

3. provide与inject 怎么实现数据响应式

一般来说，有两种办法：

provide祖先组件的实例，然后在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如props，methods
使用2.6最新API Vue.observable 优化响应式 provide(推荐)

我们来看个例子：孙组件D、E和F获取A组件传递过来的color值，并能实现数据响应式变化，即A组件的color变化后，组件D、E、F会跟着变（核心代码如下：）

![img_3.png](img_3.png)

```javascript
// A 组件 
<div>
      <h1>A 组件</h1>
      <button @click="() => changeColor()">改变color</button>
      <ChildrenB />
      <ChildrenC />
</div>
......
  data() {
    return {
      color: "blue"
    };
  },
  // provide() {
  //   return {
  //     theme: {
  //       color: this.color //这种方式绑定的数据并不是可响应的
  //     } // 即A组件的color变化后，组件D、E、F不会跟着变
  //   };
  // },
  provide() {
    return {
      theme: this//方法一：提供祖先组件的实例
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
  // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
  // provide() {
  //   this.theme = Vue.observable({
  //     color: "blue"
  //   });
  //   return {
  //     theme: this.theme
  //   };
  // },
  // methods: {
  //   changeColor(color) {
  //     if (color) {
  //       this.theme.color = color;
  //     } else {
  //       this.theme.color = this.theme.color === "blue" ? "red" : "blue";
  //     }
  //   }
  // }

```

```javascript
// F 组件 
<template functional>
  <div class="border2">
    <h3 :style="{ color: injections.theme.color }">F 组件</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({})
    }
  }
};
</script>
```

#### 方法六、$parent / $children与 ref

```javascript

```

## <h2 id="39"></h2>
## <h2 id="40"></h2>
## <h2 id="40"></h2>
## <h2 id="40"></h2>
## <h2 id="40"></h2>
## <h2 id="40"></h2>
## <h2 id="40"></h2>
## <h2 id="40"></h2>













