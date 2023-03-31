// shallowReactive(浅的劫持,浅的监视,浅的响应数据) 与 reactive(深得)

//定义一个reactiveHandler处理对象
const reactiveHandler = {
    //获取属性值
    get(target,prop){
        const result = Reflect.get(target,prop)
        console.log('拦截了读取数据',prop,result)
        return result
    },
    // 修改属性
    set(target,prop,value){
        const result = Reflect.set(target,prop,value)
        console.log('拦截了修改数据或者是添加属性',prop)
        return result;
    },
    // 删除某个属性
    deleteProperty(target,prop){
        const result = Reflect.deleteProperty(target,prop)
        console.log('拦截了删除数据')
        return result;
    }
}


//定义一个shallowReactive函数,传入一个目标对象
function shallowReactive(target){
    //判断当前的目标对象是不是object类型(对象/数组)
    if(target && typeof target === 'object'){
        return new Proxy(target,reactiveHandler)
    }

    //如果传入的数据是基本类型的数据,那么就直接返回
    return target
}

//定义一个shallowReactive函数,传入一个目标对象
function reactive(target){
    //判断当前的目标对象是不是object类型(对象/数组)
    if(target && typeof target === 'object'){
        //对数组或者是对象中所有的数据进行reactive的递归处理
        //先判断当前的数据是不是数组
        if(Array.isArray(target)){
            //数组的数据要进行遍历操作
            target.forEach((item,index)=>{
                target[index] = item
            })
        }else{
            //再判断当前的数据是不是对象
            //对象的数据也要进行遍历操作
            Object.keys(target).forEach(key=>{
                target[key] = target[key]
            })
        }


        //在判断当前数据是不是对象
        return new Proxy(target,reactiveHandler)
    }

    //如果传入的数据是基本类型的数据,那么就直接返回
    return target
}