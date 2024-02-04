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
    path: "/listing/:address/:propertyName/:listingName",
    name: "Listing",
    component: () => import("@/views/Listing.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/neighborhood",
    name: "neighborhood",
    component: () => import("@/views/Neighborhood.vue"),
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
    path: "/agent/:name",
    name: "Agent",
    component: () => import("@/views/Agent.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("@/views/Blogs.vue"),
  },
  {
    path: "/blog/:slug",
    name: "Blog",
    component: () => import("@/views/Blog.vue"),
  },
  {
    path: "/house-worth/:address?",
    name: "HouseWorth",
    component: () => import("@/views/HouseWorth.vue"),
  },
  {
    path: "/:notFound",
    component: () => import("@/views/NotFound.vue"),
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
