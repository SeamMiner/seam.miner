import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/tg",
    name: "Telegram",
    beforeEnter(to, from, next) {
      window.location.href = "https://t.me/SeamMiner";
    },
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  {
    path: "/mail",
    name: "Email",
    beforeEnter(to, from, next) {
      window.location.href = "mailto:niatit130@gmail.com?subject=Order Site";
    },
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  {
    path: "/gh",
    name: "GitHub",
    beforeEnter(to, from, next) {
      window.location.href = "https://github.com/SeamMiner";
    },
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  {
    path: "/upwork",
    name: "Upwork",
    beforeEnter(to, from, next) {
      window.location.href =
        "https://www.upwork.com/freelancers/~01a9e70f463182bc82";
    },
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    redirect: "",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
