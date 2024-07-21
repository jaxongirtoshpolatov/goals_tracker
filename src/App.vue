<!-- template -->

<template>
  <base-card mode="wrapper">
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </base-card>
</template>

<!-- script -->

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  data() {
    return {};
  },
};
</script>

<!-- style -->

<style>
/* syne */
@import url("https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap");
body {
  background-color: #e7e7f6;
  margin: 0;
  font-family: "Syne", sans-serif;
}
.container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
}
@media screen and (max-widtht: 1200px) {
  .container {
    max-width: 90%;
  }
}
</style>
