<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import { useDisplayStore } from "../stores/isDisplay.js";
import noteCardGroup from "../components/noteComponents/noteCardGroup.vue";

const displayStore = useDisplayStore();
const { NoteCardDisplay } = storeToRefs(displayStore);
</script>

<template>
  <div class="notePage">
    <RouterView />
  </div>

  <div class="body" v-if="NoteCardDisplay">
    <noteCardGroup />
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
}
</style>
