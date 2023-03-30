import {onBeforeUnmount, onMounted, ref} from "vue";

export default function (){

    let x = ref(-1)
    let y = ref(-1)
    //点击事件的回调函数
    const clickHandler = (e:MouseEvent)=>{
        x.value = e.pageX
        y.value = e.pageY
    }

    //页面加载毕的生命周期
    onMounted(()=>{
        window.addEventListener('click',clickHandler)
    })

    //页面卸载之前的生命周期组合API
    onBeforeUnmount(()=>{
        window.removeEventListener('click',clickHandler)
    })

    return {
        x,
        y
    }

}