<template>
 <div>
  <!-- 轮播 -->
    <mt-swipe :auto="4000" class="banner">

        <mt-swipe-item v-for="item in list" :key="item.url">
          <a :href="item.href">
             <img :src="item.url">
          </a>
        </mt-swipe-item>

    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 niness">
        <li v-for="item in nines" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="item.path">
            <span :class=[item.icon]></span>
            <div class="mui-media-body">{{item.title}}</div>
          </router-link>
        </li>
    </ul>

  </div>
</template>

<style>
.banner{height: 250px !important;}
.banner img{width: 100%;height: 100%;}
.niness  li a span{font-family: iconfont;font-size: 2.4em;}
.niness  li{width: 33.33%;}
</style>

<script>
   export default{
    data () {
      return {
     // 轮播图
     list:[
        {href:"http://wwww.baidu.com",url:require("../assets/img/banner1.jpg")},
        {href:"http://wwww.baidu.com",url:require("../assets/img/banner2.jpg")}
       ],
    // 九宫格
    nines:[
         {title:"新闻资讯",icon:"icon-xinwenzixun",path:"/newslist.vue"},
         {title:"图片分享",icon:"icon-tupian",path:"/piclist.vue"},
         {title:"商品购买",icon:"icon-shangpingouwudai",path:"/shangpin.vue"},
         {title:"留言反馈",icon:"icon-liuyan",path:"/liuyan.vue"},
         {title:"视频专区",icon:"icon-video",path:"/shipin.vue"},
         {title:"联系我们",icon:"icon-lianxiwomen",path:"/linkme.vue"},
    ]
      }
    }
  }
</script>