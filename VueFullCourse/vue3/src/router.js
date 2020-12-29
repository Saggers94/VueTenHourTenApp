import { createRouter, createWebHistory } from "vue-router";
import DCHeroes from "./pages/DCHeroes.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
import Calculator from "./pages/Calculator";
import ReusableModal from "./pages/ReusableModal";
import Chats from "./pages/Chats";

import UserCrud from "./pages/UserCrud";
import store from "./store/index";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DCHeroes },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator, meta: { middleware: "auth" } },
  { path: "/reusable-modal", component: ReusableModal },
  {
    path: "/chat",
    component: Chats,
    meta: { middleware: "auth" },
    // Through beforeenter we can redirect the page to the other path, this is called as "Middleware"
    // beforeEnter: (to, from, next) => {
    //   if (!store.state.isLoggedIn) {
    //     next("/");
    //   } else {
    //     next();
    //   }
    // },
  },
  { path: "/usercrud", component: UserCrud },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    console.log(to.meta.middleware);
    const middleware = require(`./middleware/${to.meta.middleware}`);
    middleware.default(next, store);
    console.log(middleware);
  } else {
    next();
  }
});

export default router;
