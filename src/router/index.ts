import { createRouter, createWebHistory } from "@ionic/vue-router";
// have to separately install this storage manager -> prevents data from being cleared like in localStorage
import { Preferences } from "@capacitor/preferences";
import { RouteLocationNormalized, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
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
    beforeEnter: (to) => checkLogin(to),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const checkLogin = async (
  to: RouteLocationNormalized
): Promise<boolean | string> => {
  const { value } = await Preferences.get({ key: "user" });
  // not ideal, but for now, I just check if the user has a token or not\
  console.log(value);
  console.log(to);
  if (value && to.name !== "Login") {
    return "/menu";
  } else {
    return "/login";
  }
};

export default router;
