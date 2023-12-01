import { createRouter, createWebHistory } from "@ionic/vue-router";
// have to separately install this storage manager -> prevents data from being cleared like in localStorage
import { Preferences } from "@capacitor/preferences";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
    beforeEnter: async () => {
      const isLoggedIn = await checkLogin();
      if (isLoggedIn) {
        return "/menu";
      } else {
        return true;
      }
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/MenuPage.vue"),
    beforeEnter: async () => {
      const isLoggedIn = await checkLogin();
      if (!isLoggedIn) {
        return "/login";
      } else {
        return true;
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const checkLogin = async (): Promise<boolean> => {
  const { value } = await Preferences.get({ key: "user" });

  if (value) {
    return true;
  } else {
    return false;
  }
};

export default router;
