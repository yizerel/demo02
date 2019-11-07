<template>
<div>
<van-nav-bar 
  title="支付中心"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="setting"
/>

<van-cell title="实名认证"  is-link arrow-direction="" value="去认证" ></van-cell>
<van-cell title="设置支付密码" is-link arrow-direction="" value="去设置"></van-cell>
<van-cell title="自动扣款" is-link arrow-direction=""></van-cell>
<van-cell title="常见问题" is-link arrow-direction="" value="FAQ"></van-cell>



</div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup, NavBar } from 'vant';

Vue.use(Cell).use(CellGroup)
.use(NavBar);


export default {
  data() {
    return {

    }
    },
    methods :{
    onClickLeft(){
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
.setting >>> .van-nav-bar__text,
.setting >>> .van-nav-bar__arrow::before{
    color:black;
}
</style>