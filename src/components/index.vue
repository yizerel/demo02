<template>
  <div>
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    shape="round"
    @search="onSearch"
  >
  <div slot="action" @:click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="2000" indicator-color="white">
    <van-swipe-item><img width="380" height="200" src="../assets/images/f1.jpg">
    </van-swipe-item>
    <van-swipe-item><img width="380" height="200" src="../assets/images/f2.jpg">
    </van-swipe-item>
    <van-swipe-item><img width="380" height="200" src="../assets/images/f3.jpg">
    </van-swipe-item>
    <van-swipe-item><img width="370" height="200" src="../assets/images/f4.jpg">
    </van-swipe-item>
    </van-swipe>

  <van-notice-bar  :scrollable="true"
    text="传承饮食文化，传播特色美味——欢迎来到大鸽饭店，祝你点餐愉快"
    left-icon="volume-o"
  />
  <br>
<van-grid :border="false">
  <van-grid-item :icon="qd" text="签到" />
  <van-grid-item :icon="ms" text="限时活动"/>
  <van-grid-item :icon="shopping" text="购物车" />
  <van-grid-item :icon="fl" text="分类" />
</van-grid>

  <strong><p class="p1">新人见面礼</p></strong>
        <img width="370" height="280" src="../assets/images/q1.jpg">

        <van-tabbar>
            <van-tabbar-item to="/" icon="coupon-o">
            首页
            </van-tabbar-item>
            <van-tabbar-item to="/search" icon="eye">
            发现
            </van-tabbar-item>
            <van-tabbar-item to="/order" icon="logistics">
            点餐    
            </van-tabbar-item>
            <van-tabbar-item to="/mine" icon="manager">
            我的 
            </van-tabbar-item>
        </van-tabbar>
    </div>

    

</template>
<script>

import Vue from 'vue';
import { Image, Button, Tabbar, TabbarItem, Swipe, SwipeItem, Search, NoticeBar,CountDown, Grid, GridItem} from 'vant';
import ms from '../assets/images/ms.png'
import qd from '../assets/images/qd.png'
import fl from '../assets/images/fl.png'
import shopping from '../assets/images/shopping.png'


Vue.use(Image).use(Button)
.use(Tabbar).use(TabbarItem)
.use(Swipe).use(SwipeItem)
.use(Search).use(NoticeBar)
.use(CountDown).use(Grid)
.use(GridItem);




export default {
  data() {
    return {
      value: '',
      time:30*60*60*1000,
      ms,
      qd,
      fl,
      shopping,
    }
  },
  methods: {
    onSearch(){

    },
}
}
</script>

<style scoped>
.p1{
  font-size: 18px;
  color:black;
  margin-left: 10px
}
</style>