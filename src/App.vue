<script setup>
import { RouterView } from "vue-router";

import navbar from "./components/navbar.vue";
import foo from "./components/foo.vue";
</script>

<template>
  <div class="body">
    <navbar />
    <RouterView />
    <foo />
  </div>
  <img class="backgroundImg" src="../public/background.jpg" />
</template>

<style scoped lang="scss">
.backgroundImg {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0%;
  left: 0%;
  filter: opacity(0.6);
  z-index: -1;
}
</style>
