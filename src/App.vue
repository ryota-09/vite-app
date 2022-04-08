<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Counter1Provider from "./Counter1Provider.vue";
</script>

<template>
  <Counter1Provider>
    <RouterView />
  </Counter1Provider>
</template>
<style>
@import "@/assets/base.css";
</style>
