import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";

import router from "./router";
import store from "./store";

import OpenLayersMap from "vue3-openlayers";

const app = createApp(App);

app.use(router).use(store).use(OpenLayersMap);

app.mount("#app");
