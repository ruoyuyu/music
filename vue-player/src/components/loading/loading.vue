<template>
  <div class="loading">
    <img class="loading-img" :src="require('../../assets/imgs/loading.jpg')" />
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/varibles.styl'
  .loading
    overflow: hidden
    height: 3rem
    background: $loadingBgColor
    .loading-img
      display: block
      width: 3rem
      height: 3rem
      margin: 0 auto
</style>
