<script setup lang="ts">
import { count1StoreKey } from "@/providers/useCount1provider";
import { inject } from "vue";
const count1Store = inject(count1StoreKey);

if (!count1Store) {
  throw new Error("");
}
</script>

<template>
  <br />
  <p>Countエリア</p>
  <p>(1つめのプロバイダーを利用)</p>
  <el-space wrap>
    <el-button type="info" v-on:click="count1Store.decrement">-</el-button>
    <span
      >count1の値 : <span class="count1">{{ count1Store.count1 }}</span></span
    >
    <el-button type="warning" v-on:click="count1Store.increment">+</el-button>
  </el-space>
</template>

<style scoped>
.count1 {
  /* v-bind('')  ''忘れやすい */
  background-color: v-bind('count1Store.isEven.value ? "yellow" : "orange"');
}
</style>
