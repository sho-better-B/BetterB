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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/workout",
    name: "workout",

    component: () => import("../views/workoutView.vue"),
  },

  {
    path: "/diet",
    name: "diet",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dietView.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/blogsView.vue"),
  },
  {
    path: "/signIn",
    name: "signIn",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
