<script setup>
import { storeToRefs } from "pinia";
import { useHomeStore } from "../stores/home.js";

const homeStore = useHomeStore();
const { textContent } = storeToRefs(homeStore);

import linkBtn from "../components/homeComponents/linkBtn.vue";
</script>

<template>
  <div class="body">
    <div class="profileImg">
      <img src="../../public/homeImg/helloween-giwawa.jpg" alt="profile-img" />
    </div>

    <div class="textContent">
      <p v-html="textContent"></p>

      <div class="linkBar">
        <linkBtn />
      </div>
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
  padding: 0 10vw;
  display: flex;
  justify-content: space-between;

  .profileImg {
    border: 2px solid $BorderColor;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 30vw;
      width: 30vw;
    }
  }

  .textContent {
    border: 2px solid $BorderColor;
    border-radius: 8px;
    background-image: url("../../public/homeImg/dog-look.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 10px 6px -6px $BorderColor;
    position: relative;

    p {
      font-size: 1.2rem;
      color: $textDarkColor;
      line-height: 1.8rem;
    }
  }
}
</style>
