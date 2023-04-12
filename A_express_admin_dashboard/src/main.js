import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n, useI18n } from 'vue-i18n';
import { defaultLocale } from './languages';
import { languages } from './languages';
import App from "./App.vue";
import router from "./router";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue3-toastify/dist/index.css";

import "./assets/main.css";
const messages = Object.assign(languages);
const langFromLocalStorage = localStorage.getItem('lang');

const i18n = createI18n({
  legacy: false,
  locale: langFromLocalStorage || defaultLocale,
  fallbackLocale: 'uz',
  messages,
});
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("VueDatePicker", VueDatePicker);
app.use(i18n);

app.mount("#app");
