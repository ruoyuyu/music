<template>
  <transition name="move">
    <div class="singer-detail">
      <list :header="headerInfo" :list="listInfo" @click="handleListClick"></list>
    </div>
  </transition>
</template>

<script>
  import list from 'components/list/list'
  import { mapActions } from 'vuex'
  import * as types from 'store/action-types'

  export default {
    name: 'singer-detail',

    components: {
      list
    },

    data () {
      return {
        headerInfo: {},
        listInfo: []
      }
    },

    created () {
      this.getIndexData()
    },

    methods: {

      getIndexData () {
        this.$http.get('/api/singer_detail.json')
          .then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data) {
          this.headerInfo = body.data.singerInfo
          this.listInfo = body.data.musicInfo
        }
      },

      handleListClick (index) {
        this[types.SET_SONG_INFO](this.listInfo[index])
      },

      ...mapActions([types.SET_SONG_INFO])
    }
  }
</script>

<style scoped lang="stylus">
  .move-enter-active, .move-leave-active
    transition: all .5s
  .move-enter, .move-leave-to
    transform: translate3d(100%, 0,0)
  .singer-detail
    z-index: 2
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    color: #fff
</style>
