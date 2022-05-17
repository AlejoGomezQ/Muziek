<template>
  <div class="container" v-if="track && track.id">
    <div class="row">
      <div class="col-4">
        <figure class="media-left">
          <p class="image text-center">
            <img
              class="m-0"
              :src="track.album.images[0].url"
              alt="track.name"
            />
          </p>
          <p class="text-center">
            <a href="" class="btn">
              <span class="icon" @click="selectTrack">▶️</span>
            </a>
          </p>
        </figure>
      </div>
      <div class="col-8">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="title">{{ trackTitle }}</h1>
          </div>
          <div class="panel-body">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <ul v-for="(t, index) in track" :key="index">
                    <li>
                      <strong>{{ index }}:&nbsp;</strong>
                      <span>{{ t }}</span>
                    </li>
                  </ul>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a href="" class="level-item"></a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from "@/mixins/track";

import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "TrackDetail",

  mixins: [trackMixin],

  created() {
    const id = this.$route.params.id;

    this.isLoading = true;

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id }).then(() => {
        console.log("Track loaded...");
        this.isLoading = false;
      });
    }
  },

  computed: {
    ...mapState(["track"]),
    ...mapGetters(['trackTitle'])
  },

  methods: {
    ...mapActions(["getTrackById"]),
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin: 20px;
}

p > img {
  width: 200px;
  height: auto;
}
</style>
