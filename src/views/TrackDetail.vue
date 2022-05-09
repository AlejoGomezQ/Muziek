<template>
  <div class="container">
    <Loader v-show="isLoading" />
    <div class="row" v-show="!isLoading">
      <div class="col-12 col-5">
        <Track :track="track" />
      </div>
    </div>
  </div>
</template>

<script>
import trackService from "@/services/track";
import Track from "@/components/Track";

import Loader from "@/components/shared/Loader";

export default {
  name: "TrackDetail",

  data() {
    return {
      track: {},
      isLoading: false,
    };
  },

  components: {
    Track,
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
</style>
