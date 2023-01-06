import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true,
      meta: {
        title: "Nick Dillon Portfolio",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
