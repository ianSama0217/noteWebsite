<script setup>
import { storeToRefs } from "pinia";
import { useNoteStore } from "../../stores/note.js";
import NoteCard from "./noteCard.vue";

const noteStore = useNoteStore();
//解構noteStore內的資料
const {
  DirectivesTitle,
  DirectivesList,
  DirectivesLink,
  DirectivesScollerY,
  RouterTitle,
  RouterLinkName,
  RouterList,
  RouterScollerY,
  LifecycleTitle,
  LifecycleLink,
  LifecycleList,
  LifeCycleScollerY,
  CompositionAPITitle,
  CompositionAPILink,
  CompositionAPIList,
  CompositionAPIScollerY,
  ComponentTitle,
  ComponentLink,
  ComponentList,
  ComponentScollerY,
  PiniaTitle,
  PiniaLink,
  PiniaList,
} = storeToRefs(noteStore);
</script>

<template>
  <div class="waterfall">
    <!-- Directives -->
    <NoteCard
      :noteTitle="DirectivesTitle"
      :noteList="DirectivesList"
      :noteLink="DirectivesLink"
      :noteScollerY="DirectivesScollerY"
      class="noteCard"
    />
    <!-- Router -->
    <NoteCard
      :noteTitle="RouterTitle"
      :noteList="RouterList"
      :noteLink="RouterLinkName"
      :noteScollerY="RouterScollerY"
      class="noteCard"
    />
    <!-- Lifecycle -->
    <NoteCard
      :noteTitle="LifecycleTitle"
      :noteList="LifecycleList"
      :noteLink="LifecycleLink"
      :noteScollerY="LifeCycleScollerY"
      class="noteCard"
    />
    <!-- CompositionAPI -->
    <NoteCard
      :noteTitle="CompositionAPITitle"
      :noteList="CompositionAPIList"
      :noteLink="CompositionAPILink"
      :noteScollerY="CompositionAPIScollerY"
      class="noteCard"
    />
    <!-- Component -->
    <NoteCard
      :noteTitle="ComponentTitle"
      :noteList="ComponentList"
      :noteLink="ComponentLink"
      :noteScollerY="ComponentScollerY"
      class="noteCard"
    />
    <!-- Pinia -->
    <NoteCard
      :noteTitle="PiniaTitle"
      :noteList="PiniaList"
      :noteLink="PiniaLink"
      class="noteCard"
    />
  </div>
</template>

<style scoped lang="scss">
.waterfall {
  column-count: 3;
}
.noteCard {
  break-inside: avoid;
}
</style>
