import '@/assets/stylus/reset.styl'
import '@/assets/iconfont/iconfont.css'
import 'babel-polyfill'
import FastClick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import store from './store'

Vue.use(VueResource)
Vue.use(VueLazyload, {
  preLoad: 1.5,
  loading: require('./assets/imgs/loading.jpg')
})

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
