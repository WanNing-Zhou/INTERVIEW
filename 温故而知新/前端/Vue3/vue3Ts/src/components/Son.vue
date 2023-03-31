<template>
  <h3>Son子级组件</h3>
  <hr>
  <GrandSon/>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import GrandSon from "./GrandSon.vue";
export default defineComponent({
  name:'son',
  components:{
    GrandSon
  },
  setup(){

    return {

    }
  }
})
</script>
<style scoped lang=less>

</style>