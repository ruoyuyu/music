<template>
  <div class="recommend-content">
    <recommend-swiper :banners="banners"></recommend-swiper>

    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <loading v-if="list.length === 0"></loading>
      <scroll v-if="list.length > 0" :data="list" class="scroll-container" ref="scroll">
        <ul class="list">
          <li v-for="item in list" :key="item.key">
            <div class="list-container">
              <div class="list-icon">
                <img class="list-img" v-lazy="item.picUrl">
              </div>
              <div class="list-info">
                <h4 class="item-title">{{item.title}}</h4>
                <p class="item-desc">{{item.desc}}</p>
              </div>
            </div>
          </li>
        </ul>
      </scroll>

    </div>
  </div>
</template>

<script>
  import recommendSwiper from './swiper'
  import scroll from 'components/scroll/scroll'
  import loading from 'components/loading/loading'

  export default {
    name: 'recommend',

    data () {
      return {
        banners: [],
        list: []
      }
    },

    components: {
      recommendSwiper,
      scroll,
      loading
    },

    created () {
      this.caculateTopPosition()
      this.getIndexData()
    },

    methods: {

      caculateTopPosition () {
        const width = document.body.clientWidth
        this.offsetTop = width * 0.4 + 120
      },

      getIndexData () {
        this.$http.get('/api/index.json')
          .then(this.getIndexDataSucc.bind(this))
      },

      getIndexDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.slider) {
          this.banners = body.data.slider
          this.list = body.data.list
        }
      }
    },

    updated () {
      this.$refs.scroll.$el.style.top = this.offsetTop + 'px'
    },

    activated () {
      this.$refs.scroll && this.$refs.scroll.refresh()
    }

  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/varibles.styl'
  .list-title
    line-height: .8rem
    background: $darkColor
    text-align: center
    color: #fff
  .scroll-container
    overflow: hidden
    position: absolute
    left: 0
    right: 0
    bottom: 0
    background: $darkColor
    .list-container
      display: flex
      height: 2rem
      .list-icon
        width: 1.6rem
        height: 1.6rem
        padding: .2rem
        .list-img
          width: 100%
      .list-info
        flex: 1
        display: flex
        flex-direction: column
        justify-content: center
        padding: .2rem;
        .item-title
          line-height: .5rem
          font-size:.36rem
          color: #fff
        .item-desc
          line-height: .44rem
          font-size: .28rem
          color: $lightFontColor
</style>
