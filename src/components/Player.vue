<template>
  <div
    class="content row d-flex justify-content-center"
    v-if="track && track.album"
  >
    <div class="col-12 m-0 mb-2">
      <img class="m-0" :src="track.album.images[0].url" :alt="track.name" />
    </div>
    <div class="col-12 mb-2">
      <strong class="mr-4">{{ track.name }}</strong>
      <small>{{ track.duration_ms | msToMin }}</small>
    </div>
    <div class="col-12">
      <audio :src="track.preview_url" controls></audio>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Player",

  computed: {
    ...mapState(["track"]),
  },
};
</script>
