<template>
  <header class="site-header">
    <h1>MobilStore 📱</h1>
    <nav-menu></nav-menu>
  </header>
</template>

<script>
import NavMenu from './NavMenu.vue';

export default {
  components: {
    NavMenu,
  },
};
</script>

<style scoped>
.site-header {
  width: 99%;
  height: 150px;
  background-color: #610883;
  margin: 5px;
  color: white;
  text-align: center;
  font-size: 1.5em;
}
</style>
