<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vue from 'vue'

  export default {

    props: {
      data: null,
      probeType: {
        type: Number,
        default: 0
      }
    },

    mounted () {
      this.createSroll()
    },

    watch: {
      data () {
        Vue.nextTick(() => {
          this.scroll.refresh()
        })
      }
    },

    methods: {

      createSroll () {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true
        })
        this.scroll.on('scroll', (e) => {
          this.$emit('scroll', e)
        })
      },

      refresh () {
        this.scroll.refresh()
      },

      scrollToElement (el) {
        this.scroll.scrollToElement(el)
      }
    }

  }
</script>
