<template>
  <button @click="show = !show">Menu</button>
  <transition name="fade">
    <MainMenu v-show="show"></MainMenu>
  </transition>
  <MainModal />
  <br />
  <MainHook />
  <ComponentContainer />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <component :is="componente"></component> -->
</template>

<script>
import MainMenu from "./components/MainMenu.vue";
import MainModal from "./components/MainModal.vue";
import MainHook from "./components/MainHook.vue";
import ComponentContainer from "./components/ComponentContainer.vue";
// import { defineAsyncComponent } from "vue";
// const HelloWorld = defineAsyncComponent(() =>
//   import("./components/HelloWorld.vue")
// );

export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  components: {
    MainMenu,
    MainModal,
    MainHook,
    ComponentContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 1s ease;
}
</style>
