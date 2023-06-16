function deepClone (obj){
    return JSON.parse(JSON.stringify(obj))
}

const a = {name:'卡卡西'}
const b  = deepClone(a)
console.log(b)
b.name = '卡卡北'
console.log(b)
console.log(a)