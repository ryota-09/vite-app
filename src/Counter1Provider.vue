<script setup lang="ts">
import { provide } from "vue";
import { count1StoreKey, count1Store } from "./providers/count1provider";
//providerを足していく。
provide(count1StoreKey, count1Store());
</script>

<template>
  <slot />
</template>
