import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import TheTasks from "./components/todos/TheTasks.vue";
// import TheTask from "./components/todos/TheTask.vue";
import AddTask from "./components/todos/AddTask.vue";
import NotFound from "./components/UI/NotFound.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/view_tasks" },
    {
      name: "view-tasks",
      path: "/view_tasks",
      component: TheTasks,
      children: { name: "add-task", path: "/add_task", component: AddTask },
    },
    { name: "not-found", path: "/:motFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
});

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.use(router);

app.mount("#app");
