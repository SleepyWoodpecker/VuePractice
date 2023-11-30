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
    beforeEnter: (to) => checkLoginMenu(to),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/MenuPage.vue"),
    beforeEnter: (to) => checkLoginMenu(to),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const checkLoginMenu = async (
  to: RouteLocationNormalized
): Promise<boolean | string> => {
  const { value } = await Preferences.get({ key: "user" });
  // not ideal, but for now, I just check if the user has a token or not

  // if user does not have something in localstorage and is not trying to log in, make them log in
  if (!value && to.path !== "/login") {
    return "/login";
  }

  // else if the user has a token, but is trying to access the login page, redirect to the menu page -> this means that I have to make another guard if I make more pages
  else if (value && to.path !== "/menu") {
    return "/menu";
  }
  return true;
};

export default router;
