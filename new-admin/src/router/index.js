import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/properties",
    name: "Properties",
    component: () => import("@/views/Properties.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("@/views/News.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
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

export default router;
