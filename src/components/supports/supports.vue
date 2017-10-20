<template>
  <div class="detail-all">
      <div class="supports-all clearfix">
          <div class="support-main">
              <div class="supports-seller">{{ seller.name }}</div>
              <div class="supports-rating">
                  <rating-star :score="seller.score" :size="48"></rating-star>
              </div>
              <div class="supports-header">
                  <div class="supports-header-line"></div>
                  <div class="supports-header-name">优惠信息</div>
                  <div class="supports-header-line"></div>
              </div>
              <div class="supports">
                      <discount-li :classMap="classMap" :info="seller.supports"></discount-li>                
              </div>
              <div class="supports-header">
                  <span class="supports-header-line"></span>
                  <span class="supports-header-name">商家公告</span>
                  <span class="supports-header-line"></span>
              </div>
              <div class="supports support-announcement" v-if="seller.bulletin">
                  {{ seller.bulletin }}
              </div>
          </div>
      </div>
      <div class="supports-close">
          <i v-on:click="hidesupport" class="icon-close"></i>
      </div>
  </div>
</template>
<script>
import ratingstar from '../ratingstar/ratingstar.vue'
import discount from '../discount/discount.vue'
export default {
  // Vue 实例的数据对象
  data () {
    return {
      image: './star48_on@2x.png'
    }
  },
  methods: {
    hidesupport: function () {
      // 触发当前实例上的事件
      this.$emit('hidesupport')
    }
  },
  components: {
    'rating-star': ratingstar,
    'discount-li': discount
  },
  created () {
    this.classMap = ['icon-decrease', 'icon-discount', 'icon-guarantee', 'icon-invoice', 'icon-special']
  },
  props: {
    seller: {
      type: Object
    }
  }
}
</script>
<style lang="less">
  @import "../../common/less/base.less";
  @import "../../common/less/icon.css";
  .detail-all{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    overflow: auto;
    background-color: rgba(7,17,27,0.8);
    color: #fff;
    padding-left: 36px;
    padding-right: 36px;
    box-sizing: border-box;
    .supports-all{
      // 设置宽度比100%的宽度少20px。为防止less自己把它当表达式计算掉，需加~''包起来
      min-height: calc(~'100% - 64px');
      .support-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .supports-seller{
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          color: rgb(255,255,255);
          text-align: center;
        }
        .supports-rating{
          margin-top: 16px;
          margin-bottom: 28px;
        }
        .supports-header{
          display: flex;
          .supports-header-line{
            position: relative;
            top: -7px;
            flex: 1;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
          .supports-header-name{
            font-size: 14px;
            font-weight: 700;
            margin: 0 11px 0 11px;
          }
        }
        .supports{
          margin-top: 24px;
          margin-bottom: 28px;
          font-size: 12px;
          line-height: 24px;
          ul{
            li{
              font-size: 12px;
              line-height: 12px;
              margin-bottom: 12px;
            }
          }
        }
      }
    }
    .supports-close{
      position: relative;
      margin: -64px auto 0 auto;
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 32px;
      clear: both;
    }
  }
</style>
