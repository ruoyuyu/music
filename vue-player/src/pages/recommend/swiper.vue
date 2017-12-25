<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-container">
      <!-- slides -->
      <swiper-slide v-for="banner in banners" :key="banner.id">
        <a :href="banner.linkUrl">
          <img :src="banner.picUrl" class="swiper-image"/>
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination recommend-swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'recommend-swiper',

    props: {
      'banners': {
        type: Array
      }
    },

    components: {
      swiper,
      swiperSlide
    },

    data () {
      return {
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
          direction: 'horizontal',
          autoHeight: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper-container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 40%
    background: #eee
    .swiper-image
      width: 100%
</style>

<style lang="stylus">
  @import '../../assets/stylus/varibles.styl'
  .recommend-swiper-pagination
    .swiper-pagination-bullet
      background: $enlightColor
</style>
