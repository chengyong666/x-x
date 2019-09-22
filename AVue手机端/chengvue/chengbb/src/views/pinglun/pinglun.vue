 <template>


 <div>
    <h4>发表评论</h4>
    <textarea></textarea>

    <div class="fabiao">
         <mt-button plain type="primary" @click="pinglun">发表评论</mt-button>
    </div>
    <ul>
       <li v-for="(item,index) in list" :key="index">
        <div class="top">
           <span>第<i>1</i>楼</span>
           <span  for="">{{ item.user }}</span>
           <input type="text" v-model="user" class="form-control">
           <span>发表时间: <i></i></span>
        </div>
        <div class="content"  for="">
         {{ item.content }}
        </div>
       </li>
    </ul>
    <div class="jiazai">
         <mt-button plain type="danger">加载更多</mt-button>
    </div>


 </div>
</template>



<style>
ul{padding-left: 0;}
ul li{ list-style:none;}
ul li .content{background: #fff;height: 50px;font-size: 14px;}
ul li .top{background:darkgray}
ul li .top span{margin-right: 1%}
ul li .top span i{font-style: normal}
.fabiao{width: 100%;text-align: center}
.jiazai{width: 100%;text-align: center}
</style>

<script>
  export default{
     data () {
        return {
         user : '',
         content : '',
          list:[]
        }
     },
     created() { //在创建的时候就调用加载函数。
                this.loadComments();
            },
     methods:{
      pinglun(){
        //  分析 发表评论的业务逻辑
                    // 1，评论数据放到 localStorage 中
                     // 2, 先组装一个最新的评论数据对象
                     // 3, 想办法把第二步中得到的评论对象保存到localStorage中
                     // 3.1 localStorage中只支持存放字符串，要先调用 JSON.stringify
                     // 3.2 在保存最新的评论数据之前，要先从localStorage获取到之前的评论数据（string）转换为一个数组对象。
                     //然后把最新的评论 push 到这个数组。(解决如果键相同值会覆盖的问题)
                     // 3.3 如果获取 localStorage中的评论字符串为空不存在，则可以返回一个 '[]' ,让JSON.parse转换
                     // 3.4 把最新的评论数组再次调用 JSON.stringify 转为数组字符串，然后调用localStorage.setItem()
                     var comment = { id : Date.now() , user : this.user , content : this.content };
                     //从localStorage中获取所有评论
                     var list = JSON.parse(localStorage.getItem('cmts') || '[]');
                     // list.push(comment);
                     list.unshift(comment);
                     //重新保存最新的评论数据
                     localStorage.setItem('cmts',JSON.stringify(list));
                     this.$emit('id',this.id);
                     this.user = this.content = '';
      },
      loadComments(){ //从本地的localStorage中加载列表
                     var list = JSON.parse(localStorage.getItem('cmts') || '[]');
                     this.list = list;
                }
     },
     props: ["id"]
  }
</script>



