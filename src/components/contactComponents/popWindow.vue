<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useDisplayStore } from "../../stores/isDisplay.js";

const displayStore = useDisplayStore();
const { popWindowDisplay } = storeToRefs(displayStore);
const { isDisplayPopWindow } = displayStore;

const msg = ref("訊息成功寄出!<br/>請等候回覆!");
</script>

<template>
  <div class="popwindow" v-if="popWindowDisplay">
    <div class="msgBox">
      <i class="fa-solid fa-x" @click="isDisplayPopWindow"></i>
      <p v-html="msg"></p>
      <button type="button" @click="isDisplayPopWindow">確認</button>
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

.popwindow {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .msgBox {
    background-color: $textLightColor;
    border: 2px solid $BorderColor;
    border-radius: 8px;
    width: 20vw;
    height: 30vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .fa-x {
      font-size: 1.5rem;
      color: $textDarkColor;
      position: absolute;
      top: 3%;
      right: 3%;

      &:hover {
        cursor: pointer;
      }
    }

    p {
      font-size: 1.2rem;
      color: $textDarkColor;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: $textDarkColor;
      background-color: $themeColor;
      border-radius: 8px;
      border: 2px solid $BorderColor;
      transition: 0.3s ease;

      &:hover {
        cursor: pointer;
        background-color: $iconColor;
      }
    }
  }
}
</style>
