## 前端面试JS部分总结
_____

本笔记由作者在复习前端JS部分的相关的一些总结, 如果有什么错误的地方或者有什么相关的建议欢迎联系我

这份笔记借鉴了很多网上的文章, 如果有雷同或者相似的地方, 不用怀疑, 那就是搬得, 如果你是当中一些文章得作者,
如果觉得这种行为不恰当, 请与我联系, 收到消息后我会尽快处理

邮箱: zwn_fobj@foxmail.com

QQ: 1879154660  
QQ昵称: 只为你乱了浮生

感谢各位观看者的支持, 希望能对正在面临面试的你有所帮助,
____

## 目录

- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()


____

### <h2 id="1">1. 对js语言理解</h2>

JavaScript(简称"JS")是一种具有函数优先的轻量级, 解释型或及时编译型的编程语言;
虽然它是作为开发Web页面的脚本语言而出名,但是它也被用到了很多非浏览器环境中, JavaScript基于原型编程,
多范式的动态脚本语言, 并且支持面向对象,命令式,声明式,函数式编程范式

### <h2 id="2">2. MD5加密步骤</h2>

创建一个MD5加密对象,然后获取我们输入的明文,用getBytes()方法转换成字符串的形式,因为用md5的digest方式把他们都加密成16位字符,
因为md5是要把16位字符转换成32位的16进制字符串, 所以我们要遍历这16位字符,如果有小于16位的话,那就在后面append补0,这样就能够保证了这个字符串转换后是2位字符了,
如果有小于0的也不可以,一个字符的区间最大是255最小是-256,所以有小于0的字符就+256就可以保证他们都是非负数了,这样所有的16位字符都能满足要求;
再把他们通过md5的内部算法转化成32位16进制字符就可以了

### <h2 id="3">3. super关键字 --- ES6新特性class类</h2>

可以作为函数, 也可以作为对象去使用

当作为函数的时候: 只能在构造器中使用, 代表调用父类的构造器

当作为对象使用时, 如果去调用一个方法,那么它指向的时父类的原型对象, 调用的方法中如果有this的话, this的指向时字类实例

当作为对象使用时,如果去调用static静态方法, 那他指向的是父类, 调用方法中如果有this的话, this的指向是子类

- 语法

``` javascript
    super(arguments);  // 调用父构造函数
    super.parentMethod(arguments);  // 调用父方法
```

```javascript

class Polygon {
    constructor(height, width) {
        this.name = 'Rectangle';
        this.height = height;
        this.width = width;
    }

    sayName() {
        return 'Hi, I am a ', this.name + '.';
    }

    get area() {
        return this.height * this.width;
    }

    set area(value) {
        this._area = value;
    }
}

class Square extends Polygon {
    constructor(length) {
        // 这里，它调用父类的构造函数的，
        // 作为 Polygon 的 height, width
        super(length, length);

        this.height; // 需要放在 super 后面，不然引发 ReferenceErro

        // 注意：在派生的类中，在你可以使用'this'之前，必须先调用 super()。
        // 忽略这，这将导致引用错误。
        this.name = 'Square';
    }
}
```

### <h2 id="4">4. typeof原理:</h2>

判断变量的类型: object number string boolean function undefined null symbol  

js在底层存储变量的时候, 会在变量的机器码的为hi在1-3位存储其类型信息:

000: 对象   010: 浮点数   100: 字符串    110: 布尔    1: 整数

但是对于null: 所有机器码均为0 undefined: 用 -2 的30次幂来表示

null 是一个空指针, 准备存储数据的: undefined是定义了一个变量但是没有赋值就undefined

### <h2 id="5">5. instanceof原理:(可以判断是否是父类的实例)</h2>

只要右边的prototype属性在左边的原型链上:

instanceof在查找的过程中会遍历左边变量的原型链 直到找到右边变量的prototype属性

想比较准确的确定对象类型时可以采用: 
object.prototype.tostring.call()

Function.prototype._proto__==Object.prototype

Object._proto_=Function.prototype


### <h2 id="6">6. localStorage和sessionStorage的区别</h2>

1. 生命周期

localStorage的生命周期是永久的,关闭页面后浏览器后localStorage中的数据也不会消失;
localStorage防护非主动删除数据,否则数据永远不会消失

sessionStorage的生命周期是仅在当前会话下有效  
sessionStorage引入了一个"浏览器窗口"的概念  
sessionStorage是在同源的窗口中始终存在的数据, 只要这个浏览器窗口没有关闭,即使刷新页面或者进入另一个页面,  
数据依然存在. 但是sessionStorage在关闭了浏览器窗口后就会被销毁;
同时独立的打开同一个窗口同一个页面,sessionStorage也是不一样的

2. 存储大小

localStorage和sessionStorage的存储数据大小一般都是5MB

