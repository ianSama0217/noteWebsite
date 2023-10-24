<script setup>
import { storeToRefs } from "pinia";
import { useProjectStore } from "../stores/project";
import projectCard from "../components/projectComponents/projectCard.vue";

const projectStore = useProjectStore();
//解構資料
const { projectObject } = storeToRefs(projectStore);
</script>

<template>
  <div class="body">
    <projectCard :cardData="projectObject" />
  </div>
</template>

<style scoped lang="scss">
.body {
  padding: 0 10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
