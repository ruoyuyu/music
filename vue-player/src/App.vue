<template>
  <div id="app">
    <common-header></common-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import Header from 'components/header/header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  name: 'app',
  components: {
    commonHeader: Header,
    Tab,
    Player
  }
}
</script>
