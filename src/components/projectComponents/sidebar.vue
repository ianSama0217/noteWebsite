<script setup>
const props = defineProps({
  sidebarContent: { type: Array, default: () => [] },
  changeIndex: { type: Number, default: 0 },
});
</script>

<template>
  <div class="content">
    <h3>{{ sidebarContent[changeIndex].title }}</h3>
    <h5 class="contentTitle">使用工具</h5>
    <p class="mainContent" v-html="sidebarContent[changeIndex].lang"></p>
    <h5 class="contentTitle">網頁功能</h5>
    <p class="mainContent">{{ sidebarContent[changeIndex].content }}</p>
  </div>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.content {
  border: 3px solid $BorderColor;
  border-radius: 8px;
  background-color: $themeColor;
  width: 20vw;
  height: 60vh;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.5rem;
    align-self: center;
    color: $textDarkColor;
  }

  .contentTitle {
    font-size: 1.2rem;
    color: $textDarkColor;
    margin: 1rem 0 0.5rem 0;
  }

  .mainContent {
    content: 1.2rem;
    color: $textDarkColor;
    line-height: 1.2rem;
  }
}
</style>
