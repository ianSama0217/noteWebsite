<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useProjectStore } from "../stores/project";
import { useDisplayStore } from "../stores/isDisplay";
import projectCard from "../components/projectComponents/projectCard.vue";

const projectStore = useProjectStore();
const displayStore = useDisplayStore();
//解構資料
const { projectArray, page } = storeToRefs(projectStore);
const { ProjectCardDisplay } = storeToRefs(displayStore);
const { isDisplayProjectCard } = displayStore;

//取得projectCard index
const setIndex = (index) => {
  page.value = index;

  //在這裡順便執行isDisplayProjectCard function
  isDisplayProjectCard();
};
</script>

<template>
  <div class="singleProjectPage">
    <RouterView />
  </div>
  <div class="body" v-show="ProjectCardDisplay">
    <projectCard @getIndex="setIndex" :cardData="projectArray" />
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

.singleProjectPage {
  padding: 0 5vw;
}
</style>