3. 存储位置  
localStorage和sessionStorage都保存在浏览器端,不与服务器进行交互通信  
   
4. 存储内容类型  
localStorage和sessionStorage**只能存储字符串类型**对于复杂的对象可以使用ECMAScript提供的JSON对象的`stringify`和`parse`来处理
   
5. 获取方式  

localStorage: window.localStorage  
sessionStorage: window.sessionStorage

6. 应用场景

localStorage: 常用于长期登录(+判断用户是否已登录), 适合长期保存在本地的数据  
sessionStorage: 敏感账号一次性登录  

### <h2 id="7">7. es6中set和map</h2>

**set(集合)**

基本用法: 他类似于数组, 但是成员的值都是唯一的, 没有重复的值, 可以用来数组去重/字符串去重(join("")).  
使用的算法叫做`Same-value-zero-equality`, 它类似于精确相等运算符(`===`),但是在Set内部,
两个`NaN`是相等的;而`===`中NaN是不等于自身的  

属性: consructor属性, size属性: 返回set中元素的总和(set的大小)

方法:  
1.操作方法 add has delete clear   
2. 遍历方法 `keys(键名)` `values(键值)` `entries(键值对)` `forEach() 遍历每个成员对象`  
遍历应用: 用map把所有值诚意2, 用filter过滤条件实现交集并集
   

**weakset**:  
与set两个区别:  
1. 成员只能是对象  
2. 对象只能是弱引用,也就是说如果其他独享都不再引用该对象,那么垃圾回收机制会自动回收该对象所占的内存  

方法: 有 add delete has 没有 size 和foreach, 因为成员都是弱引用,遍历机制无法保证成员的存在,
和可能刚遍历结束,成员就取不到了


**map**  
本质就是键值对的集合  
基本用法: 是js的对象, 值-值对对应, 对一个键多次赋值会覆盖,位置的键undefined,跟内存地址绑定的,
内存地址不一样就视为两个键  

属性:
size属性: 返回所有成员所有总和  
方法: 1.操作方法: set,get,has,delete,clear
    2. 遍历方法: keys() values() entries() forEach()

map转数组: [...map] 数组转map: 把数组传入new map中  
map转对象: 
对象转map:  

weakmap: 与map两个区别  
1. 只能是对象  
2. 对象不计入垃圾回收机制  

set是一种关联容器, 其特性如下:  
- set以RBTree作为底层容器  
- 所得元素的只有key没有value, value就是key  
- 不允许出现键值重复  
- 所有的元素都会被自动排序  
- 不能通过迭代器来改变set的值, 因为set的值就是键  

map和set一样是关联式容器,他们的底层容器都是红黑树, 区别在于map的值不作为键, 键和值是分开的,
他的特性如下:  

- map以RBTree作为底层容器  
- 所有元素都是键 + 值存在
- 不允许键重复
- 所有元素是通过键进行自动排序的
- map的键是不能修改的, 但是其对应的值是可以修改的

### <h2 id="8">9. var/let/const 区别</h2>
var:存在全局作用域window和函数作用域两种,没有块级作用域的说法,并且存在变量提升

let: 用于js中定义变量, 只再声明的代码块中生效(块级作用域),暂时性死区(在声明变量之前无法读取或操作这个变量 会报错),
没有变量提升,无法let重复声明

const: 用于js中定有常量, 如果存储简单类型如字符串, 数字和布尔值, 值就能保存在常量指向的内存地址,
而复杂类型的数据如 对象,数组和函数,常量指向的内存地,址, 实际上是保存了指向实际数据的指针, 
所以const只能保证指针是固定的,只遇指针指向的数据结构变不变就无法控制了
一旦声明变量,舅舅必须立即初始化,不能留到以后赋值

const 是用来定义常量的, 尝试修改const声明的变量会导致运行上报错  
const也不可以重复声明, const也是块级作用域

### <h2 id="9">9.重绘和回流</h2>

什么是回流

当render tree 中的一部分(或全部)因为元素的规模尺寸, 布局, 隐藏等改变而需要重新构建, 这就称为回流(reflow),
每个也面至少需要一次回流,就是在页面第一次加载的时候,这时候是一定会发生回流的, 因为要构建 render tree;
在回流的时候, 浏览器会使渲染树中受到影响的部分失效,并重新构造这部分渲染树,完成回流后,浏览器会重新绘制受印象的部分到屏幕中,
该过程称为回流

什么是重绘

当render tree中的一些元素需要更新属性,而这些属性只是影响元素的外观,风格, 而不影响布局的,  比如: background-color,z 这就称之为重绘

区别: 

