import { createApp } from "vue";
// import VueHead from "vue-head";

import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";

import router from "./router";
import store from "./store";

import { createHead } from "@unhead/vue";

import OpenLayersMap from "vue3-openlayers";
// import titleMixin from "./mixins/titleMixin";

const app = createApp(App);
// app.mixin(titleMixin);
const head = createHead();

app.use(router).use(store).use(OpenLayersMap).use(head);

app.mount("#app");
