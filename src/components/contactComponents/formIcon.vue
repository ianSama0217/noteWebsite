<script setup>
import { useDisplayStore } from "../../stores/isDisplay.js";

const displayStore = useDisplayStore();
const { isDisplayPopWindow } = displayStore;
</script>

<template>
  <form action="">
    <div class="singleBox">
      <label for="name">姓名</label>
      <input
        type="text"
        name="name"
        min="2"
        max="30"
        placeholder="請輸入姓名"
      />
    </div>

    <div class="singleBox">
      <label for="email">信箱</label>
      <input type="email" name="email" placeholder="請輸入信箱" />
    </div>

    <div class="singleBox">
      <label for="msg">想說的話</label>
      <textArea name="msg" placeholder="輸入想傳遞的訊息"></textArea>
    </div>
    <button type="button" @click="isDisplayPopWindow">送出</button>
  </form>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;

form {
  background-color: $themeColor;
  border: 2px solid $BorderColor;
  border-radius: 8px;
  width: 25vw;
  height: 65vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .singleBox {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    input[type="text"],
    input[type="email"] {
      background-color: $themeColor;
      height: 1.5rem;
      border: none;
      border-bottom: 1px solid $textDarkColor;
      font-size: 1rem;
    }

    textarea {
      height: 20vh;
      font-size: 1rem;
      border: 1px solid $textDarkColor;
    }
  }

  button {
    align-self: center;
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
</style>
