import { createRouter, createWebHistory } from "vue-router";
//匯入project子路徑
import singleProjectView from "../views/projectRouter/singleProjectView.vue";
//匯入note子路徑
import DirectivesNoteView from "../views/noteRouter/DirectivesNoteView.vue";
import RouterNoteView from "../views/noteRouter/RouterNoteView.vue";
import LifeCycleNoteView from "../views/noteRouter/LifeCycleNoteView.vue";
import CompositionAPINoteView from "../views/noteRouter/CompositionAPINoteView.vue";
import CompontentNoteView from "../views/noteRouter/CompontentNoteView.vue";
import PiniaNoteView from "../views/noteRouter/PiniaNoteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/note",
      name: "note",
      component: () => import("../views/NoteView.vue"),
      children: [
        {
          path: "/note/Directives/:domain",
          component: DirectivesNoteView,
        },
        {
          path: "/note/Router/:domain",
          component: RouterNoteView,
        },
        {
          path: "/note/LifeCycle/:domain",
          component: LifeCycleNoteView,
        },
        {
          path: "/note/CompositionAPI/:domain",
          component: CompositionAPINoteView,
        },
        {
          path: "/note/Compontent/:domain",
          component: CompontentNoteView,
        },
        {
          path: "/note/Pinia/:domain",
          component: PiniaNoteView,
        },
      ],
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
      children: [
        {
          path: "/project/:domain",
          component: singleProjectView,
        },
      ],
    },
  ],
});

export default router;
