<template>
  <div>父级组件</div>
  <ModalButton></ModalButton>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ModalButton from './components/ModalButton.vue'
export default defineComponent({
  name:'APP',
  components:{
    ModalButton
  }
})
</script>