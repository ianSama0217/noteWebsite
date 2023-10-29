<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useNoteStore } from "../../stores/note.js";
import { useDisplayStore } from "../../stores/isDisplay.js";
import NoteCard from "./noteCard.vue";

const noteStore = useNoteStore();
const displayStore = useDisplayStore();
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

const { isDisplayNoteCard } = displayStore;

const scollerYtop = () => {
  window.scroll(0, 0);

  //讓noteCardGroup v-if為true
  isDisplayNoteCard();
};
</script>

<template>
  <div class="column">
    <RouterLink to="/note" @click="scollerYtop" class="link"
      ><i class="fa-brands fa-vuejs"></i
    ></RouterLink>
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
.column {
  display: flex;
  flex-direction: column;

  .link {
    align-self: center;
    .fa-vuejs {
      font-size: 10rem;
      color: #4dba87;
    }
  }
}
</style>
