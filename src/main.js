// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// 通过 XMLHttpRequest 或 JSONP 发起请求并处理响应

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueResource)
/* eslint-disable no-new */
// 创建和挂载根实例，通过router注入路由

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
