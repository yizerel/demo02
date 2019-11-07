<template>
<div>

<van-tree-select
  height="200vw"
  :items="items"
  :main-active-index.sync="activeIndex"
>
  <template slot="content">
<van-card v-if="activeIndex === 0"
  num="1"
  tag="新品"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 0"
  num="2"
  tag="新品"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 0"
  num="3"
  tag="新品"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 0"
  num="4"
  tag="热卖"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 1"
  num="5"
  tag="热卖"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>
</template>

</van-tree-select>
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
import { TreeSelect,Card } from 'vant';
Vue.use(TreeSelect).use(Card);

    export default {
    data(){     
    return{
    items: [{ text: '分组 1' }, { text: '分组 2' },{ text: '分组 3' }, { text: '分组 4' }],
    activeIndex:0,
    }
}
}
</script>