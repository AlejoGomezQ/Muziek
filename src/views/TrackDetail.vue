<template>
  <div class="container">
    <Loader v-show="isLoading" />
    <div class="row" v-show="!isLoading">
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
            <h1 class="title">{{ track.name }}</h1>
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
import trackService from "@/services/track";

import trackMixin from "@/mixins/track";

import Loader from "@/components/shared/Loader";

export default {
  name: "TrackDetail",

  mixins: [trackMixin],

  data() {
    return {
      track: {},
      isLoading: false,
    };
  },

  components: {
    Loader,
  },

  created() {
    const id = this.$route.params.id;

    this.isLoading = true;

    trackService.getById(id).then((response) => {
      this.track = response;
      this.isLoading = false;
    });
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
