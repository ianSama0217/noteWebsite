<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  cardData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="projectCard" v-for="item in cardData">
    <h3>{{ item.title }}</h3>

    <img :src="item.img" alt="aboutWebImg" />

    <RouterLink :to="item.link" class="link">詳細資料</RouterLink>
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.projectCard {
  background-color: $themeColor;
  width: 20vw;
  height: 25vw;
  border: 3px solid $BorderColor;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;

  h3 {
    font-size: 1.5rem;
    color: $textDarkColor;
  }

  img {
    border-radius: 8px;
    height: 15vw;
    width: 15vw;
    transition: 0.3s ease;

    &:hover {
      padding: 0.3rem;
      border: 3px solid $compontentColor;
    }
  }

  .link {
    text-decoration: none;
    color: $textDarkColor;
    border: 3px solid $compontentColor;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    transition: 0.5s ease;

    &:hover {
      background-color: $compontentColor;
      color: $textLightColor;
    }
  }
}
</style>
