<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const errorMsg = ref("輸入網址錯誤，請確認網址是否正確");
</script>

<template>
  <div class="body">
    <h1>{{ errorMsg }}</h1>

    <div class="imgbox">
      <RouterLink to="/" class="link" @click="isDisplayNoteCard">
        <i class="fa-solid fa-house-chimney"></i>
        <p>回首頁</p>
      </RouterLink>
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

.body {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: $textDarkColor;
  }

  .imgbox {
    height: 80vh;
    width: 100%;
    background-image: url("../../public/homeImg/tired-giwawa.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      border: 2px solid $textLightColor;
      border-radius: 8px;
      transition: 0.5s ease;

      &:hover {
        background-color: $textLightColor;
        box-shadow: 0 10px 6px -6px $textDarkColor;

        .fa-solid,
        p {
          color: $textDarkColor;
        }
      }

      .fa-solid {
        font-size: 2rem;
        color: $textLightColor;
        margin-right: 0.5rem;
      }
      p {
        font-size: 1.5rem;
        color: $textLightColor;
      }
    }
  }
}
</style>
