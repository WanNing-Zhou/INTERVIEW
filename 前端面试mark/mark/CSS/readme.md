@[TOC] 

## 前端面试总结
_____

本笔记由作者在复习前端CSS部分的相关的一些总结, 如果有什么错误的地方或者有什么相关的建议欢迎联系我

邮箱: zwn_fobj@foxmail.com

感谢各位观看者的支持  
____

### 目录

- [1. z-index的作用和用法](#1-z-index)
- [2. 圣杯布局的实现过程](#2-)
- [3.什么使BFC,IFC](#3什么使BFC,IFC)
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


----
### 1.z-index的作用和用法

z-index 属性设定了一个定位元素及其后代元素或 flex 项目的 z-order。当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。

z-index可以是0, 处于正值下面, 处于auto前面  

z-index可以是负数,处于auto下面  

### 2.圣杯布局和双飞翼布局

圣杯布局和双飞翼布局都是三栏布局: 两边高度固定, 中间栏自适应, 中间栏优先渲染

**圣杯布局实现过程**

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


**双飞翼布局实现过程**  

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

### 3.什么使BFC,IFC  

**BFC(Block Formatting Contexts)块级格式化上下文**  

块级格式化上下文使页面上的一块渲染区域, 这块区域1由符合条件的容器产生.
容器内的子元素会由块盒子和浮动按如下规则排列:

- 纵向一个挨着一个排列
- 两个贺子的纵向间距由`margin`属性决定, 两个相邻的盒子在垂直方向上的`margin`
会有种"重叠合并"的效果,此时纵向间距距离取较大的那个`margin`值









