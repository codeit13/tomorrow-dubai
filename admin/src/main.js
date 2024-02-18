import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";

import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";

import router from "./router";
import store from "./store";

import OpenLayersMap from "vue3-openlayers";

import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

import VueCookies from "vue3-cookies";

const app = createApp(App);
app.component("QuillEditor", QuillEditor);

app.use(router).use(store).use(OpenLayersMap).use(ToastPlugin).use(VueCookies);

app.use(VueCookies, {
  expireTimes: "7d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

app.mount("#app");
