import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "Home",
    // the use of "@" is a shortcut for the src directory
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/newItem",
    name: "NewItem",
    component: () => import("@/views/NewItem.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/MenuPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
