import { createRouter, createWebHistory } from "vue-router";
import DCHeroes from "./pages/DCHeroes.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DCHeroes },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
