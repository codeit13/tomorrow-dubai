import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/buy",
    name: "Buy",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/sell",
    name: "Sell",
    component: () => import("@/views/Sell.vue"),
  },
  {
    path: "/search/:query",
    name: "Search",
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/property/:titleSlug",
    name: "Property",
    component: () => import("@/views/Property.vue"),
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
  {
    path: "/offplan",
    name: "offplan",
    component: () => import("@/views/OffPlan.vue"),
  },
  {
    path: "/partner",
    name: "Partner",
    component: () => import("@/views/Partner.vue"),
  },
  {
    path: "/agents",
    name: "agents",
    component: () => import("@/views/Agents.vue"),
  },
  {
    path: "/agent",
    name: "agent",
    component: () => import("@/views/Agent.vue"),
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
