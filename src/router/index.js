import { createRouter, createWebHistory } from "vue-router";
//匯入project子路徑
import singleProjectView from "../views/projectRouter/singleProjectView.vue";

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
