<template>
  <ul class="discount">
      <!-- 索引为第二个参数，加括号，逗号分隔 -->
      <li  v-for="(item,index) in info">
          <!-- 已绑定class ，还可动态绑定 -->
          <span class="icon" :class="classMap[info[index].type]"></span>
      {{ info[index].description }}
      </li>
  </ul>
</template>
<script>
export default {
  // props:用于接收来自父组件的数据
  props: ['classMap', 'info']
}
</script>
<style lang="less">
  // css 文件需要加;号，不然报错
  @import "../../common/less/mixin.less";
  @import "../../common/less/icon.css";  
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

   
</style>
