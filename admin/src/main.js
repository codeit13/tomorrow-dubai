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

const app = createApp(App);
app.component("QuillEditor", QuillEditor);

app.use(router).use(store).use(OpenLayersMap).use(ToastPlugin);

app.mount("#app");
