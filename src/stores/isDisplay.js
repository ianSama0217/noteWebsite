import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDisplayStore = defineStore("display", () => {
  const ProjectCardDisplay = ref(true);
  const NoteCardDisplay = ref(true);
  const popWindowDisplay = ref(false);

  const isDisplayProjectCard = () => {
    ProjectCardDisplay.value = true;
  };
  const notDisplayProjectCard = () => {
    ProjectCardDisplay.value = false;
  };

  const isDisplayNoteCard = () => {
    NoteCardDisplay.value = true;
  };
  const notDisplayNoteCard = () => {
    NoteCardDisplay.value = false;
  };

  const isDisplayPopWindow = () => {
    popWindowDisplay.value = !popWindowDisplay.value;
  };

  return {
    ProjectCardDisplay,
    isDisplayProjectCard,
    notDisplayProjectCard,
    NoteCardDisplay,
    isDisplayNoteCard,
    notDisplayNoteCard,
    popWindowDisplay,
    isDisplayPopWindow,
  };
});
