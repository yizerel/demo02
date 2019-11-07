<template>
<div>
<van-nav-bar 
  title="安全中心"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="setting"
>
</van-nav-bar>
<van-nav-bar 
  left-text="账号"
  class="setting2"
>
</van-nav-bar>
<van-cell title="登录密码"  label="安全等级:低" is-link arrow-direction="" value="修改" ></van-cell>
<van-cell title="账号绑定"  is-link arrow-direction="" value="绑定/解绑"></van-cell>
<van-cell title="修改手机号码"><van-icon name="arrow" size='16'/></van-cell>
<van-nav-bar 
  left-text="安全"
  right-text="风险等级 中"
  class="setting2"
>
</van-nav-bar>
<van-cell title="注销账号" label="注销后无法恢复操作"><van-icon name="arrow" size='16'/></van-cell>



</div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup, NavBar, Icon } from 'vant';

Vue.use(Cell).use(CellGroup)
.use(NavBar).use(Icon);


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
.setting >>> .van-icon-arrow-left{
  color:black;
}
.setting2 >>> .van-nav-bar__text{
  color:gray;
}
</style>