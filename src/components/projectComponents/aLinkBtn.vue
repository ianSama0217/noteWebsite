<script setup>
const props = defineProps({
  websrc: { type: Array, default: () => [] },
  githubsrc: { type: Array, default: () => [] },
  changeIndex: { type: Number, default: 0 },
});
</script>

<template>
  <div class="alinkBox">
    <div class="singleAlink">
      <img src="../../../public/icon/netlify-icon.svg" class="icon" />
      <a :href="websrc[changeIndex]" target="_blank" class="alink">前往網站</a>
    </div>

    <div class="singleAlink">
      <img src="../../../public/icon/github-icon.svg" class="icon" />
      <a :href="githubsrc[changeIndex]" target="_blank" class="alink">Github</a>
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
.alinkBox {
  width: 50vw;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;

  .singleAlink {
    padding: 0.5rem;
    border: 1px solid red;
    border: 2px solid $textDarkColor;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.2);
      background-color: $textDarkColor;

      .alink {
        color: $textLightColor;
      }

      .icon {
        filter: invert(100%);
      }
    }

    .alink {
      text-decoration: none;
      font-size: 1.2rem;
      color: $textDarkColor;
    }
    .icon {
      height: 3vw;
      width: 3vw;
      margin-right: 1rem;
    }
  }
}
</style>
