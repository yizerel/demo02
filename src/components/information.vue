<template>
<div>
<van-nav-bar 
  title="个人信息"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="setting"
>
  设置
</van-nav-bar>
<van-cell title="头像" @click="onShow"><van-icon name="arrow" size='16'/></van-cell>
<van-cell title="昵称"><van-icon name="arrow" size='16'/></van-cell>

<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />


</div>
</template>

<script>
import Vue from 'vue';
import consola from 'consola/src/browser';
import { Cell, CellGroup, NavBar, Icon, ActionSheet, Toast } from 'vant';

Vue.use(Cell).use(CellGroup)
.use(NavBar).use(Icon).use(ActionSheet).use(Toast);
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: '拍照', id: 1 },
        { name: '从手机相册选择', id: 2 },
        { name: '取消',  id: 3 }  /*subname: '描述信息',*/
      ]
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    onShow() {
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      this.show = true;
    },
    onSelect(item){
      this.show = false;
      consola.info('item: ', item);
      Toast(item.name);
    }
  }
}
</script>

<style scoped>
.setting >>> .van-nav-bar__text,
.setting >>> .van-icon-arrow-left{
  color:black;
}
</style>