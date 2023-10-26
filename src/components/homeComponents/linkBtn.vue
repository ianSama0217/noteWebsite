<script setup>
import { RouterLink } from "vue-router";
import { useDisplayStore } from "../../stores/isDisplay";

const displayStore = useDisplayStore();
const { isDisplayProjectCard, isDisplayNoteCard } = displayStore;
</script>

<template>
  <div class="linkBar">
    <RouterLink to="/note" class="link" @click="isDisplayNoteCard">
      <i class="fa-solid fa-book icon"></i>
      <p>查看筆記</p>
    </RouterLink>

    <RouterLink to="/project" class="link" @click="isDisplayProjectCard">
      <i class="fa-solid fa-palette icon"></i>
      <p>作品集</p>
    </RouterLink>

    <RouterLink to="/contact" class="link">
      <i class="fa-regular fa-envelope icon"></i>
      <p>聯絡我</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.linkBar {
  display: flex;

  .link {
    border: 2px solid $textLightColor;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    transition: 0.5s ease;

    &:hover {
      background-color: $themeColor;
      box-shadow: 0 10px 10px 2px $BorderColor;
      .icon,
      p {
        color: $textDarkColor;
      }
    }

    .icon {
      margin-right: 0.5rem;
      font-size: 2rem;
      color: $textLightColor;
    }

    p {
      font-size: 1.5rem;
      color: $textLightColor;
    }
  }
}
</style>
