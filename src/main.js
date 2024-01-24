import "./assets/main.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(Vue3Toasity, {
    autoClose: 3000,
    // ...
  })
  .mount("#app");
