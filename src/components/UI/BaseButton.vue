<!-- template -->

<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<!-- script -->

<script>
export default {
  props: ["type", "mode"],
};
</script>

<!-- style -->

