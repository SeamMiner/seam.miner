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
      window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/lod_hs",
    name: "LOD_HS",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/LeadOfDig_2021.pdf";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/lod_final",
    name: "LOD_FINAL",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/LeadOfDig_final_2021.pdf";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/here_2020",
    name: "HERE_2020",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/Here_2020.jpg";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/vezdekod_2020",
    name: "vezdekod_2020",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/Vezdekod_VK_2020.pdf";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/bonch_hack_2019",
    name: "bonch_hack_2019",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/BonchDev_Hack_2019.jpg";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/wsr_2020",
    name: "wsr_2020",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/BonchSkills_2020.jpg";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/wsr_2021",
    name: "wsr_2021",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/BonchSkills_2021.jpg";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/wsr_2022",
    name: "wsr_2022",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/WSR_2022.pdf";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/cv_ru",
    name: "cv_ru",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/CV_RU.pdf";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/cv_en",
    name: "cv_en",
    beforeEnter: (to, from, next) => {
      window.location.href = "../files/CV_EN.pdf";
    },
    component: () => import("@/components/Loader/Loader.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/Loader/Loader.vue"),
    redirect: {
      name: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
