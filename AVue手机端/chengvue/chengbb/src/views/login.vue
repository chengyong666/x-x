<template>
  <div>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary" @click="login">Login</mt-button>
  </div>
</template>

<script>
export default{
  data () {
    return {
      username:"",
      password:""
    }
  },
  methods: {
    login(){
    this.$http.get("https://www.easy-mock.com/mock/5d4b7b9c163732609ca29178/chengyong666/api/register").then((reg)=>{
      console.log(reg);
    if(reg.data.data.username==this.username||reg.data.data.password==this.password){
     alert=("登录成功");
    }else{
      alert=("登录失败");
    }
    })
    }
  }
}
</script>

<style lang="scss">
.mint-cell-wrapper{background-image: none !important;}
</style>