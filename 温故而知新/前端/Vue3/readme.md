# 温故而知新 - Vue3

## 1 Vue3简介

### 1.1 性能的提升

- 打包快
- 内存占用减少
- 渲染更快

### 1.2 源码升级

- 使用Proxy代替defineProperty
- 重写虚拟DOM实现和Tree-shaking(术语表)

### 1.3 拥抱TypeScript

- Vue3可以更好的支持TypeScript

### 1.4 新的特性

1. Composition API(组合API)
    - setup配置
    - ref与reactive

## 2. 比较Vue2与Vue3的响应式(重要)

### 2.1 vue2的响应式

- 核心
    - 对象: 难过defineProperty将队形的已有属性的读取和修改进行劫持(监视/拦截)
    - 数组: 通过重写数组更新数组一些列更新元素的方法来实现元素修改的劫持

```js
Object.defineProperties(data, 'count', {
    get() {
    },
    set() {
    }
})
```

- 问题
    - 对象直接新添加的属性或删除已有属性,界面不会自动更新
    - 直接通过下标替换元素或更新length,页面不会自动更新arr[1]={}


### 2.2 Vue3的响应式

- 核心
    - 通过Proxy(代理): 拦截对data任意属性的任意(13种)操作,包括属性值的读写,属性值的添加,属性的删除等...
    - 通过Reflect(反射): 动态对被代理对象的响应属性进行特定的操作





