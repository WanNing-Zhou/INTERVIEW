

//发送ajax
import {ref} from "vue";
import axios from "axios";
//发送ajax请求

export default function <T>(url:string, method:string){

    //加载的状态
    const loading = ref(true)
    //请求成功的数据
    const data = ref<T|null>(null);//坑
    //错误信息
    const errorMsg = ref('')
    //发送请求
    axios.get(url).then(res=>{
        loading.value = false
        data.value = res.data
    }).catch(error=>{
        loading.value = false
        errorMsg.value = error.message || '未知错误'
    })
    return {

        loading,
        data,
        errorMsg
    }
}