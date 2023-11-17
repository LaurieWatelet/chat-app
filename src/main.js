import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Chat from "./pages/Chat.vue";

// Définition des routes
const routes = [
  { path: "/", component: Home },
  { path: "/chat", component: Chat },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création de l'application Vue
const app = createApp(App);
// Utilisation du routeur dans l'application
app.use(router);

// Montage de l'application sur l'élément #app de index.html
app.mount("#app");
