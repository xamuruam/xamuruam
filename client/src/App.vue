<template>
  <div id="app">
    <div class="hero"><v-main-wrapper /></div>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue';

export default {
  name: 'app',
  components: {
    vMainWrapper
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}
#app {
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(44, 62, 80);
}
.hero {
  margin: 0 auto;
  background-image: url('./assets/images/hero-bcg.jpeg');
  background-attachment: fixed;
  min-height: calc(106.2vh - 45px);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
