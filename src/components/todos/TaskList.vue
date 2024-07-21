<template>
  <base-card mode="task_container">
    <li :class="{ completed_task: completed }">{{ title }}</li>
    <div class="tasks_tools">
      <base-button mode="uncompleted task_btn" @click="completedStatus">
        <svg
          id="square-rounded_24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          v-if="!completed"
        >
          <rect
            width="24"
            height="24"
            stroke="none"
            fill="#000000"
            opacity="0"
          />

          <g transform="matrix(1 0 0 1 12 12)">
            <g style="">
              <g transform="matrix(1 0 0 1 0 0)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 2;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-12, -12)"
                  d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                <path
                  style="
                    stroke: rgb(0, 0, 0);
                    stroke-width: 1.5;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-12, -12)"
                  d="M 12 3 C 19.2 3 21 4.8 21 12 C 21 19.2 19.2 21 12 21 C 4.800000000000001 21 3 19.2 3 12 C 3 4.800000000000001 4.8 3 12 3 z"
                  stroke-linecap="round"
                />
              </g>
            </g>
          </g>
        </svg>
        <svg
          id="square-rounded-check_24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          v-else
        >
          <rect
            width="24"
            height="24"
            stroke="none"
            fill="#000000"
            opacity="0"
          />

          <g transform="matrix(1 0 0 1 12 12)">
            <g style="">
              <g transform="matrix(1 0 0 1 0 0)">
                <path
                  style="
                    stroke: none;
                    stroke-width: 2;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-12, -12)"
                  d="M 0 0 L 24 0 L 24 24 L 0 24 z"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                <path
                  style="
                    stroke: rgb(0, 0, 0);
                    stroke-width: 1.5;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-12, -12)"
                  d="M 9 12 L 11 14 L 15 10"
                  stroke-linecap="round"
                />
              </g>
              <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                <path
                  style="
                    stroke: rgb(0, 0, 0);
                    stroke-width: 1.5;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" translate(-12, -12)"
                  d="M 12 3 C 19.2 3 21 4.8 21 12 C 21 19.2 19.2 21 12 21 C 4.800000000000001 21 3 19.2 3 12 C 3 4.800000000000001 4.8 3 12 3 z"
                  stroke-linecap="round"
                />
              </g>
            </g>
          </g>
        </svg>
      </base-button>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["id", "title", "completed"],
  emits: ["completed-status"],
  methods: {
    completedStatus() {
      this.$emit("completed-status", this.id);
    },
  },
};
</script>

<style scoped>
.task_container {
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task_container:not(:last-child) {
  margin-bottom: 1rem;
}
.task_btn {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.completed_task {
  text-decoration: line-through;
  color: #ccc;
}

</style>
