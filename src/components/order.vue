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
  price="10.00"
  desc="最美味陪着你"  
  title="汉堡"
  :thumb=thumbImg1
>
  <div slot="tags">
    <van-tag plain type="danger"></van-tag>

  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>

  </div>
</van-card>

<van-card v-if="activeIndex === 0"
  num="2"
  tag="新品"
  price="12.00"
  desc="美味怎能一个人独享"  
  title="炸鸡腿"
  origin-price="16.00"
  :thumb="thumbImg2"
>
  <div slot="tags">
    <van-tag plain type="danger">7.5折</van-tag>
    <van-tag plain type="danger"></van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 0"
  num="1"
  tag="热卖"
  price="20.00"
  desc="大吉大利今晚吃鸡"  
  title="烤鸡"
  origin-price="25.00"
  :thumb="thumbImg3"
>
  <div slot="tags">
    <van-tag plain type="danger">8折</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 0"
  num="2"
  tag="热卖"
  price="12.00"
  desc="一粒粒藏着大惊喜"  
  title="炸鸡球"
  :thumb="thumbImg4"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 1"
  num="1"
  tag="每日限量"
  price="8.00"
  desc="营养又美味"  
  title="豆浆油条"
  :thumb="thumbImg5"
>
  <div slot="tags">
    <van-tag plain type="danger">两条油条+一份豆浆</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>
<van-card v-if="activeIndex === 2"
  num="1"
  tag="热卖"
  price="18.00"
  desc="吃过都回味"  
  title="烧鸭饭"
  :thumb="thumbImg6"
>
  <div slot="tags">
    <van-tag plain type="danger">注:带白饭</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>

<van-card v-if="activeIndex === 3"
  num="1"
  tag="新品"
  price="25.00"
  desc="每天一碗汤"  
  title="自制新鲜南瓜南瓜汤"
  :thumb="thumbImg7"
>
  <div slot="tags">
    <van-tag plain type="danger"></van-tag>
  </div>
  <div slot="footer">
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
import consola from 'consola';
import thumbImg1 from '../assets/images/j4.jpg';
import thumbImg2 from '../assets/images/j2.jpg';
import thumbImg3 from '../assets/images/j3.jpg';
import thumbImg4 from '../assets/images/j1.jpg';

import thumbImg5 from '../assets/images/zao1.jpg';
import thumbImg6 from '../assets/images/zhong1.jpg';
import thumbImg7 from '../assets/images/wan1.jpg';

consola.info("thumbImg: ", thumbImg1);

Vue.use(TreeSelect).use(Card);

export default {
  data(){
    return{
      items: [{ text: '外卖' }, { text: '早餐' },{ text: '中餐' }, { text: '晚餐' }],
      activeIndex:0,
      thumbImg1,
      thumbImg2,
      thumbImg3,
      thumbImg4,
      thumbImg5,
      thumbImg6,
      thumbImg7,
    }
  }
}
</script>