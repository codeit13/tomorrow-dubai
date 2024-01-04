import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/listing",
    name: "Listing",
    component: () => import("@/views/Listing.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/neighbourhood",
    name: "Neighbourhood",
    component: () => import("@/views/Neighbourhood.vue"),
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
