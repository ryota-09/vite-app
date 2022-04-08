<script setup lang="ts">
import { count2StoreKey } from "@/providers/useCount2provider";
import { inject } from "vue";
const count2Store = inject(count2StoreKey);

if (!count2Store) {
  throw new Error("");
}
</script>

<template>
  <p>Another Count エリア</p>
  <p>(2つめのプロバイダーを利用)</p>
  <br />
  <el-space wrap>
    <button type="button" v-on:click="count2Store.half">Half</button>
    <span
      >count2の値 : <span class="count2">{{ count2Store.count2 }}</span></span
    >
    <button type="button" v-on:click="count2Store.double">Double</button>
  </el-space>
    <div v-if="count2Store.count2.value >= 10">
      <span>\ Over 10 !! /</span>
    </div>
</template>
