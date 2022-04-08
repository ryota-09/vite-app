<script setup lang="ts">
import { provide } from "vue";
import { count1StoreKey, useCount1Store } from "./providers/useCount1provider";
import { count2StoreKey, useCount2Store } from "./providers/useCount2provider";
//providerを足していく。
provide(count1StoreKey, useCount1Store());
provide(count2StoreKey, useCount2Store());
</script>

<template>
  <slot />
</template>
