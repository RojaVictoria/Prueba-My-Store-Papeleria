<template>
  <div id="app">
    <Navbar/>
    <transition name="transition">
      <router-view />
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar, 
    Footer,
  },
  name: "App",
};
</script>

<style lang="scss">
body, html {
  margin: 0;
  text-align: center;
  width: 100%;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'DM Serif Text', serif;
}
p, a {
  font-family: 'Comfortaa', cursive;
}
.transition-enter-active, .transition-leave-active {
transition: opacity .3s,
}
.transition-enter, .transition-leave-to{
opacity: 0;
}
</style>
