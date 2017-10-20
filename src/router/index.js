import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import sellers from '@/components/seller/seller'
import ratings from '@/components/ratings/rating'

// 必须要use才可以
Vue.use(Router)

// 创建并抛出 router 实例 --eslint spaced-comment
export default new Router({
  // 全局配置 <router-link> 的默认『激活 class 类名』
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
})
