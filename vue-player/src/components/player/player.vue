<template>
  <div v-show="showPlayer">
    <div class="normal">
      <div @click="handleHideNormal">收起</div>
    </div>
    <div class="mini">
      展开
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import * as mutationTypes from 'store/mutation-types'
  export default {
    computed: {
      ...mapState(['showPlayer'])
    },

    methods: {
      handleHideNormal () {
        this[mutationTypes.SET_SHOW_PLAYER](false)
      },
      ...mapMutations([mutationTypes.SET_SHOW_PLAYER])
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/stylus/varibles.styl'
  .normal
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    z-index: 3
    color: #fff
  .mini
    z-index: 4
    position: fixed
    left: 0
    right: 0
    bottom: 0
    height: 1.2rem
    background: $darkColor
    color: #fff
</style>
