import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/portal",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
  },
  {
    path: "/portal/listings",
    name: "Listings",
    component: () => import("@/views/Listings.vue"),
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
