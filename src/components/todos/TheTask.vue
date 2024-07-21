<template>
  <ul>
    <task-list
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :title="task.title"
      :completed="task.completed"
      @completed-status="shareStatus"
    ></task-list>
  </ul>
</template>

<script>
import TaskList from "./TaskList.vue";
export default {
  components: { TaskList },
  props: ["tasks"],
  emits: ["share-status"],
  methods: {
    shareStatus(statusId) {
      this.$emit("share-status", statusId);
    },
  },
  mounted() {
    console.log(this.tasks);
  },
};
</script>

<style scoped>
ul {
  background: #eee;
  border-radius: 1rem;
  padding: 1rem;
  list-style: none;
}
</style>
