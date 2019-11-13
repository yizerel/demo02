<template>
<div>
  <van-nav-bar
  title="我的收货地址"
  left-text="关闭"
  left-arrow
  @click-left="onClickLeft"
  class="setting"
/>
<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
/>

</div>
</template>

<script>

import Vue from 'vue';
import { AddressEdit,Toast } from 'vant';
import areaList from '../../src/address.js'

Vue.use(AddressEdit).use(Toast);

export default {
  data() {
    return {
      areaList,
    }
  },

  methods: {
    onSave() {
      Toast('保存成功');
    },
    onDelete() {
      Toast('已删除');
    },
    onClickLeft(){
    this.$router.push({ name:"mine" });
    }
  }
}
</script>

<style scoped>
.setting >>> .van-nav-bar__text,
.setting >>> .van-icon-arrow-left:before{
  color:black;
}
</style>

