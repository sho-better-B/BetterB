import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/diet",
    name: "diet",

    component: () => import("../views/dietView.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",

    component: () => import("../views/blogsView.vue"),
  },
  {
    path: "/signIn",
    name: "signIn",

    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/training",
    name: "training",

    component: () => import("../views/Training.vue"),
  },
  {
    path: "/push",
    name: "push",

    component: () => import("../views/Push.vue"),
  },
  {
    path: "/pull",
    name: "pull",

    component: () => import("../views/Pull.vue"),
  },
  {
    path: "/legs",
    name: "legs",

    component: () => import("../views/Legs.vue"),
  },
  {
    path: "/core",
    name: "core",

    component: () => import("../views/Core.vue"),
  },
  {
    path: "/profile",
    name: "profile",

    component: () => import("../views/profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
