<template>
  <div id="app">
    <MusicHeader />
    <router-view />
    <MusicFooter />
  </div>
</template>

<script>
// Styles

// Components
import MusicHeader from "@/components/layout/Header";
import MusicFooter from "@/components/layout/Footer";

export default {
  name: "app",

  components: {
    MusicHeader,
    MusicFooter,
  },
};
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
</style>
