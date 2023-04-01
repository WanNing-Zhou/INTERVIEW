<template>
  <button @click=" modalOpen = true ">
    打开一个对话框
  </button>

<!--  对话框代码-->
  <Teleport to="body">
    <div v-if="modalOpen">
      <div>这是对话框</div>
      <button @click="modalOpen = false">关闭对话框</button>
    </div>
  </Teleport>


</template>
<script lang="ts">
  import {defineComponent,ref} from "vue";
  export default defineComponent({
    name:'ModalButton',
    setup(){
      const modalOpen = ref(false)

      return {
        modalOpen
      }
    }
  })
</script>
<style scoped lang=less>

</style>