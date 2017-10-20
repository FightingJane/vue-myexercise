<template>
  <div class="ratingstar" :class="starStyle">
      <!-- 循环items,绑定class值 -->
      <span v-for="item in items" :class="item"></span>
  </div>
</template>
<script>
let CLASS_ON = 'on'
let CLASS_HALF = 'half'
let CLASS_OFF = 'off'
export default {
  // size、score：supports组件传入；props:用于接收来自父组件的数据
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
//   计算属性,getter 函数
  computed: {
    starStyle () {
      return 'star-' + this.size
    },
    items () {
      const LENGTH = 5
      let classArr = []
      let score = Math.floor(this.score * 2) / 2
      let integer = Math.floor(score)
      let isDec = score % 1 !== 0
      for (let i = 0; i < integer; i++) {
        classArr.push(CLASS_ON)
      }
      if (isDec) {
        classArr.push(CLASS_HALF)
      }
      while (classArr.length < LENGTH) {
        classArr.push(CLASS_OFF)
      }
      return classArr
    }
  },
  created () {
    console.log(this.score)
  }
}
</script>
<style rel="stylesheet/less" type="text/css" lang="less">
@import "../../common/less/mixin.less";
  .star-48{
    height: 24px;
    text-align: center;
    span{
      display: inline-block;
      width: 20px;
      height: 19px;
      background-size: 20px 19px;
    }
    span.on{
      .bglogo('../../components/ratingstar/star48_on');
    }
    span.half{
      .bglogo('../../components/ratingstar/star48_half');
    }
    span.off{
      .bglogo('../../components/ratingstar/star48_off');
    }
  }
</style>
