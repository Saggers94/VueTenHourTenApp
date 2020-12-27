import { createRouter, createWebHistory } from "vue-router";
import DCHeroes from "./pages/DCHeroes.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
import Calculator from "./pages/Calculator";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DCHeroes },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
