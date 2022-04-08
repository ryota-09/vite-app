<script setup lang="ts">
import Count from "@/components/Count.vue";
import AnotherCount from "@/components/AnotherCount.vue";
import { ShoppingCart } from "@element-plus/icons-vue";
</script>

<template>
  <h1>Counter</h1>
  <h2>~ Vite, Vue3, TypeScript, provide/inject, Element+ ~</h2>
  <!-- コンポーネントはインストールするだけでOK -->
  <Count />
  <el-divider
    ><el-icon><shopping-cart /></el-icon
  ></el-divider>
  <AnotherCount />
  <br />
  <h3 class="el">
    位置の設定にはElement+の
    <el-link
      type="primary"
      href="https://element-plus.org/en-US/component/layout.html"
      >Layout</el-link
    >と<el-link
      type="primary"
      href="https://element-plus.org/en-US/component/space.html"
      >Space</el-link
    >が便利そうです！
  </h3>
  <h3>
    星の評価機能は<el-link
      type="primary"
      href="https://element-plus.org/en-US/component/rate.html"
      >Rate</el-link
    >が使えそうです。
  </h3>
</template>

<style>
.el {
  margin: 40px;
}
</style>
