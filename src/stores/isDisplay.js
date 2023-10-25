import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDisplayStore = defineStore("display", () => {
  const ProjectCardDisplay = ref(true);

  const isDisplayProjectCard = () => {
    ProjectCardDisplay.value = true;
  };
  const notDisplayProjectCard = () => {
    ProjectCardDisplay.value = false;
  };

  return { ProjectCardDisplay, isDisplayProjectCard, notDisplayProjectCard };
});
