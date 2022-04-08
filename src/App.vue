<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import CountProvider from "./CountProvider.vue";
</script>

<template>
  <CountProvider>
    <RouterView />
  </CountProvider>
</template>
<style>
@import "@/assets/base.css";
</style>
