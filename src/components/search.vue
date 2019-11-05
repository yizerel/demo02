<template>
<div>
        <van-tabs v-model="active">
        <van-tab title="摄影">
                <img width=180 height=280 src="../assets/images/t1.jpg"> <img width=180 height=280 src="../assets/images/t2.jpg"><br>
                <img width=180 height=280 src="../assets/images/t3.jpg"> <img width=180 height=280 src="../assets/images/t4.jpg">
                <img width=180 height=280 src="../assets/images/t5.jpg"> <img width=180 height=280 src="../assets/images/t6.jpg">
        </van-tab>
        <van-tab title="美食">
                <img width=180 height=280 src="../assets/images/m1.jpg"> <img width=180 height=280 src="../assets/images/m2.jpg">
                <img width=180 height=280 src="../assets/images/m3.jpg"> <img width=180 height=280 src="../assets/images/m4.jpg">
                <img width=180 height=280 src="../assets/images/m5.jpg"> <img width=180 height=280 src="../assets/images/m6.jpg">
        </van-tab>
        <van-tab title="电影">
                <img width=180 height=280 src="../assets/images/d1.jpg"> <img width=180 height=280 src="../assets/images/d2.jpg">
                <img width=180 height=280 src="../assets/images/d3.jpg"> <img width=180 height=280 src="../assets/images/d4.jpg">
        </van-tab>
        <van-tab title="购物">      
                <img width=180 height=280 src="../assets/images/s1.jpg"> <img width=180 height=280 src="../assets/images/s2.jpg">
                <img width=180 height=280 src="../assets/images/s3.jpg"> <img width=180 height=280 src="../assets/images/s4.jpg">
        </van-tab>
        </van-tabs>
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
import { Tabbar, TabbarItem,Tab,Tabs} from 'vant';

Vue.use(Tabbar).use(TabbarItem)
.use(Tab).use(Tabs);



export default {
    data(){
    return{
        active:0
    }
    }
}
</script>