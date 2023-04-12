/**
 * 问题描述: 使用正则表达式去除
 * (1)字符串前后空格,
 * (2)字符串的前空格
 * (3)字符串的后空格
 * (4)全部空格
 */

/**
 * 1) 去除字符串前后空格
 */

let str = " 佐 助 " // 佐助中间有空格
let res = "" //用来保存结果

let removeSpacesBoth = function (str) {
    let reg0 = /^\s*|\s*$/g
    let reg1 = /^\s+|\s+$/g
    return str.replace(reg0, "") //这里使用 reg0 和 reg1都可以
}

res = removeSpacesBoth(str)
console.log(res)//佐 助
console.log(res.length)// 3

/**
 * 2) 去除字符串前空格
 */


let removeSpaceHead = function (str) {
    let reg2 = /^\s*/
    let reg3 = /^\s+/
    return str.replace(reg2, "")
}

res = removeSpaceHead(str)
console.log(res)//佐 助
console.log(res.length)//4


/**
 * 3) 去除字符串后空格
 */


let removeSpaceTail = function (str) {
    let reg4 = /\s*$/
    let reg5 = /\s+$/
    return str.replace(reg4,"")
}

res = removeSpaceTail(str);
console.log(res) // 佐 助
console.log(res.length) //4

/**
 * 4) 全部空格
 */

let removeSpaceAll = function (str){
    let reg5 = /\s/g
    return str.replace(reg5, "")
}

res = removeSpaceAll(str)
console.log(res) //佐助
console.log(res.length)//2

/**
 * 5) 去除中间空格
 */

let removeSpaceCenter = function (str){
    let leftIndex = str.search(/[^\s]/) //找到左索引
    let rightIndex = str.search(/\S\s*$/)+1 //找到右空格索引
    let leftSpace = str.slice(0,leftIndex) //左空格
    let rightSpace = str.slice(rightIndex) //右空格

    str = removeSpaceAll(str)

    return  leftSpace + str + rightSpace
}

res = removeSpaceCenter(str)
console.log(res)// 佐助
console.log(res.length) //4