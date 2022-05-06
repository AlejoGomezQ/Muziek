<template>
  <div class="content" v-if="track && track.album">
    <p>
      <img :src="track.album.images[0].url" :alt="track.name" />
    </p>
    <p>
      <strong>{{ track.name }}</strong>
      <small>{{ track.duration_ms }}</small>
    </p>
    <p>
      <audio :src="track.preview_url" controls></audio>
    </p>
  </div>
</template>

<script>
export default {
  name: "Player",

  data() {
    return {
      track: {},
    };
  },

  created() {
    this.$bus.$on("setTrack", (track) => {
      this.track = track;
    });
  },
};
</script>
