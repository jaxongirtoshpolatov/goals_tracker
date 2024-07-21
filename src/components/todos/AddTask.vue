<template>
  <base-card mode="addTaskDialog_container container">
    <base-dialog title="Add new task">
      <template #default>
        <form>
          <div class="form-control">
            <input
              type="text"
              placeholder="Add new task..."
              v-model="newTask"
            />
          </div>
        </form>
      </template>
      <template #actions>
        <base-button mode="addTask_btn" @click="addNewTask">
          Add task</base-button
        >
      </template>
    </base-dialog>
  </base-card>
</template>

<script>
export default {
  props: ["addTask"],
  provide() {
    return {
      addTask: this.addTask,
    };
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addNewTask() {
      if (this.newTask) {
        this.$emit("add-new-task", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>

<style scoped>
.form-control input {
  width: calc(100% - 24px);
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  font-family: "Syne", sans-serif;
}
.addTask_btn {
  outline: none;
  border: none;
  background-color: #00807c;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  font-family: "Syne", sans-serif;
  font-size: 18px;
  cursor: pointer;
  color: #fff;
}
</style>
