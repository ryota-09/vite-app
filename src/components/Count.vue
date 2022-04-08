<script setup lang="ts">
import { count1StoreKey } from "@/providers/count1provider";
import { inject } from "vue";
const count1Store = inject(count1StoreKey);

if(!count1Store){
  throw new Error("")
}

</script>

<template>
  <br />
  <p>Countエリア</p>
  <br />
  <button type="button" v-on:click="count1Store.decrement">-</button>
  <span>count1の値 : <span class="count1">{{ count1Store.count1 }}</span></span>
  <button type="button" v-on:click="count1Store.increment">+</button>
</template>

<style scoped>
.count1 {
  /* v-bind('')  ''忘れやすい */
  background-color: v-bind('count1Store.isEven.value ? "yellow" : "orange"');
}
</style>
