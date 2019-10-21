<template>
<div id="app">

  <h2>{{msg}}</h2>
  <br>
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
</div>
</template>

<script>
export default{
  data(){
    return {
      msg:'Vue',
      obj:{
      name:'张三',
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
      
    }
  }
}


</script>

<style>

</style>
