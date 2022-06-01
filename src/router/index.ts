import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/bio",
    name: "BIO",
    beforeEnter: (to, from, next) => {
      window.location.href =
        "https://youtu.be/dQw4w9WgXcQ";
    },
    component: () => import("@/views/HomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
