<template>
  <h2>provide 与 inject</h2>
  <p>当前的颜色:{{ color }}</p>
  <button @click="color='red'">red</button>
  <button @click="color='yellow'"> yellow</button>
  <button @click="color='blue'">blue</button>
  <Son/>
</template>
<script lang="ts">
import {defineComponent, provide, ref} from "vue";
import Son from "./components/Son.vue";
export default defineComponent({
  name: 'App',
  components:{
    Son
  },
  setup() {
    //响应式的树
    const color = ref('red')
    //提供数据
    provide('color',color)
    return {
      color
    }
  }

})

</script>
<style scoped>
</style>