回流必将引起重绘, 而重绘不一定引起回流, 比如: 只有颜色改变的时候,就只会发生重绘而不会引起回流,  
当页面和集合属性改变时就需要回流  
比如: 添加或者删除可见的DOM元素,元素位置不变,元素尺寸改变--边距,填充,边框,宽度,高度,和内容的改变

### <h2 id="10"> 10. es6中的Promise理解</h2>
1. promise是一种异步编程的解决方案, 简单来说就是一种容器, 里面保存着某种未来才会结束的事件;
  
```promise对象有两个特点:  
    1. 状态不受外界影响, pending fulfilled rejected, 只有异步操作的结果才可以决定是哪一种状态, 其他任何操作都无法改变这个状态,  
    2. 一旦状态改变就不会再变; pending->fulfilled   pending->rejected 只要改变就 resolved 凝固了, 会一直保持这个结果  

缺点:  
    1. promise无法取消, 新建就会立即执行, 无法中途取消  
    2. 如果不设置回调的话,promise内部抛出的结果不会反映到外部  
    3. 当处于pending状态时, 无法得知进展道哪一个阶段(刚开始还是即将完成)  

```

2. 基本用法
    1) 先 new Promise再then回调两个函数
    2) promise.prototype.then(), 该then方法返回的是新的promise实例,因此可以采用链式写法,
    then方法后面调用then方法, 
       比如说第一个then方法返回一个promise新对象，第二个then方法就会等待这个新的promise对象状态发生改变。  
       
    3) promise.prototype.catch()用于发生错误时的回调，抛出错误。但是如果状态是promise的reject的话，再抛出错误是无效的。如果不用catch的话，程序执行报错就无法运行了，但是catch的话只是输出错误然后继续运行。

    4) promise.prototype.finilly()定义不管promise对象最后状态是什么都会执行的操作。finilly里面的操作，应该是与状态无关的，不依赖于promise的执行结果。

    5) promise.all() 用于多个promise实例包装成一个新的promise实例，const p = Promise all ([p1,p2,p3]) 只有p1,p2,p3状态都变成fulfilled时，p的状态才是fulfilled，三个返回值组成数组传递给p的回调函数。只要有一个是rejected，那p的状态就是rejected，第一个被rejected的实例就传递给p的回调函数。并行。

    6) promise.race()同上，只要有一个状态先改变，p的状态就会改变。

    7) promise.allSettled()   无论几个状态是成功还是失败，都可以返回结果，包容性强。
    
应用场景: 加载图片

### <h2 id="11">es6中async/await和.then的区别</h2>

async/await是一种编写异步代码的新方法,在这之前编写异步代码使用的是回调函数和promise

async/await实际上是建立在promise之上的, 因此你不能把它和回调函数搭配使用  

async/await可以使异步代码在形式上更接近于同步代码, 这就是它最大的价值

async/await是过去几年中JavaScript引入的最具革命性的特性之一。它使你意识到promise在语法上的糟糕之处，并提供了一种简单，直接的替代方案。

async说白了就是让请求接口的顺序按自己想要的顺序执行。一个等一个

**promise + .then 写法**

```javascript
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      return promise2(value1)
        .then(value2 => {     
          return promise3(value1, value2)
        })
    })
}
```
**或者用promise + .all 写法优化一下**: 

```javascript
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {       
      return promise3(value1, value2)
    })
}
```
**用async 解决:**
```javascript
const makeRequest = async () => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2)
}
```

### <h2 id="12">12. jd原型链</h2>

原型对象

在 JavaScript 中,每当定义一个对象(函数也是对象)时候,对象中都会包含一些预定的属性,其中每个**函数对象**都有一个`prototype`属性,
这个属性指向函数的**原型对象**

原型链

每个对象都可以有一个原型*proto*,这个原型还可以有自己的原型,以此类推,形成一个原型链,链。
**查找特定属性的时候，我们先去这个对象里去找，如果没有的话就去它的原型对象里面去，如果还是没有的话再去向原型对象的原型对象里去寻找...... 这个操作被委托在整个原型链上，这个就是我们说的原型链了。**

### <h2 id="13">13. 宏任务和微任务</h2>

**宏任务**  
(macro)task, 可以理解是每次执行栈执行的代码就是一个宏任务(包括每次从事件队列中获取一个事件回调并放到执行栈中执行)  

浏览器为了能够使JS内部(macro)task与DOM任务能够有序的执行, 会在一个(macro)task执行后,在下一个(macro)task执行开始之前,
对页面重新渲染, 流程如下
```(macro)task->渲染->(macro)task->...```

**宏任务包括**

``` 
script(整体代码)
setTimeout
setInterval
I/O
UI交互事件
postMessage
MessageChannel
setImmediate(Node.js 环境)
```

**微任务**  

microtask,可以理解在当前task执行后立即执行的任务,
也就是说,在当前task任务后,下一个task之前,在渲染之前;

