## 前端面试总结
_____

本笔记由作者在复习前端CSS部分的相关的一些总结, 如果有什么错误的地方或者有什么相关的建议欢迎联系我

这份笔记借鉴了很多网上的文章, 如果有雷同或者相似的地方, 不用怀疑, 那就是搬得, 如果你是当中一些文章得作者, 
如果觉得这种行为不恰当, 请与我联系, 收到消息后我会尽快处理

邮箱: zwn_fobj@foxmail.com

QQ: 1879154660  
QQ昵称: 只为你乱了浮生

感谢各位观看者的支持, 希望能对正在面临面试的你有所帮助,   
____

### 目录

- [1. z-index的作用和用法](#1)
- [2. 圣杯布局的实现过程](#2)
  - [2.1圣杯布局实现过程](#2_1)
  - [2.2双飞翼布局实现过程](#2_2)  
- [3.什么使BFC,IFC](#3)
    - [3.1 BFC(Block Formatting Contexts)块级格式化上下文](#3_1)
    - [3.2 IFC(Inline Formatting Contexts)行内格式化上下文](#3_2)
- [4.清除浮动方式](#4)
- [5. CSS中position(定位)使用](#5)
- [6.CSS3常见的伪类和伪元素选择器](#6)
- []()
- []()
- []()
- []()
- []()
- []()


----
### <h2 id="1">1.z-index的作用和用法</h2> 
z-index 属性设定了一个定位元素及其后代元素或 flex 项目的 z-order。当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。

z-index可以是0, 处于正值下面, 处于auto前面  

z-index可以是负数,处于auto下面  

### <h2 id="2">2.圣杯布局和双飞翼布局</h2> 

圣杯布局和双飞翼布局都是三栏布局: 两边高度固定, 中间栏自适应, 中间栏优先渲染

<h3 id="2_1">2.1圣杯布局实现过程</h3>

尾部: 清除浮动  
容器: bfc  
三栏: float:left; positive:relative;height:500px  
左右栏: 宽度+背景颜色  
左侧挪到上一行前面: margin-left: -100%  
右侧往前挪: right: -150px  
给容器: pandding-left: 200px; padding-right:150px


- 具体实现  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            min-width: 550px;
            font-weight: bold;
            font-size: 20px;
        }

        .header,.footer{
            background-color: rgba(29,27,27,0.726);;
            text-align: center;
            height: 60px;
            line-height: 60px;
        }

        .footer{
            /*清除浮动*/
            clear: both;
        }

        .middle,.left,.right{
            height: 100px;
        }
        .content{
            padding-left: 200px; /*空出left的位置*/
            padding-right: 150px; /*空出right的位置*/
            overflow: hidden;
        }

        .content div{
            position: relative;
            float: left;
            text-align: center;
            height: 300px;
            line-height: 300px;
        }

        .middle {
            width: 100%;
            background-color: orange;
        }
        .left {
            width: 200px;           /* leftContent width */
            right: 200px;           /* leftContent width */
            margin-left: -100%;
            background-color: green;
        }
        .right {
            width: 150px;           /* rightContent width */
            margin-left: -150px;   /* rightContent width */
            right: -150px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
<div class="header">header</div>
<div class="content wrapper">
    <div class="middle">middle</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>
<div class="footer">footer</div>
</body>
</html>
```

- 效果展示  

![img_3.png](img_3.png)



<h3 id="2_2">2.2双飞翼布局实现过程</h3>

中间栏里再放inner  
容器:bfc  
三栏:  float:left; height: 500px  
左右栏: 宽度+背景颜色  
中间栏:  100%+背景颜色  
左右栏： 宽度+背景颜色  
左侧挪到上一行前面： margin-left：-100%；  
右侧挪到上一行后面： margin-left： -150px；  
inner里面margin： 0 200px 0 150px；

- 具体实现  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>双飞翼布局</title>
    <style>
        body {
            min-width: 550px;
            font-weight: bold;
            font-size: 20px;
        }
        #header, #footer {
            background: darkgoldenrod;
            text-align: center;
            height: 60px;
            line-height: 60px;
        }
        #container {
            /*这里预留位置用再预留*/
            /*该元素大小有center撑开*/
            overflow: hidden;
        }
        .column {
            text-align: center;
            height: 300px;
            line-height: 300px;
        }
        #left, #right, #center {
            float: left;
        }
        #center {
            width: 100%;
            background: gray;
        }
        #left {
            width: 200px;
            /*移动到上一行首首*/
            margin-left: -100%;
            background: skyblue;
        }
        #right {
            width: 150px;
            /*移动到上一行行尾*/
            margin-left: -150px;
            background: orange;
        }
        .content {
            /*内容区显示的位置*/
            margin: 0 150px 0 200px;
        }
    </style>

</head>
<body>
    <div id="header"># header</div>

    <div id="container">
        <div id="center" class="column">
            <div class="content"># center</div>
        </div>

        <div id="left" class="column">#left</div>
        <div id="right" class="column">#right</div>
    </div>

    <div id="footer">#footer</div>
</body>
</html>

```
- 效果展示  

![img_4.png](img_4.png)


### <h2 id="3">3.什么是BFC,IFC</h2> 

#### <h3 id="3_1">3.1 BFC(Block Formatting Contexts)块级格式化上下文</h3>
 

块级格式化上下文使页面上的一块渲染区域, 这块区域由符合条件的容器产生.
容器内的子元素会由块盒子和浮动元素按如下规则排列:

- 纵向一个挨着一个排列
- 两个贺子的纵向间距由`margin`属性决定, 两个相邻的盒子在垂直方向上的`margin`
会有种"重叠合并"的效果,此时纵向间距距离取较大的那个`margin`值

这个容器可以看作一个独立的布局环境,容器外的元素与容器内的元素(包括浮动元素)
再布局上不会影响到对方

1.  BFC容器的高度将浮动圆度的高度计算进去

![img.png](img.png)

2. 浮动清除效果. BFC会排斥外部浮动元素,让浮动元素和块元素在视觉上不会由重叠的效果:

![img_1.png](img_1.png)

产生块格式上下文的方式有:

``` 
1. 根元素 - <html>

2. 浮动元素 - 非float: none的元素

3. 绝对定位元素 - position为absolute或fixed的元素（和产生粘滞效果sticky的元素？）

4. 行内块元素 - display为inline-block的元素

5. 表格元素

    display: table-cell的元素，如<td>
    display: table-caption的元素，如<th>
    display: table的元素，如<table>
    display: table-row的元素，如<tr>
    display: table-row-group的元素，如<tbody>
    display: table-header-group的元素，如<thead>
    display: table-footer-group的元素，如<tfoot>
    display: inline-table的元素
    
6. overflow不为visible的块元素

7. display: flow-root的元素

8. contain: layout | content | paint的元素

9. 弹性元素 - display: flex | inline-flex的直接子元素

10. 网格元素 - display: grid | inline-grid的直接子元素

11 .多列容器 - column-count或column-width不为auto

12. column-span: all的元素
```

#### <h3 id="3_2">3.2 IFC(Inline Formatting Contexts)行内格式化上下文</h3>

行内格式化上下文的布局首先要根据水平, 垂直和左右书写模式来说明:

- 在水平书写模式 `writing-mode: hortizontal-td`下,盒子会在时评方向上从左到右排列,空间不够时换到下一行继续
- 在垂直书写模式下 `writing-mode: vertical-rl | vertical-lr`, 盒子会在垂直方向上从上到下排列, 空间不够时换到下一行继续, 只是这里的下一行有左右之分
`writing-mode: vetical-rl`时就像古人书写以及日本台湾书籍的格式一样,从右到左排列; `writing-mode: vertival-lr`则时从左到右排列
  
每"行"在浏览器中会被作为一个盒子处理, 这个盒子叫行框(line box),他的高度由其包含行内元素的最低位置到最高位置(不包含`margin`)计算而来; 因为考虑盒子件对齐处理的关系,
这个值可能会被行内最高的元素要搞

当由浮动元素在行内式化上下文时, 在浮动元素的行框可能会因为它而缩短宽度,产生"文字环绕"效果
![img_2.png](img_2.png)

当行框内的行内元素没有占满整行的空间时, 他们在水平方向的位置会受到`text-align`属性的影响

而当行内元素太长时, 会被分割为多行, 也就是说这个元素内产生了多个行框排列在一起,此时`margin`.
`border`, `padding`都不会在断裂处生效

满足以下条件时,行框会被当做高度为0的盒子处理:

- 不包含文字
- 非white-space: pre | pre-wrap | pre-line
-  不含margin、padding、border值不为零的元素
-  不含在常规流中的元素，如图片、表格之类



### <h2 id="4">4.清除浮动方式</h2>

清除浮动: 清除浮动后造成的影响-->清除浮动主要为了解决父级元素因为浮动引起内部高度为0的问题

1. 额外标签法(在最后一个浮动标签后,新新加一个标签, 给其设置clear: both;)(不推荐)  
`<div style="clear:both"></div>`  
   我们清除了浮动,父元素自动检测盒子的高度,然后与其同高  
   - 优点: 通俗易懂, 方便  
   - 缺点: 添加无意义标签, 语义化差

2. 父级添加overflow属性, 变成BFC([块级格式化上下文](#3_1)),就可以解决浮动带来的影响(不推荐)  
   通过除法BFC方式,实现清除浮动  
   - 优点:代码简洁
   - 缺点: 内容增多的时候容易造成不会自动换行,导致内容被隐蔽掉,无法显示要溢出的元素
```css
    .fahter{
        width: 400px;
        border: 1px solid deeppink;
        overflow: hidden;
    }
```
3. 使用before和after伪元素清除浮动(推荐使用):
   这种方式也是使用额外标签方式达到效果，只是变相的使用了伪元素after/before，使得页面结构更简介，也是常用的清除浮动的方式
   - 优点: 符合闭合浮动思想,结构语义化正确
    - 缺点: ie6-7不支持伪元素：after，使用zoom:1触发hasLayout.
```css
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: ""; /*元素设置为空*/
    display: block; /*转换为块级元素*/
    height: 0; /*高度为0*/
    clear:both;/*清除浮动*/
    visibility: hidden;/*将元素隐藏*/
}
/*下面为了兼容IE*/
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
```
- 具体使用
```html

<body>
    <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
        <!--<div class="clear">额外标签法</div>-->
    </div>
    <div class="footer"></div>
</body>
```
- 使用before和after双伪元素清除浮动
    - 优点: 代码更简洁
    - 缺点: 用zoom:1除法hasLayout
```css

.clearfix:after,.clearfix:before{
    content: "";
    display: table;
}
.clearfix:after{
    clear: both;
}
.clearfix{
    *zoom: 1;
}
```
- 具体使用

```html

 <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
 </div>
 <div class="footer"></div>
```

4. 使用 `display: flow-root`(推荐):  
   
   一个新的 `display` 属性的值，它可以创建无副作用的 BFC。在父级块中使用 `display: flow-root` 可以创建新的 BFC。  
  
   给 `<div>` 元素设置 `display: flow-root` 属性后，`<div>` 中的所有内容都会参与 BFC，浮动的内容不会从底部溢出。  
   
   你可以从 `flow-root` 这个值的名字上看出来，它创建一个新的用于流式布局的上下文，类似于浏览器的根（`html`）元素。

- 具体使用      
```css
.box[style] {
  background-color: aliceblue;
  border: 5px solid steelblue;
}
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: rgba(255, 255, 255, .5);
  border:1px solid black;
  padding: 10px;
}   
```
```html
  <div class="box" style="display:flow-root">
    <div class="float">I am a floated box!</div>
    <p>I am content inside the <code>display:flow-root</code> container.</p>
  </div>
```
- 实现效果:  
![img_5.png](img_5.png)

### <h2 id="5">5. CSS中position(定位)使用</h2>

<h3>static定位(静态定位)</h3>

HTML元素的默认值,即没有定位,遵循正常的文档流对象  
静态定位的元素不会受到top,bottom,left,right影响  

```css
div.static {
    position: static; /*静态定位,HTML元素默认值*/
    border: 3px solid #73AD21;
}
```

<h3>fixed定位(固定定位)</h3>  

元素的位置相对于浏览器窗口是固定位置  
即使窗口是滚动的它也不会移动  

**特点**:  
- 固定定位之后,不占据原来的位置(脱标)
- 元素使用固定定位之后,位置从浏览器出发
``` css
p.pos_fixed
{
    position:fixed; /*固定定位*/
    top:30px;
    right:5px;
}
```


<h3>relative定位(相对定位)</h3>

相对定位元素的定位是相对其正常位置

**特点**:
- 使用相对定位,位置从自身出发  
- 还占据原来的位置(不脱标)
- 子绝夫相(父元素相对定位,子元素绝对定位)
- 行内元素使用相对定位不能转行内块

```css
h2.pos{
    position: relative;
    left: -20px;
}
```

<h3>absolute定位(绝对定位)</h3>

绝对定位的元素的位置相对于最近的已定位父元素,如果元素没有已定位的父元素,
那么它的位置相对于`<html>`

**特点**:  
- 元素使用绝对定位之后不占据原来的位置(脱标)  
- 元素使用绝对定位,位置是从浏览器出发  
- 嵌套的盒子,父盒子没有使用定位,子盒子绝对定位,子盒子位置是从浏览器出发  
- 嵌套的盒子,父元素使用定位, 子盒子绝对定位,子盒子位置是从父元素位置出发

```css
h2 {
    position:absolute;
    left:100px;
    top:150px;
}
```

<h3>sticky定位:粘性定位</h3>

粘性定位的元素是依赖于用户的滚动,在 position:relative 与 position:fixed定位之间切换

它的行为就像position:relative;而当页面滚动超出目标区域时, 它的表现就像position:fixed; 它会固定在目标位置
元素定位表现在跨越特定阈值为相对定位,之后为固定定位

这个特定域指指的是top,right,bottom或left之一,换言值,指定top,right,bottom或left四个阈值其中之一,才可使粘性定位生效,否则其行为与相对定位相同

粘性定位的元素是依赖于用户的滚动,在 position:relative 与 position:fixed定位之间切换
它的行为就像position:relative;而当页面滚动超出目标区域时, 它的表现就像position:fixed; 它会固定在目标位置
元素定位表现在跨越特定阈值为相对定位,之后为固定定位
这个特定域指指的是top,right,bottom或left之一,换言值,指定top,right,bottom或left四个阈值其中之一,才可使粘性定位生效,否则其行为与相对定位相同

**特点**:   
top,right,bottom,left四个属性中至少设置一个具体值,  
当小于这个距离时呈现fixed,大于时呈现relative

```css
div.sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: green;
    border: 2px solid #4CAF50;
}
```

### <h2 id="6">6.CSS3常见的伪类和伪元素选择器</h2>

- **伪类**: 以冒号(:)开头,用于选择处于特定状态的元素
``` 
:checked ---页面中有选中状态的元素
:active --- 想被激活的元素添加样式
:focus ---想拥有键盘输入焦点的元素添加样式
:hover ---当鼠标悬浮在元素上时,想元素添加样式
:link ---想未被访问的链接添加演示
:visited ---向已被访问的链接添加样式
:first-child ---向元素的第一个子元素添加样式
:lang ---向带有指定lang属性的元素添加样式
:nth-child(n) ---第n个子元素(odd奇数,even偶数)
```

- **伪元素**: 以双冒号(::)开头, 用于在文档中插入虚构的元素
``` 
::first-letter ---向文本的第一个字母添加特殊样式
::first-line ---向文本的首航添加特殊样式
::before ---在元素之前添加内容
::after ---在元素之后添加内容
::selection ---元素被选择后的颜色
::placeholder ---选中表单元素的占位文本
```

1. 伪类的本质上是为了弥补常规CSS选择器的不足,以便获取到更多信息;
2. 伪元素本质上是创建了一个有内容的虚拟容器,不存在于文档树中
3. CSS中伪类和伪元素的语法不同
4. 可以同时使用多个伪类, 而只能同时使用一个伪元素

### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>
### <h2 id=""></h2>









































