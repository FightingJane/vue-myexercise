<template>
  <div id="header">
      <div id="seller-wrapper">
          <div class="header-img">
              <!-- :,v-bind的缩写；绑定属性不用加{{}} -->
              <img :src=seller.avatar />
           </div>
           <div class="header-seller">
               <div class="header-seller-1">
                   <span class="logo"></span>
                   <span class="name">{{ seller.name }}</span>
                </div>
                <div class="header-seller-2">
                    <h3>{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</h3>
                </div>
                <div class="header-seller-supports">
                    <span class="header-seller-supports-icon" v-if="seller.supports" v-bind:class="classMap[seller.supports[0].type]"></span>
                    <span v-if="seller.supports">{{ seller.supports[0].description }}</span>
                    <span v-if="seller.supports" class="header-seller-supports-num" v-on:click="showSupportAll">
                        {{ seller.supports.length }}个
                        <i class="icon-keyboard_arrow_right"></i>
                    </span>
                </div>
           </div>
      </div>
      <!-- @：v-on:的缩写 -->
      <div class="bulletin-wrapper" @click="showSupportAll">
          <span class="bulletin-title"></span>
          <span class="bulletin-content">
              {{ seller.bulletin }}
          </span>
          <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="header-background">
          <img :src="seller.avatar" />
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    showSupportAll: function () {
        //   触发当前实例上的事件
      this.$emit('showSupportAll')
    }
  },
  // 实例创建完成后被立即调用
  created () {
    this.classMap = ['icon-decrease', 'icon-discount', 'icon-guarantee', 'icon-invoice', 'icon-special']
  },
  //   Array<string> | Object
  props: {
    // 检测类型验证
    seller: {
      type: Object
    }
  }
}
</script>
<style rel="stylesheet/less" type="text/css" lang="less">
@import "../../common/less/mixin.less";
@import "../../common/less/icon.css";
#header {
  width: 100%;
  height: 134px;
  box-sizing: border-box;
  background: rgba(7, 17, 27, 0.5);
  position: relative;
  overflow: hidden;
  #seller-wrapper {
    padding: 24px 12px 18px 24px;
    height: 106px;
    box-sizing: border-box;
    .header-img {
      float: left;
      img {
        width: 64px;
        height: 64px;
      }
    }
    .header-seller {
      color: rgb(255, 255, 255);
      margin-left: 16px;
      float: left;
      div.header-seller-1 {
        width: 200px;
        span.logo {
            //声明在mixin.less
          .bglogo('../../components/header/brand');
          display: inline-block;
          width: 30px;
          height: 18px;
          background-size: cover;
        }
        span.name {
          font-weight: bold;
          font-size: 16px;
          line-height: 18px;
          vertical-align: top;
        }
      }
      div.header-seller-2 {
        margin-top: 8px;
        h3 {
          font-weight: 200;
          font-size: 12px;
          line-height: 12px;
        }
      }

      .header-seller-supports {
        margin-top: 10px;
        height: 12px;
        span {
          font-weight: 200;
          font-size: 10px;
          line-height: 12px;
          vertical-align: top;
        }
        span.header-seller-supports-icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
        }
        .header-seller-supports-num {
          float: right;
          display: inline-block;
          background: rgba(7, 17, 27, 0.2);
        }
        /*利用动态class切换icon*/
        span.icon-decrease {
          .bglogo('../../components/header/decrease_1');
        }
        span.icon-discount {
          .bglogo('../../components/header/discount_1');
        }
        span.icon-guarantee {
          .bglogo('../../components/header/guarantee_1');
        }
        span.icon-invoice {
          .bglogo('../../components/header/invoice_1');
        }
        span.icon-special {
          .bglogo('../../components/header/special_1');
        }
        span.header-seller-supports-num {
          display: inline-block;
          height: 24px;
          box-sizing: border-box;
          line-height: 24px;
          padding-left: 8px;
          padding-right: 8px;
          font-size: 10px;
          border-radius: 7px;
        }
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    padding: 0 22px 0 12px;
    height: 28px;
    line-height: 28px;
    font-size: 10px;
    color: rgb(255, 255, 255);
    background: rgba(7, 17, 27, 0.2);
    font-weight: 200;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .bulletin-title {
      vertical-align: top;
      margin-top: 7px;
      display: inline-block;
      height: 12px;
      width: 22px;
      background-size: 22px 12px;
      .bglogo('../../components/header/bulletin')
    }
    .bulletin-content {
      vertical-align: top;
    }
    .icon-keyboard_arrow_right {
      position: absolute;
      right: 12px;
      /*bottom: 14px;*/
      line-height: 28px;
    }
  }
  .header-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      filter: blur(10px);//滤镜，设置高斯模糊，即图像模糊
    }
  }
}
</style>

