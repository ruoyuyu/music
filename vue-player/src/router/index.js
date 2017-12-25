import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/recommend/recommend'
import Singer from '@/pages/singer/singer'
import SingerDetail from '@/pages/singer/singer_detail'
import Rank from '@/pages/rank/rank'
import Search from '@/pages/search/search'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  }, {
    path: '/singer',
    name: 'signer',
    component: Singer,
    children: [{
      path: ':id',
      name: 'singer-detail',
      component: SingerDetail
    }]
  }, {
    path: '/rank',
    name: 'rank',
    component: Rank
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }]
})
