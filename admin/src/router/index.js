// import store from "../store/index";
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
    path: "/portal/subscribers",
    name: "Subscribers",
    component: () => import("@/views/Subscribers.vue"),
  },
  {
    path: "/portal/contact/:from",
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

// eslint-disable-next-line
// router.beforeEach(async (to, from, next) => {
//   if (store.state.checkLoginStatus === null) {
//     const data = await store.dispatch("checkLogin");
//     if (!data.success) {
//       next();
//     } else {
//       next({ name: "Login" });
//     }
//   } else {
//     if (!store.state.checkLoginStatus.success) {
//       next();
//     } else {
//       next({ name: "Login" });
//     }
//   }
// });

export default router;
