<template>
  <div id="goods">
      <!-- 已注册 ref 的子组件 -->
      <div class="menu-wrapper" ref="menuscroll">
          <ul>
              <li class="menu-items" v-for="item in goods">
                  <span class="menu-items-text">
                      <span class="icon"  v-show="item.type > 0" :class="classMap[item.type]"></span>
                          {{ item.name }}                      
                  </span>
              </li>
          </ul>
      </div>
      <div class="foods-wrapper" ref="foodscroll">
          <ul class="goods-content">
              <li v-for="item in goods" class="goods-content-item">
                  <h1>{{item.name}}</h1>
                  <ul class="foods-content">
                      <li v-for="food in item.foods" class="foods-content-item">
                          <div class="food-icon">
                              <img class="food-icon-img" :src="food.icon">
                          </div>
                          <div class="food-text">
                              <h2 class="food-text-name">{{food.name}}</h2>
                              <p class="food-text-description">{{food.description}}</p>
                              <p class="food-text-sell">月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
                              <div class="food-text-price">
                                  <span class="price-logo">￥</span>
                                  <span class="price-num">{{food.price}}</span>
                                  <span v-show="food.oldPrice" class="oldPrice-num">￥{{food.oldPrice}}</span>
                              </div>
                          </div>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
       <v-shopcart></v-shopcart>
  </div>
</template>
<script>
// 处理滚动列表,一款重点解决移动端各种滚动场景需求的插件
import BScroll from 'better-scroll'
import shopcart from 'components/shopcart/shopcart'

export default {
  data () {
    return {
      goods: {
        type: Object
      }
    }
  },
  created () {
    this.classMap = ['icon-decrease', 'icon-discount', 'icon-guarantee', 'icon-invoice', 'icon-special']
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.goods = response.data
          // dom更新后执行_initBScroll(),回调的 this 自动绑定到调用它的实例上
        this.$nextTick(() => {
          this._initBScroll()
        })
      }
    })
  },
  methods: {
    _initBScroll () {
        // 已注册过 ref 的所有子组件
      this.menuScroll = new BScroll(this.$refs.menuscroll, {})
      this.foodScroll = new BScroll(this.$refs.foodscroll, {})
    }
  },
  components: {
    'v-shopcart': shopcart
  }
}
</script>
<style  lang="less">
 @import "../../common/less/mixin.less";
  #goods{
    position: absolute;
    display: flex;
    top: 174px;
    bottom: 48px;
    width: 100%;
    overflow: hidden;
    .menu-wrapper{
      flex: 0 0 80px;
      width: 80px;
      background-color: #f3f5f7;
      .menu-items{
        display: table;
        width: 56px;
        height: 54px;
        margin: 0 auto;
        font-size: 12px;
        line-height: 14px;
        font-weight: 200;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;       
        /*利用动态class切换icon*/
        span.icon-decrease{
          .bglogo('../../components/header/decrease_1');
        }
        span.icon-discount{
          .bglogo('../../components/header/discount_1');
        }
        span.icon-guarantee{
          .bglogo('../../components/header/guarantee_1');
        }
        span.icon-invoice{
          .bglogo('../../components/header/invoice_1');
        }
        span.icon-special{
          .bglogo('../../components/header/special_1');
        }
        .menu-items-text{
          display: table-cell;
          vertical-align: middle;
          text-align: center;
        }
      }
    }
    .foods-wrapper{
      flex: 1;
      .goods-content{
        .goods-content-item{
          h1{
            padding-left: 14px;
            box-sizing: border-box;
            border-left: 2px solid #d9dde1;
            background-color: #f3f5f7;
            line-height: 26px;
            height: 26px;
            color: rgb(147,153,159);
            font-size: 12px;
          }
          .foods-content{
            padding-left: 18px;
            padding-right: 18px;
            box-sizing: border-box;
            .foods-content-item{
              display: flex;
              border-bottom: 1px solid #ccc;
              padding-top: 18px;
              padding-bottom: 18px;
              .food-icon{
                flex: 0 0 57px;
                width: 57px;
                height: 57px;
                .food-icon-img{
                  width: 57px;
                  height: 57px;
                }
              }
              .food-text{
                margin-left: 10px;
                .food-text-name{
                  margin-top: 2px;
                  font-size: 14px;
                  line-height: 14px;
                  color: rgb(7,17,27);
                }
                .food-text-description,.food-text-sell{
                  margin-top: 8px;
                  font-size: 10px;
                  line-height: 14px;
                  color: rgb(147,153,159);
                }
                .food-text-price{
                  font-size: 0;
                  .price-logo{
                    font-size: 10px;
                    color: #f01414;
                    font-weight: normal;
                    line-height: 24px;
                  }
                  .price-num{
                    font-size: 14px;
                    color: #f01414;
                    font-weight: 700;
                    line-height: 24px;
                  }
                  .oldPrice-num{
                    font-size: 10px;
                    color: rgb(147,153,159);
                    font-weight: normal;
                    line-height: 24px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
