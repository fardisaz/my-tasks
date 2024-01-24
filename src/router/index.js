// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/views/SignIn.vue";
import TaskPage from "@/views/TaskPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignIn,
  },
  {
    path: "/user",
    name: "TaskPage",
    component: TaskPage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
