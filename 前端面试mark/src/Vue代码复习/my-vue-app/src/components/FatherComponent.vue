<script setup>

import ChildrenComponent from "./ChildrenComponent.vue";
import {onMounted} from "vue";

</script>

<template>
  <div class="father">
    <h1>这是父组件</h1>
    <children-component></children-component>
  </div>

</template>

<style scoped lang="less">
.father{
  width: 500px;
  height: 500px;
  background: red;

}
</style>