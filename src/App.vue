<script setup>
import { RouterView } from "vue-router";

import navbar from "./components/navbar.vue";
</script>

<template>
  <div class="body">
    <navbar />
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
