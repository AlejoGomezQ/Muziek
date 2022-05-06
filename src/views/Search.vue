<template>
  <main>
    <Notification v-show="showNotification">
      <div slot="body" class="alert alert-danger" role="alert">
        No se encontraron resultados
      </div>
    </Notification>
    <Loader v-show="isLoading" />
    <section class="section" v-show="!isLoading">
      <nav class="navbar navbar-expand-sm text-center">
        <div
          class="searching-container container d-flex justify-content-center"
        >
          <input
            type="text"
            class="input mr-5"
            aria-level="Large"
            placeholder="Buscar canciones"
            v-model="searchQuery"
            @keyup.enter="search"
          />
          <a
            href=""
            class="button bg-info btn-lg text-white mr-2"
            @click.prevent="search"
            >Buscar</a
          >
          <a href="" class="button bg-danger btn-lg text-white">&times;</a>
        </div>
      </nav>
      <div class="total-container container text-center">
        <p class="d-block">
          <small>{{ searchMessage }}</small>
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-3"
            v-for="(t, index) in tracks"
            :key="index"
          >
            <Track
              :track="t"
              @select="setTrack"
              :class="{ active: t.id === selectedTrack }"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// Services
import trackService from "@/services/track";

import Notification from "@/components/shared/Notification";
import Loader from "@/components/shared/Loader";

import Track from "@/components/Track";

export default {
  name: "app",

  data() {
    return {
      searchQuery: "",
      tracks: [],
      selectedTrack: "",
      showNotification: false,
      isLoading: false,
    };
  },

  components: {
    Notification,
    Loader,
    Track,
  },

  // mounted() {
  //   axios.get('https://platzi-music-api.herokuapp.com')
  //     .then(response => this.result = response.data)
  // },

  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }

      this.isLoading = true;

      trackService.search(this.searchQuery).then((response) => {
        this.showNotification = response.tracks.total === 0;
        this.tracks = response.tracks.items;
        this.isLoading = false;
      });

      this.searchQuery = "";
    },

    setTrack(id) {
      this.selectedTrack = id;
    },
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    },
  },

  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss">
nav {
  height: 100px;
}

.searching-container {
  height: auto;
}

input {
  width: 700px;
  padding: 6px;
  padding-top: 8px;
  outline: none;
  border: none;
  border-bottom: 1px solid #4dd4f6;
  border-radius: 7px;
  background: #eeeeee;
}

input:hover {
  background: #dddddd;
}

input::placeholder {
  color: #000000;
}

.total-container {
  height: auto;
}

a:hover {
  text-decoration: none;
}

.active {
  border: 3px solid #4dd4f6;
}
</style>
