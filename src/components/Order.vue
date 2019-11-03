<template>
<div>

<van-tree-select
  height="55vw"
  :items="items"
  :main-active-index.sync="activeIndex"
>

</van-tree-select>  
        <van-tabbar>
        <van-tabbar-item
                icon="coupon-o"
        >
        <router-link to="/Index">首页</router-link>
        </van-tabbar-item>
        <van-tabbar-item
                icon="eye"
        >
        <router-link to="/Search">发现</router-link>
        </van-tabbar-item>
        <van-tabbar-item
                icon="logistics"
        >
        <router-link to="/order">点餐</router-link> 
        </van-tabbar-item>
        <van-tabbar-item
                icon="manager"
        >
        <router-link to="/Mine">我的</router-link> 
        </van-tabbar-item>
        </van-tabbar>
</div>
</template>
<script>
import Vue from 'vue';
import { TreeSelect } from 'vant';
Vue.use(TreeSelect);


    export default {
    data(){
    return{
    items: [{ text: '分组 1' }, { text: '分组 2' }],
    activeId:1,
    activeIndex:0
    }
}
}
</script>