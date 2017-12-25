<template>
  <div class="header">
    <div class="title">
      <div class="logo"></div>
      Dell's Music
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl';
  @import '../../assets/stylus/mixin.styl';

  .header
    height: .88rem
    background: $darkColor
    position: relative
  .title
    position: absolute
    left: 50%
    top: .04rem
    line-height: .8rem
    transform: translateX(-50%)
    color: $enlightColor
    font-size: .32rem;
  .logo
    float:left
    position: relative
    top: .08rem
    width: .64rem
    height: .64rem
    margin-right: .2rem
    border-radius: 50%
    background-size: contain
    bg-image('./logo')
</style>
