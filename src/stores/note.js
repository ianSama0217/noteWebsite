import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useNoteStore = defineStore("note", () => {
  const DirectivesTitle = ref("Directives");
  //router to=""的值
  const DirectivesLink = ref([
    "/note/Directives/v-text",
    "/note/Directives/v-html",
    "/note/Directives/v-if",
    "/note/Directives/v-else-if",
    "/note/Directives/v-else",
    "/note/Directives/v-for",
    "/note/Directives/v-on",
    "/note/Directives/v-model",
    "/note/Directives/v-bind",
    "/note/Directives/v-model",
    "/note/Directives/v-slot",
  ]);
  //標籤內名稱<routerlink>DirectivesLinkName</routerlink>
  const DirectivesList = ref([
    "v-text",
    "v-html",
    "v-if",
    "v-else-if",
    "v-else",
    "v-for",
    "v-on",
    "v-model",
    "v-bind",
    "v-model",
    "v-slot",
  ]);

  const RouterTitle = ref("Router");
  //router to=""的值
  const RouterLinkName = ref([
    "/note/Router/About router",
    "/note/Router/RouterLink",
    "/note/Router/Dynamic routing",
  ]);
  //標籤內名稱<routerlink>RouterDocLinkName</routerlink>
  const RouterList = ref(["About router", "RouterLink", "Dynamic routing"]);

  const LifecycleTitle = ref("Life Cycle");
  //router to=""的值
  const LifecycleLink = ref([
    "/note/LifeCycle/About life cycle",
    "/note/LifeCycle/onMounted()",
    "/note/LifeCycle/onUpdated()",
    "/note/LifeCycle/onUnmounted()",
    "/note/LifeCycle/onBeforeMount()",
    "/note/LifeCycle/onBeforeUpdate()",
    "/note/LifeCycle/onBeforeUnmount()",
  ]);
  //標籤內名稱<routerlink>LifecycleLinkName</routerlink>
  const LifecycleList = ref([
    "About life cycle",
    "onMounted()",
    "onUpdated()",
    "onUnmounted()",
    "onBeforeMount()",
    "onBeforeUpdate()",
    "onBeforeUnmount()",
  ]);

  const CompositionAPITitle = ref("Composition API");
  //router to=""的值
  const CompositionAPILink = ref([
    "/note/CompositionAPI/ref()",
    "/note/CompositionAPI/reactive()",
    "/note/CompositionAPI/computed()",
    "/note/CompositionAPI/readonly()",
    "/note/CompositionAPI/watch()",
  ]);
  //標籤內名稱<routerlink>CompositionAPILink</routerlink>
  const CompositionAPIList = ref([
    "ref()",
    "reactive()",
    "computed()",
    "readonly()",
    "watch()",
  ]);

  const ComponentTitle = ref("Compontent");
  //router to=""的值
  const ComponentLink = ref([
    "/note/Compontent/props",
    "/note/Compontent/emit",
    "/note/Compontent/provide",
    "/note/Compontent/inject",
  ]);
  //標籤內名稱<routerlink>ComponentLinkName</routerlink>
  const ComponentList = ref(["props", "emit", "provide", "inject"]);

  const PiniaTitle = ref("Pinia");
  //router to=""的值
  const PiniaLink = ref(["/note/Pinia/About Pinia"]);
  //標籤內名稱<routerlink>PiniaLinkName</routerlink>
  const PiniaList = ref(["About Pinia"]);

  return {
    DirectivesTitle,
    DirectivesList,
    DirectivesLink,
    RouterTitle,
    RouterLinkName,
    RouterList,
    LifecycleTitle,
    LifecycleLink,
    LifecycleList,
    CompositionAPITitle,
    CompositionAPILink,
    CompositionAPIList,
    ComponentTitle,
    ComponentLink,
    ComponentList,
    PiniaTitle,
    PiniaLink,
    PiniaList,
  };
});
