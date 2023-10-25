<script setup>
import { storeToRefs } from "pinia";
//匯入組件
import noteCardSidebar from "../../components/noteComponents/noteCardSidebar.vue";
import noteContent from "../../components/noteComponents/noteContent.vue";
import { useNoteContentStore } from "../../stores/noteContent.js";

const noteContentStore = useNoteContentStore();
const { lifecycleNote } = storeToRefs(noteContentStore);
</script>

<template>
  <div class="directivesNoteContent">
    <div class="sidebar">
      <noteCardSidebar />
    </div>

    <div class="noteContent">
      <noteContent :noteText="lifecycleNote" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.directivesNoteContent {
  display: flex;
  position: relative;

  .sidebar {
    height: 100vh;
    width: 60vw;
    position: sticky;
    top: 0%;
    overflow-y: scroll;
  }
  .noteContent {
    display: flex;
    flex-direction: column;
  }
}
</style>
