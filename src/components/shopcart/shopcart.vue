<template>
  <div class="shopcart">
      <div class="container">
          <div class="shopcart-left">
              <div class="cart-wrapper">
                  <div class="cart">
                      <i class="icon-shopping_cart"></i>
                  </div>
              </div>
              <div class="price-wrapper"><span>$0</span></div>
              <div class="desc-wrapper"><span>另需配送费4元</span></div>              
          </div>
          <div class="shopcart-right"><span>20起送</span></div>
      </div>
  </div>        
</template>
<script>
export default {}
</script>
<style rel="stylesheet/less" type="text/css" lang="less">
@import "../../common/less/icon.css";
.shopcart{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .container{
      background-color: #141d27;
      display: flex;
      .shopcart-left{
        flex: 1;
        font-size: 0;
        .cart-wrapper{
          display: inline-block;
          position: relative;
          left: 12px;
          top: -10px;
          box-sizing: border-box;
          height: 56px;
          width: 56px;
          padding: 6px;
          border-radius: 50%;
          background-color: #141d27;
          .cart{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgba(255,255,255,0.4);
            text-align: center;
            .icon-shopping_cart{
              font-size: 24px;
              line-height: 44px;
            }
          }
        }
        .price-wrapper{
          display: inline-block;
          font-size: 16px;
          color: rgba(255,255,255,0.4);
          font-weight: 700;
          vertical-align: top;
          padding-top: 12px;
          padding-bottom: 12px;
          height: 56px;
          box-sizing: border-box;
          margin-left: 10px;
          span{
            padding-left: 12px;
            padding-right: 12px;
            line-height: 32px;
            border-right: 1px solid rgba(255,255,255,0.1);

          }
        }
        .desc-wrapper{
          display: inline-block;
          font-size: 16px;
          height: 56px;
          padding-top: 12px;
          padding-bottom: 12px;
          vertical-align: top;
          box-sizing: border-box;
          span{
            line-height: 32px;
            padding-left: 12px;
          }
        }
      }
      .shopcart-right{
        flex: 0 0 105px;
        width: 105px;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
        background-color: #7e8c8d;
        span{
          line-height: 56px;
        }
      }
    }
  }
</style>

