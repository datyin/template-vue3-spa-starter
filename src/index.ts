import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./plugins/i18n";
import { pinia } from "./plugins/pinia.ts";
import { router } from "./plugins/router.ts";
import "virtual:uno.css";

const app = createApp(App);
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");
