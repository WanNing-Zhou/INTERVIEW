Array.prototype.newForEach = function (fun){
    for(let i = 0 ; i < this.length; i++){
        fun(this[i], i, this)
    }
}

const testArr = [0,1,2,3];

testArr.newForEach(function (item,index,array){
    console.log(`num=${item},index=${index},array=${array}`)
})

