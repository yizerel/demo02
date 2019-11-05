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
        <van-swipe-item><img width="370" height="200" src="../assets/images/f1.jpg">
        </van-swipe-item>
        <van-swipe-item><img width="370" height="200" src="../assets/images/f2.jpg">
        </van-swipe-item>
        <van-swipe-item><img width="370" height="200" src="../assets/images/f3.jpg">
        </van-swipe-item>
        <van-swipe-item><img width="370" height="200" src="../assets/images/f4.jpg">
        </van-swipe-item>
        </van-swipe>

        <van-notice-bar  :scrollable="true"
        text="传承饮食文化，传播特色美味——欢迎来到大鸽饭店，祝你点餐愉快"
        left-icon="volume-o"
        />

        <p style="font-size:18px">新人见面礼</p>
        <img width="350" height="250" src="../assets/images/q1.png">
        <p>最新活动：以下三款小吃到店可以免费选一款品尝</p>
        <p>活动剩余时间:</p>
        <van-count-down :time="time"
        format="DD天HH时mm分ss秒"
        />
        <img width="125" height="150" src="../assets/images/x1.jpg">
        <img width="125" height="150" src="../assets/images/x2.jpg">
        <img width="125" height="150" src="../assets/images/x3.jpg">
        <van-tabbar>
            <van-tabbar-item
                icon="coupon-o"
            >
                <router-link to="/index">首页</router-link>
            </van-tabbar-item>
            <van-tabbar-item
                icon="eye"
            >
                <router-link to="/search">发现</router-link>
            </van-tabbar-item>
            <van-tabbar-item
                icon="logistics"
            >
                <router-link to="/order">点餐</router-link> 
            </van-tabbar-item>
            <van-tabbar-item
                icon="manager"
            >
                <router-link to="/mine">我的</router-link> 
            </van-tabbar-item>
        </van-tabbar>
    </div>

    

</template>
<script>

import Vue from 'vue';
import { Image, Button, Tabbar, TabbarItem, Swipe, SwipeItem, Search, NoticeBar,CountDown} from 'vant';

Vue.use(Image).use(Button)
.use(Tabbar).use(TabbarItem)
.use(Swipe).use(SwipeItem)
.use(Search).use(NoticeBar)
.use(CountDown);




export default {
  data() {
    return {
      value: '',
      time:30*60*60*1000
    }
  },
  methods: {
    onSearch(){}
  }
}
</script>