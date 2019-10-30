<template>
<div id="app">
<input type="text" v-model='todo'>
<button v-on:click="add()">增加</button>
<h2>进行中</h2>
<ul>
  <li v-for="(item,index) in list" :key="index">
   <input type="checkbox" v-model='item.checked'>{{item.title}}
   <button v-on:click="remove(index)">删除</button>
   </li>
</ul>
<h2>已完成</h2>
<ul>
  <li v-for="(item,index) in list2" :key="index">
   <input type="checkbox" v-model='item.checked'>{{item.title}}
   <button v-on:click="remove(index)">删除</button>
  </li>
</ul>

</div>

</template>

<script>
export default{
  data(){
    return {
      todo:'',
      list:[
        {
          title:'学习',
        }
        ],
        list2:[
        {
          title:'工作',
          checked:true,
        }    
      ],
  }
},methods:{
 add(){
  this.list.push({
    title:this.todo,
    checked:false,
  })
  alert("增加成功")
  this.todo=""
  },
  remove(key){
  this.list.splice(key,1)
  alert("删除成功")
  }
 }
}

</script>

<style>
li{
  list-style-type:none;
}
</style>