<template>
<div>
<br>


</div>
</template>

<script>
import Vue from 'vue'
import {TreeSelect} from 'vant'
Vue.use(TreeSelect);

export default{
  data(){
    return{
      activeIndex: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
    };
  }
}
</script>

<style>

</style>