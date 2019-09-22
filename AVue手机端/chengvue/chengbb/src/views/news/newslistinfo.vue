<template>
   <div style="padding: 0 4px">
     <h1 class="title">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</h1>
     <div class="looks">
       <span class="cishu">浏览次数:<i>6</i>次</span>
       <span class="time">时间:<i>2019-4-28</i></span>
    </div>
    <pinglun :id="this.id"></pinglun>

   </div>
</template>
<style lang="scss">
    .title{font-size: 14px;color: brown;text-align: center;height: 45px;line-height: 45px;}
    .looks{
      overflow: hidden;border-bottom:1px solid pink;padding-bottom: 10px;
      .cishu{
        float: left;
      }
      .time{
        float: right;text-align: right
      }
      span{
           width: 50%;font-size: 14px;color: darksalmon;
       }
          i{
            font-style: normal;
           }
    }
</style>

<!-- <style>
.title{font-size: 14px;color: brown;text-align: center;height: 45px;line-height: 45px;}
.looks{overflow: hidden;border-bottom:1px solid pink;padding-bottom: 10px}
.looks span{width: 50%;font-size: 14px;color: darksalmon}
.looks span i{font-style: normal}
.looks .cishu{float: left;}
.looks .time{float: right;text-align: right}
</style> -->

<script>
 import pinglun from "../pinglun/pinglun.vue"
 export default{
   data () {
     return {

     }
   },

   components:{
      pinglun
    },
    methods:{
            id(){

            }
    }
 }
</script>