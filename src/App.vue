<template>
<div id="app">
<div class="head">大鸽饭点餐系统</div>


<mt-tabbar v-model="selected">
  <mt-tab-item id="外卖">
    <img slot="icon" :src="takeaway">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    <img slot="icon" :src="order">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" :src="discover">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" :src="mine">
    我的
  </mt-tab-item>
</mt-tabbar>

<router-view></router-view>
</div>
</template>

<script>
import discover from './assets/images/discover.png'
import mine from './assets/images/mine.png'
import order from './assets/images/order.png'
import takeaway from './assets/images/takeaway.png'

export default {
  data() {
    return {
      input: '',
      discover,
      mine,
      order,
      takeaway
    }
  }
}
</script>

<style>


</style>