<template>
  <section class="header">
    <nav class="navbar">
      <div class="container">
        <div class="nav-left">
          <div class="navbar-brand">
            <strong>🎸 Music Service</strong>
          </div>
        </div>
        <div class="nav-right menu">
          <router-link to="/" class="nav-item mr-4">Buscar</router-link>
          <router-link to="about" class="nav-item">Nosotros</router-link>
        </div>
      </div>
    </nav>
    <div class="body">
      <div class="title container text-center mt-3">
        <h1>Music Service</h1>
        <h3>La escuchas, la buscas, la encuentras 🎵!</h3>
        <Player />
      </div>
    </div>
  </section>
</template>

<script>
import Player from "@/components/Player";

export default {
  name: "MusicHeader",

  components: {
    Player,
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: 470px;
  position: relative;
}

section::before {
  content: "";
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: linear-gradient(to top, #ffffff, transparent);
  z-index: 1000;
}

.header {
  background: #4dd4f6;
}

.container {
  height: auto;
}
.navbar-brand {
  width: 100%;
  height: 50px;
}

.nav-item {
  text-decoration: none;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: bold;
  color: #ffffff;
}

.nav-item:hover {
  color: #000000;
}

.title {
  margin-top: -20px;
}

h1 {
  color: #ffffff;
}
</style>
