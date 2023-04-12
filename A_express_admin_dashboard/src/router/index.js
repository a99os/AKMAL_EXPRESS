import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",

      component: () => import("../views/Dashboard/Dashboard.vue"),
    },

    {
      path: "/addstuff",

      component: () => import("../views/Employers/Employers.vue"),
    },
    {
      path: "/neworder",

      component: () => import("../views/Orders/NewOrder.vue"),
    },
    {
      path: "/orders",

      component: () => import("../views/Orders/Orders.vue"),
    },
    {
      path: "/orders/:id",

      component: () => import("../views/Orders/OrderStatus.vue"),
    },
    {
      path: "/neworder/:id",

      component: () => import("../views/Orders/OrderStatusSecond.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../components/NotFound/NotFound.vue"),
    },
  ],
});
let image = undefined;
if (image) {
}

import checkToken from "../helper/checkToken";
import { loginStore } from "../stores/Login/login";
router.beforeEach(async () => {
  const result = await checkToken(localStorage.getItem("token"));
  if (result?.data?.isValid) {
    loginStore().isLogin = true;
    loginStore().role = result.data.admin.role;
    localStorage.setItem("isLogin", true);
    localStorage.setItem("role", result.data.admin.role);
    localStorage.setItem("username", result.data.admin.dataValues.user_name);
    return true;
  } else {
    loginStore().isLogin = false;
    localStorage.clear();
    return true;
  }
});

export default router;
