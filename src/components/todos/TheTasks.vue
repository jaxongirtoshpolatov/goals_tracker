<template>
  <base-card mode="container">
    <!--intro-->
    <base-card mode="intro" v-if="!showDialog && tasks.length === 0">
      <h1>
        Yangi vazifalarni qo'shishni boshlang! Vaqt sizni emas siz vaqtni
        boshqaring!
      </h1>
    </base-card>

    <!--  view task-->
    <the-task v-else :tasks="tasks" @share-status="changeStatus"></the-task>

    <!--  add tasks-->
    <base-card mode="addTask_container">
      <add-task
        v-if="showDialog"
        :add-task="addTask"
        @add-new-task="addNewTask"
      ></add-task>
      <base-button
        to="/add_task"
        :mode="{ addTask_btn: true, rotate_btn: showDialog }"
        @click="addTask"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFA52B"
          class="size-6"
          width="48px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </base-button>
    </base-card>
  </base-card>
</template>

<script>
import AddTask from "./AddTask.vue";
import TheTask from "./TheTask.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { AddTask, TheTask },
  inject: ["newTasks"],
  data() {
    return {
      showDialog: false,
      uniqueId: this.generateUniqueId(),
      tasks: [],
    };
  },
  methods: {
    generateUniqueId() {
      return uuidv4();
    },
    addTask() {
      this.showDialog = !this.showDialog;
    },
    addNewTask(task) {
      this.tasks.push({
        title: task,
        id: this.generateUniqueId(),
        completed: false,
      });
      this.showDialog = false;
    },
    changeStatus(taskId) {
      this.tasks = this.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
    },
  },
};
</script>

<style scoped>
.intro {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.intro h1 {
  font-size: 48px;
  margin: 2rem 0;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.addTask_btn {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #00807c;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  cursor: pointer;
  z-index: 100;
  transition: 0.2s linear;
}
.addTask_btn.rotate_btn {
  transform: translateX(-50%) rotate(45deg);
}

</style>
