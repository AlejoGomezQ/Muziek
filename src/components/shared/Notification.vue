<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <slot name="body">
          <div class="alert alert-danger" role="alert">Sin resultados</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: auto;
}

.alert {
  width: 100%;
}
</style>
