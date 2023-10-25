<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
//匯入useProjectStore資料
import { useProjectStore } from "../../stores/project";
import { useDisplayStore } from "../../stores/isDisplay";

const props = defineProps({
  perviousPage: { type: Function, default: () => {} },
  nextPage: { type: Function, default: () => {} },
});

const projectStore = useProjectStore();
const displayStore = useDisplayStore();
const { page } = storeToRefs(projectStore);
const { ProjectCardDisplay } = storeToRefs(displayStore);
const { isDisplayProjectCard } = displayStore;

const displayProjectView = () => {
  isDisplayProjectCard();
};
</script>

<template>
  <div class="changePageBtn">
    <i
      @click="perviousPage"
      v-show="page >= 1"
      class="fa-solid fa-chevron-left icon"
      title="上一頁"
    ></i>
    <RouterLink @click="displayProjectView" to="/project" class="link"
      >回首頁</RouterLink
    >
    <i
      @click="nextPage"
      v-show="page < 6"
      class="fa-solid fa-chevron-right icon"
      title="下一頁"
    ></i>
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.changePageBtn {
  width: 50vw;
  position: relative;
  margin: 1rem 0;

  .icon {
    font-size: 2rem;
    color: $textDarkColor;
    border-radius: 50%;
    padding: 0.5rem;
    transition: 0.5s ease;

    &:hover {
      cursor: pointer;
      background-color: $textDarkColor;
      color: $textLightColor;
    }
  }

  .fa-chevron-left {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
  }

  .fa-chevron-right {
    position: absolute;
    top: 50%;
    left: 95%;
    transform: translate(-50%, -50%);
  }
  .link {
    text-decoration: none;
    font-size: 1.5rem;
    color: $textDarkColor;
    border: 2px solid $textDarkColor;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    transition: 0.5s ease;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
      color: $textLightColor;
      background-color: $textDarkColor;
    }
  }
}
</style>
