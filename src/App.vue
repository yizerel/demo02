<template>
<div id="app">

  <h3>{{obj.name}}</h3>
  <br>
  <div v-bind:title='t'>鼠标瞄上去</div>
  <br>
  <div v-html='h'></div>
  <br>
  <br>

  <ul>
    <li v-for="(item,index) in list" :key="index">
    {{item}}
    </li>
    </ul>
    <br>
    <ul>
    <li v-for="(item,index) in list1" :key="index">
        {{item.title}}

      </li>
    </ul>
    <br>
    <ul>
      <li v-for="(item,index) in list2" :key="index">
        {{item.cate}}
        <ol>
          <li v-for="(item,index) in item.list" :key="index">
            {{item.title}}
          </li>
        </ol>
      </li>
    </ul>
      <img v-bind:src="url">
      <br>
      <div v-bind:class="{'style1':flag,'style2':!flag}">1</div>
      <br>
      <br>
      <br>
      <ul>
        <li v-for="(item,index) in list1" :key='index' :class="{red:index==0}"> 
          {{item.title}}
        </li>
      </ul>
      <h2>{{msg}}</h2>
      <input type="text" v-model='msg'>
      <button v-on:click="getmsg()">获取表单数据</button>
      <button v-on:click="setmsg()">设置表单数据</button>
      <hr>
      <br>
      <input type="text" ref="userinfo">
      <button v-on:click="getinputvalue()">获取</button>
      <div ref="a1">readme</div>
</div>
</template>

<script>
export default{
  data(){
    return {
      msg:'Vue',
      obj:{
      name:'李四',
      },
      list:['1','2','3'], 
      list1:[
        {'title':'1'},
        {'title':'2'},
        {'title':'3'},
      ],
      list2:[
        {
          "cate":"国内新闻23",
          "list":[
            {"title":'国内新闻1'},
            {"title":'国内新闻2'},
          ]
        },
        {
          "cate":"国际新闻",
          "list":[
            {"title":"国际新闻1"},
            {"title":"国际新闻2"},
          ]
        }
      ],
      t:'hhhh',
      h:'1111',
      flag:'true',
  }
  },
  methods:{
    getmsg(){
      alert(this.msg)
    },
    setmsg(){
      this.msg="改变后的数据";
    },
    getinputvalue(){
      alert(this.$refs.userinfo.value);
      alert("字体会变色")
      this.$refs.a1.style.color="red";
    }
  }
}


</script>

<style>
.style1{
  color:red;
}
.style2{
  color:blue;
}

</style>
