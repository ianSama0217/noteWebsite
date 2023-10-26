<script setup>
import formIcon from "../components/contactComponents/formIcon.vue";
import popWindow from "../components/contactComponents/popWindow.vue";
</script>

<template>
  <div class="background">
    <formIcon />
    <popWindow />
  </div>
</template>

<style scoped lang="scss">
.background {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
