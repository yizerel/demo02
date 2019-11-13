<template>
<div>
        <van-tabs>
        <van-tab title="摄影">
                <img width=180 height=280 src="../assets/images/t1.jpg"> <img width=180 height=280 src="../assets/images/t2.jpg">
                <img width=180 height=280 src="../assets/images/t3.jpg"> <img width=180 height=280 src="../assets/images/t4.jpg">
                <img width=180 height=280 src="../assets/images/t5.jpg"> <img width=180 height=280 src="../assets/images/t6.jpg">
                <br><br><br>
        </van-tab>
        <van-tab title="美食">
                <img width=180 height=280 src="../assets/images/m1.jpg"> <img width=180 height=280 src="../assets/images/m2.jpg">
                <img width=180 height=280 src="../assets/images/m3.jpg"> <img width=180 height=280 src="../assets/images/m4.jpg">
                <img width=180 height=280 src="../assets/images/m5.jpg"> <img width=180 height=280 src="../assets/images/m6.jpg">
                <br><br><br>
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
        <van-tabbar v-model="active">
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
import { Tabbar, TabbarItem,Tab,Tabs} from 'vant';

Vue.use(Tabbar).use(TabbarItem)
.use(Tab).use(Tabs);



export default {
    data(){
    return{
        active:1
    }
    }
}
</script>