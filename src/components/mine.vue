<template>

<div>
<van-nav-bar
  title="设置"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="setting"
/>
<van-cell title="个人信息" is-link to="information" />
<van-cell title="账号安全" is-link to="security" />
<van-cell title="支付设置" is-link to="pay" />
<van-cell title="收货地址" is-link to="address" value="修改/添加"/>


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
import { Cell, CellGroup, CouponCell, CouponList} from 'vant';


Vue.use(Cell).use(CellGroup)
.use(CouponCell).use(CouponList);



export default {
  data(){
    return {
    active:3,
    }
  },
  methods: {
    onClickLeft(){
      this.$router.push({ name:"index" });
    },
  }
}
</script>
<style  scoped>
.setting >>> .van-nav-bar__text,
.setting >>> .van-icon-arrow-left:before{
  color:black;
}
</style>>

