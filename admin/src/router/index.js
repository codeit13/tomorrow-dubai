import store from "../store/index";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/portal/login",
    name: "Login",
    component: () => import("@/views/Authentication/Login.vue"),
  },
  {
    path: "/portal",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/portal/listings",
    name: "Listings",
    component: () => import("@/views/Listings.vue"),
  },
  {
    path: "/portal/properties",
    name: "Properties",
    component: () => import("@/views/Properties.vue"),
  },
  {
    path: "/portal/news",
    name: "News",
    component: () => import("@/views/News.vue"),
  },
  {
    path: "/portal/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/portal/agents",
    name: "Agents",
    component: () => import("@/views/Agents.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from) => {
  console.log(
    "store.state.checkLoginStatus: ",
    store.state.checkLoginStatus,
    from
  );

  if (store.state.checkLoginStatus == null) {
    // make an api call to check login status
    const data = await store.dispatch("checkLogin");
    if (data.status) {
      return to;
    } else {
      return { name: "Login" };
    }
  } else {
    // check the login status in store
    if (store.state.checkLoginStatus.status) {
      return to;
    } else {
      return { name: "Login" };
    }
  }

  // if (store.state.checkLoginStatus == null) {
  //   const data = await store.dispatch("checkLogin");

  //   if (
  //     // make sure the user is authenticated
  //     !data.status &&
  //     // ❗️ Avoid an infinite redirect
  //     to.name !== "Login"
  //   ) {
  //     // redirect the user to the login page
  //     return { name: "Login" };
  //   } else {
  //     return { name: "Dashboard" };
  //   }
  // } else {
  //   if (
  //     // make sure the user is authenticated
  //     store.state.checkLoginStatus.data.status
  //   ) {
  //     // redirect the user to the login page
  //     next();
  //   } else {
  //     return { name: "Login" };
  //   }
  // }
});

export default router;
