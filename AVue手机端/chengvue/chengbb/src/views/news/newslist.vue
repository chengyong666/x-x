<template>
<div>

  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
     <router-link :to= "'/newslistinfo/'+item.id">
        <img class="mui-media-object mui-pull-left" :src="item.url">
        <div class="mui-media-body">
          {{item.title}}
          <p class="mui-ellipsis">{{item.content}}</p>
        </div>
      </router-link>
    </li>

  </ul>


</div>
</template>

<style>

</style>

<script>

 export default{
    data () {
      return {
        list:[
          {id:1,title:"本人很帅",content:"千百次的回眸，换来今世的擦肩而过",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:2,title:"本人很帅",content:"曾经沧海难为水，除却巫山不是云",views:"11",url:"https://www.baidu.com/s?rsv_idx=1&wd=%E7%B1%B3%E5%A8%9C%E6%A1%91&usm=3&ie=utf-8&rsv_cq=%E7%BF%BB%E8%AF%91&rsv_dl=0_right_recommends_merge_20826&euri=96cb76e03e144ca1ad7bf3e7ef5d55a6"},
          {id:3,title:"本人很帅",content:"衣带渐宽终不悔，为伊消得人憔悴",views:"11",url:"https://www.baidu.com/s?rsv_idx=1&wd=%E7%81%B5%E6%A0%BC%E6%96%AF&usm=3&ie=utf-8&rsv_cq=%E7%BF%BB%E8%AF%91&rsv_dl=0_right_recommends_merge_20826&euri=04dac04acb9c4cf18805539f4db3cfde"},
          {id:4,title:"本人很帅",content:"真情像草原广阔，曾曾风雨不能阻隔",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:5,title:"本人很帅",content:"曾经沧海难为水，除却巫山不是云",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:6,title:"本人很帅",content:"千百次的回眸，换来今世的擦肩而过",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:7,title:"本人很帅",content:"千百次的回眸，换来今世的擦肩而过",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:8,title:"本人很帅",content:"千百次的回眸，换来今世的擦肩而过",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:9,title:"本人很帅",content:"千百次的回眸，换来今世的擦肩而过",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:10,title:"本人很帅",content:"千百次的回眸，换来今世的擦肩而过",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
          {id:11,title:"本人很帅",content:"千百次的回眸，换来今世的擦肩而过",views:"11",url:"https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9125bad0d7d3c4bec4beb4b3ccecd1c44b4c.jpg"},
        ]
      }

    },
    components:{

    },
    methods:{

}
  }
</script>