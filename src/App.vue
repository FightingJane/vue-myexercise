<template>
  <div id="app">
    <!-- :,v-bind的缩写；绑定属性不用加{{}}（除了文本需要，其他属性绑定都不需要加{{}}） -->
    <v-header :seller="seller" v-on:showSupportAll="show"></v-header>
    <nav>
      <ul>
        <li>
           <!-- 使用 router-link 组件来导航.默认会被渲染成一个 `<a>` 标签  -->
          <router-link to="/goods">商品</router-link>
        </li>
        <li>
          <router-link to="/sellers">店家</router-link>
        </li>
        <li>
          <router-link to="/ratings">评分</router-link>
        </li>
      </ul>
    </nav>
    <!-- 渲染路径匹配到的视图组件 -->
    <router-view></router-view>
    <!-- 只会把过渡效果应用到其包裹的内容上，而不会额外渲染 DOM 元素 -->
    <transition name="fade">
      <!-- 隐藏组件隐藏时组件不会渲染，css也不会 -->
      <v-supports v-if="isShow" :seller="seller" v-on:hidesupport="hide"></v-supports>
    </transition>
  </div>
</template>

<script>
// 子组件引入
import header from 'components/header/header.vue'
import supports from 'components/supports/supports.vue'
export default {
  name: 'app',
  // this 自动绑定为 Vue 实例
  methods: {
    show: function () {
      this.isShow = true
    },
    hide: function () {
      this.isShow = false
    }
  },
  // Vue 实例的数据对象,必须是纯粹的对象 (含有零个或多个的 key/value 对)
  data () {
    return {
      seller: {},
      isShow: false
    }
  },
  // 应用vue-resource获取相应路由下的数据
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.seller = response.data
      }
    })
  },
  // 局部注册组件，只在父模板可用
  components: {
    'v-header': header,
    'v-supports': supports
  }
}
</script>

<style rel="stylesheet/less" type="text/css" lang="less">
@import "common/less/mixin.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 667px;
  nav{
    ul{
      display: flex;
      height: 40px;
      box-sizing: border-box;
      // 嵌套写法，把line-bottom的样式给ul用
      .line-bottom;
      li {
        display: inline-block;
        flex: 1;
        text-align: center;
        a {
          display: inline-block;
          line-height: 40px;
          color: rgb(77, 85, 93);
          height: 40px;
          width: 100%;
          font-size: 14px;
        }
        a.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}






/*渐变效果*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
