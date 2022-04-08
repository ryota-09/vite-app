<script setup lang="ts">
import { provide } from "vue";
import { count1providerKey, count1Provider } from "./providers/count1provider";
//providerを足していく。
provide(count1providerKey, count1Provider());
</script>

<template>
  <slot />
</template>
