import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import "./assets/css/styles.css";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router).use(store);

app.mount("#app");
