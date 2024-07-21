<!-- template -->

<template>
  <teleport to="body">
    <div class="dialog-back" @click="addTask"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="actions">
          <button @click="closeDialog">Close</button>
        </slot>
      </footer>
    </dialog>
  </teleport>
</template>

<!-- script -->

<script>
export default {
  inject: ['addTask'],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- style -->

<style scoped>
.dialog-back {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0, 0.5);
  top: 0;
}

dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  max-width: 600px;
  width: 100%;
  background: #eee;
  padding: 2rem;
  border-radius: 1rem;
  border: none;
  margin: 0;
  animation: scale 0.2s linear;
}

h2 {
  margin: 0 0 1rem 0;
}
footer {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@keyframes scale {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
