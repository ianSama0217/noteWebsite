<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
//匯入useStore資料
import { useDisplayStore } from "../stores/isDisplay";

const displayStore = useDisplayStore();
const { isDisplayProjectCard, isDisplayNoteCard } = displayStore;
</script>

<template>
  <div class="navbar">
    <i class="fa-solid fa-dog homeIcon"></i>

    <div class="center">
      <RouterLink class="link" to="/">首頁</RouterLink>
      <RouterLink @click="isDisplayNoteCard" class="link" to="/note"
        >筆記內容</RouterLink
      >
      <RouterLink @click="isDisplayProjectCard" class="link" to="/project"
        >作品集</RouterLink
      >
    </div>

    <div class="iconbox">
      <i class="fa-solid fa-sun icon"></i>

      <a href="https://github.com/ianSama0217" target="_blank"
        ><i class="fa-brands fa-github icon"></i
      ></a>

      <a href="https://discord.com/" target="_blank"
        ><i class="fa-brands fa-discord icon"></i
      ></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.navbar {
  background-color: $iconColor;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 5vh;
  .homeIcon {
    font-size: 2.5rem;
  }
  .center {
    width: 40%;
    display: flex;
    justify-content: space-between;
    .link {
      text-decoration: none;
      color: $textDarkColor;
      font-size: 2rem;
      transition: 0.3s ease;

      &:hover {
        color: $textLightColor;
      }
    }
  }

  .iconbox {
    width: 20%;
    display: flex;
    justify-content: space-around;
    .icon {
      font-size: 2rem;
      color: $textDarkColor;
      transition: 0.3s ease;

      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
}
</style>
