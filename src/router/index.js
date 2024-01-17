// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/auth",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
