<template>
  <div>
    <div class="banner">
      <div class="back iconfont" @click="handleBackClick">&#xe624;</div>
      <img class="banner-img" :src="header.imgUrl" ref="bannerImg"/>
    </div>
    <div class="overlay" :style="{top: overlayTop + 'px'}">
      <scroll
        class="list"
        :data="list"
        :probeType="3"
        :style="{height: scrollHeight + 'px'}"
        @scroll="handleScroll"
      >
        <div v-for="item in list" @click="handleItemClick">
          <div class="item">
            <h4 class="item-title">{{item.name}}</h4>
            <p class="item-desc">{{item.album}}</p>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import scroll from '../scroll/scroll'
  import { getIndex } from 'utils/dom'
  export default {
    components: {
      scroll
    },
    data () {
      return {
        overlayTop: 0,
        scrollHeight: 0
      }
    },
    props: {
      header: {
        type: Object,
        default: {}
      },
      list: {
        type: Array,
        default: []
      }
    },
    created () {
      this.getPositionTop()
    },
    methods: {
      getPositionTop () {
        this.overlayTop = screen.width * 0.6
        this.scrollHeight = screen.height - screen.width * 0.6
      },

      handleScroll (e) {
        if (e.y < 0) {
          const overlayTop = screen.width * 0.6 + e.y
          this.overlayTop = overlayTop > 40 ? overlayTop : 40
        } else {
          const scale = 1 + e.y / 400
          this.$refs.bannerImg.style.transform = 'scale(' + scale + ')'
        }
      },

      handleBackClick (e) {
        this.$router.back()
      },

      handleItemClick (e) {
        this.$emit('click', getIndex(e.currentTarget))
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/varibles.styl'
  .banner
    overflow: hidden
    position: relative
    width: 100%
    height: 0
    padding-bottom: 60%
    .banner-img
      width: 100%
    .back
      z-index: 2
      position: absolute
      left: .2rem
      top: .2rem
      font-size: .36rem
      font-weight: bold
      color: $enlightColor
  .overlay
    overflow: hidden
    position: absolute
    left: 0
    right: 0
    bottom: 0
    background: $darkColor
  .list
    position: absolute
    left: 0
    right: 0
    bottom: 0
    .item
      padding: .2rem .4rem
      .item-title
        line-height: .48rem
        font-size: .32rem
      .item-desc
        padding-top: .1rem
        line-height: .36rem
        font-size: .28rem
</style>
