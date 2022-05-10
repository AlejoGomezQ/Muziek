<template>
  <div class="card mb-4" v-if="track && track.album">
    <div class="card-image__container">
      <figure class="img-thumbnail">
        <img :src="track.album.images[0].url" alt="" class="card-img-top" />
      </figure>
    </div>
    <div class="card-content__container card-body">
      <div class="media">
        <img :src="track.album.images[0].url" :alt="track.artists[0].name" />
        <div class="media-body">
          <h6 class="title">
            <strong>{{ track.name }}</strong>
          </h6>
          <h6 class="subtitle">{{ track.artists[0].name }}</h6>
        </div>
      </div>
    </div>
    <div class="content text-center">
      <small>{{ track.duration_ms | msToMin }}</small>
      <div class="text-center">
        <button href="" @click.prevent="selectTrack" class="btn">
          <span>▶️</span>
        </button>
        <button href="" @click.prevent="goToTrack(track.id)" class="btn">
          <span>🌍</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Track",

  props: {
    track: {
      type: Object,
      required: true,
    },
  },

  methods: {
    selectTrack() {
      if (!this.track.preview_url) {
        return;
      }

      this.$emit("select", this.track.id);

      this.$bus.$emit("setTrack", this.track);
    },

    goToTrack(id) {
      if (!this.track.preview_url) {
        return;
      }

      this.$router.push({
        name: "TrackDetail",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="css">
img {
  width: 3vw;
  margin-right: 15px;
}

.content {
  margin: 20px;
}

h6 > strong,
h6 {
  font-size: 1rem;
}

button {
  outline: none !important;
}
</style>
