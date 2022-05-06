<template>
  <div class="card mb-4">
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
      <small>{{ track.duration_ms }}</small>
      <div class="text-center">
        <a href="" @click.prevent="selectTrack">
          <span>▶️</span>
        </a>
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
      this.$emit("select", this.track.id);

      this.$bus.$emit("setTrack", this.track);
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
</style>
