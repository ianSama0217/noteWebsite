<script setup>
import noteContentImg from "./noteContentImg.vue";

const props = defineProps({
  noteText: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="noteText" v-for="item in noteText">
    <h3 class="title">{{ item.title }}</h3>
    <Vue3Prism class="codeboard" :source="item.source"></Vue3Prism>

    <div class="textContent">
      <p class="content">{{ item.content }}</p>
      <p class="hint">{{ item.hint }}</p>
    </div>
    <hr />
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.noteText {
  display: flex;
  flex-direction: column;
  padding: 2.5vh 10vw;
  .title {
    font-size: 2rem;
    color: $textDarkColor;
    align-self: center;
  }

  .codeboard {
    width: 50vw;
    margin: 2rem;
  }

  .textContent {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 2px solid $BorderColor;
    background-color: $textLightColor;
    .content {
      font-size: 1.2rem;
      color: $textDarkColor;
      line-height: 1.5rem;
    }

    .hint {
      font-size: 1.2rem;
      color: red;
      line-height: 1.5rem;
    }
  }
}
</style>
