<script setup>
import { RouterLink } from "vue-router";
import { useDisplayStore } from "../../stores/isDisplay.js";

const props = defineProps({
  noteTitle: {
    type: String,
    default: "",
  },
  noteList: {
    type: Array,
    default: () => [],
  },
  noteLink: {
    type: Array,
    default: () => [],
  },
  noteScollerY: {
    type: Array,
    default: () => [],
  },
});

const displayStore = useDisplayStore();

const { notDisplayNoteCard } = displayStore;

//點擊指定RouterLink，跳轉至新頁面指定位置(y軸)
const scollerTo = (y) => {
  window.scroll(0, y);
  // console.log(y);

  //關閉彈跳視窗
  notDisplayNoteCard();
};
</script>

<template>
  <div class="noteCard">
    <h3>{{ noteTitle }}</h3>
    <RouterLink
      @click="scollerTo(noteScollerY[index])"
      v-for="(item, index) in noteList"
      class="link"
      :to="noteLink[index]"
      >{{ item }}</RouterLink
    >
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.noteCard {
  width: 20vw;
  border: 3px solid $BorderColor;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  margin: 1rem;
  background-color: $themeColor;

  h3 {
    font-size: 1.5rem;
    color: $textDarkColor;
    align-self: center;
    margin-bottom: 0.5rem;
  }

  .link {
    text-decoration: none;
    font-size: 1.2rem;
    color: $textDarkColor;
    padding: 0.5rem 0;
    transition: 0.5s ease;

    &:hover {
      background-color: $BorderColor;
      color: $textLightColor;
    }
  }
}
</style>
