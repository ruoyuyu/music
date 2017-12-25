<template>
  <div class="list">
    <router-link to="recommend" tag="div" class="item">
      <span class="link">推荐</span>
    </router-link>
    <router-link to="singer" tag="div" class="item">
      <span class="link">歌手</span>
    </router-link>
    <router-link to="rank" tag="div" class="item">
      <span class="link">排行</span>
    </router-link>
    <router-link to="search" tag="div" class="item">
      <span class="link">搜索</span>
    </router-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl';
  .list
    position: relative
    display: flex
    background: $darkColor
    z-index: 1
    .item
      flex: 1
      text-align: center
      line-height: .72rem
      .link
        position:relative
        color: #fff
      &.router-link-active
        .link
          color: $enlightColor
          &:before
            content: ''
            position: absolute
            left: -.08rem
            bottom: -.08rem
            right: -.08rem
            height: .06rem
            background: $enlightColor
            border-radius: .03rem;

</style>
