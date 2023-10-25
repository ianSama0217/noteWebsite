<script setup>
const props = defineProps({
  srcIframe: { type: Array, default: () => [] },
  changeIndex: { type: Number, default: 0 },
});
</script>

<template>
  <iframe
    :src="srcIframe[changeIndex]"
    class="webbox"
    alt="網頁畫面讀取中..."
  ></iframe>
</template>

<style scoped lang="scss">
$themeColor: #f1dec9;
$compontentColor: #a4907c;
$BorderColor: #8d7b68;
$iconColor: #c8b6a6;
$textLightColor: #ffffff;
$textDarkColor: #000000;
.webbox {
  width: 60vw;
  height: 50vh;
  border: 3px solid $BorderColor;
  border-radius: 8px;
}
</style>
