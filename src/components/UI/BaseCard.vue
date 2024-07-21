<!-- template -->

<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<!-- script -->

<script>
export default {
  props: ["mode"],
  data() {
    return {};
  },
};
</script>

<!-- style -->

<style scoped></style>
