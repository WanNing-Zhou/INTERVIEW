class Event{
    constructor() {
        //创建一个对象,在该对象上创建一个缓存列表(调度中心)
        this.list = {}
    }
    on(event,fn){
        //on 方法用来吧函数fn都加到缓存列表中(订阅者注册事件到调度中心)
        (this.list[event]||(this.list[event]=[])).push(fn)
        return this;
    }

    emit(){
        //emit 方法取到 arguments 里第一个当作event
        //根据event 值去执行对应缓存到列表中的函数(发布者发布事件到调度中心,调度中心处理代码)
        let event = [].shift.call(arguments); //获取第一个参数
        if (this.list[event]){
            this.list[event].forEach(event=>{
                //其中的 this 指向它所在的上下文或全局对象。如果 event 函数内部使用了 this 来引用 EventEmitter 对象，则不指定其上下文环境，可能会带来意外的结果。
                event.apply(this,arguments)
                // event(arguments)
                // console.log('this',this)
            });
        }else{
            throw 'There is no such event'
            return;
        }
    }

    off(event,fn){
        //off 方法可以根据event值取消订阅(取消订阅)
        if(!this.list[event])
            return false;
        // console.log('event',event)
        if(!fn){
            //如果fn为undefined或者null的话代表取消订阅全部的事件, 将数组制空
            this.list[event] && (this.list[event].length = 0)
        }else{
            let index = this.list[event].findIndex(v=> v===fn)
            // console.log('index',index)
            this.list[event].splice(index,1)
            // console.log('this.list[event]',this.list[event])
        }
    }
}

function u1(params){
    console.log(1,params)
}
function u2(params){
    console.log(2,params)
}
let bus = new Event();
bus.on('ready',u1);
bus.on('ready',u2);
// bus.off('ready')
// bus.off('ready',u1)
bus.emit('ready','123')

class Event1{
    constructor(props) {
        this.list={};
    }

    on(event,fn){
        (this.list[event]||(this.list[event]=[])).push(fn)
        // console.log(this.list[event])
        return this;
    }

    emit(){
        let event = [].shift.call(arguments)
        if(this.list[event]){
            this.list[event].forEach(event =>{
                event.apply(this,arguments)
            })
        }else{
            console.log('wula')
        }
    }

    off(event, fn){
        if(!this.list[event])
            return false
        if(!fn){
            let index = this.list[event].findIndex(v=>v===fn);
            this.list[event].splice(index,1)
        }else{
            this.list[event].length=0
        }
    }
}


let bus1 = new Event1()

function u3(...params){
    console.log(params)
}



bus1.on('kk',u3)
bus1.emit('kk','卡卡西哦','dfjdlskf')


class Event3{
    constructor() {

    }

}