所以它的响应速度相比setTimeout(setTimeout是task)会更块,因为无需渲染;
也就是说在某个macrotask执行后,将会将在它执行期间产生的所有microtask都执行完毕(在渲染前)

**微任务包括**
``` 
Promise.then  
Object.observe  
MutationObserver  
process.nextTick(Node.js 环境)

```

**运行机制**  

在事件循环中,每进行一次循环操作称为tick,这一次tick的任务处理模型是比较复杂的,但关键步骤如下:  
- 执行一个宏任务(栈中没有就从事件队列中获取)
- 执行过程中如果遇到微任务,将将它添加道微任务的任务队列中
- 宏任务执行完毕后,立即执行当前微任务队列中的所有微任务(依次执行)
- 当前宏任务执行完毕, 开始检查渲染,然后GUI线程接管渲染
- 渲染完毕后, JS线程继续接关, 开始下一个宏任务(从事件队列中获取)


### <h2 id="14">es6箭头函数</h2>

**箭头函数**内部的this是词法作用域,由上下文确定. (词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的,因此当词法分析器
处理代码时会保持作用域不变)

- - 只有一个参数, 可以省略()
  - 只有一条命令语句,可以省略()
  - 只有一条命令语句且时return可以省略{} 和 return
    
- - 箭头函数由几个使用注意点:  
    (1) 箭头函数没有自己的this对象, 指向外层函数的对应变量: arguments, super, new.target  
    (2) 不可当做构造函数,也就是说,不可以对箭头函数使用new命令,否则会抛出一个错误
    (3) 另外,由于箭头函数没有自己的this, 所以当然也就不能用call(), apply(), bind()这些方法来改变this的指向  
    最重要的是第一点, 对于普通函数来说,内部的this指向函数运行时所在的随想,但是这一点对箭头函数不成立;
    它没有自己的`this`对象,内部的`this`就是定义时上层作用域中的`this`,也就是说;
    箭头函数内部`this`指向是固定的,相比之下,普通函数的`this`指向是可变的
    
不适合场合:
```javascript 

const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
//1.对象不能单独构成作用域，使得this指向全局变量，不能达到预期目的。


var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});

//2.动态使用this的时候，也不应该使用箭头函数。
//在这个例子中this指向了全局对象，会报错；如果改成普通函数的话this就会指向按钮，实现点击功能。

```

### <h2 id="15">15. 防抖和节流</h2>
- 什么是防抖: 防抖指的是触发事件之后n秒后才执行,如果在n秒内又触发了事件,则会重新计算函数执行时间
- 什么是节流: 就是连续触发事件但在n秒钟只执行一次函数, 节流会稀释函数的执行频率

``` 
当函数绑定一些持续触发的事件如：resize、scroll、mousemove ，键盘输入，多次快速click等等，

如果每次触发都要执行一次函数，会带来性能下降，资源请求太频繁等问题
```

**防抖的操作:**  
只有在某个时间内,没有再次触发某个函数时,才真正的调用这个函数;

理解一下他的过程:  
- 事件触发时,相应的函数并不会立即触发,而是会等待一定的事件;;
- 当事件密集触发时, 函数的触发会被频繁的推迟;
- 只有等待了一段事件也没有事件触发,才会真正的执行相应安徽拿书

防抖的应用场景很多:     
搜索框钟的输入内容,搜获或者提交信息;  
频繁的点击按钮, 触发某个事件;  
监听浏览器滚动事件,完成某个特定操作;
用户缩放浏览器的resize事件;

总之,**密集的事件触发,我们只希望触发比较靠后的发生的事件,就可以使用防抖函数;**



**为什么需要节流?**   王者荣耀技能

**节流的操作：在某个时间内（比如500ms），某个函数只能被触发一次；**  

**节流的应用场景：**

监听页面的滚动事件；

鼠标移动事件；

用户频繁点击按钮操作；

游戏中的一些设计；

总之，依然是**密集的事件触发，但是这次密集事件触发的过程，不会等待最后一次才进行函数调用，而是会按照一定的频率进行调用**；


### <h2 id="16">16. JS闭包</h2>

闭包构成的条件: 函数 + 函数 能够访问的自由变量

**闭包**是一个函数以及其捆绑的周边环境(词法环境)的引用的组合,换而言之,闭包让开发这可以从内部函数访问外部函数的作用域,
在JavaScript钟,闭包会随着函数的创建而被同时创建

```javascript
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 
// 计数器为 3

/*
* 实例解析
* 变量 add 指定了函数自我调用的返回字值。

* 自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。

* add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。

* 这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。

* 计数器受匿名函数的作用域保护，只能通过 add 方法修改。
* */

```
> 闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。
>
> 直观的说就是形成一个不销毁的栈环境。




### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>