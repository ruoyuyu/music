<template>
  <div class="singer">
    <scroll :data="list" class="wrapper" ref="scroll" :probeType="3" @scroll="handleScroll">
      <div class="alpabet-wrapper">
        <div class="alphabet" v-for="(item, key) of list" ref="area">
          <div class="alphabet-title">{{key}}</div>
          <div class="alphabet-list">
            <div class="alphabet-item" v-for="innerItem of item" @click="handleSingerClick" :data-index="innerItem.id">
              <img :src="innerItem.picUrl" class="item-img"/>
              <div class="item-title">
                {{innerItem.cn_name}}  {{innerItem.en_name}}
              </div>
            </div>
           </div>
         </div>
       </div>
    </scroll>
    <ul class="letter-container" ref='letterCon'>
      <li ref="letters" :class="{'letter-active': index === activeIndex}" v-for="(item, index) in letters" class="letter-item" :key="item" @touchstart="handleTouchStart" @touchmove.stop="handleTouchMove">
        {{item}}
      </li>
    </ul>
    <div class="fixed-letter" ref="fixedElem">{{activeLetter}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
  import scroll from 'components/scroll/scroll'
  import { getIndex } from 'utils/dom'

  export default {

    name: 'singer',

    components: {
      scroll
    },

    data () {
      return {
        list: {},
        listPositions: [],
        activeIndex: 0
      }
    },

    computed: {
      letters () {
        return this.list ? Object.keys(this.list) : []
      },
      activeLetter () {
        return this.letters.length ? this.letters[this.activeIndex] : ''
      }
    },

    created () {
      this.getSingerList()
    },

    updated () {
      this.alphabetTop = this.$refs.letterCon.offsetTop
    },

    activated () {
      this.$refs.scroll.refresh()
    },

    watch: {
      list () {
        this.$nextTick(() => {
          this.listPositions = this.$refs.area.map((item) => {
            return item.offsetTop
          })
        })
      }
    },

    methods: {

      getSingerList () {
        this.$http.get('/api/singer.json').then(this.handleGetListSucc.bind(this))
      },

      handleGetListSucc (res) {
        const body = res.body
        if (body && body.data && body.data.list) {
          this.list = body.data.list
        }
      },

      handleTouchStart (e) {
        let index = getIndex(e.target)
        this.$refs.scroll.scrollToElement(this.$refs.area[index])
        this.activeIndex = index
      },

      handleTouchMove (e) {
        let step = Math.floor((e.touches[0].clientY - this.alphabetTop + 50) / 20)
        step = step < 0 ? 0 : step
        step = step > this.$refs.letters.length - 1 ? this.$refs.letters.length - 1 : step
        this.$refs.scroll.scrollToElement(this.$refs.area[step])
        this.activeIndex = step
      },

      handleScroll (e) {
        let index = 0
        let diff = 0
        for (let i = 0; i < this.listPositions.length; i++) {
          if (-e.y < this.listPositions[i]) {
            index = i - 1
            break
          }
        }
        index = index < 0 ? 0 : index
        this.activeIndex = index

        diff = -e.y - (this.listPositions[index + 1] - 20)
        this.$refs.fixedElem.style.top = (diff > 0) ? (79 - diff) + 'px' : 79 + 'px'
        this.$refs.fixedElem.style.display = (-e.y >= 22) ? 'block' : 'none'
      },

      handleSingerClick (e) {
        const target = e.currentTarget
        const index = parseInt(target.getAttribute('data-index'), 10)
        this.$router.push({
          name: 'singer-detail',
          params: { id: index }
        })
      }
    }

  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/varibles.styl'
  .wrapper
    z-index: 0
    overflow: hidden
    position: absolute
    top: 1.6rem
    left: 0
    right: 0
    bottom: 0
    background: $darkColor
    .alpabet-wrapper
      padding-bottom: .4rem
      .alphabet-title
        line-height: .36rem
        padding: .2rem .2rem 0 .2rem
        color: #fff
      .alphabet-list
        padding: 0 .2rem
        color: #eee
        .alphabet-item
          display: flex
          align-items: center
          margin-top: .2rem
          .item-img
            width: 1rem
            height: 1rem
            border-radius: 50%
          .item-title
            flex: 1
            line-height: .4rem
            padding-left: .2rem
            font-size: .28rem
  .letter-container
    position: absolute
    right: 0
    top: 50%
    transform: translateY(-50%)
    z-index: 1
    .letter-item
      width: .4rem
      line-height: .4rem
      text-align: center
      color: #fff
    .letter-active
      color: #FFD700
  .fixed-letter
    z-index: 0
    display: none
    position: fixed
    top: 1.58rem
    width: 100%
    line-height: .36rem
    padding: .2rem .2rem 0 .2rem
    background: $darkColor
    color: #fff

</style>
