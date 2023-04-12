import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/UserResult.vue"),
    },
  ],
});

export default router;
