import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import commodity from './views/commodity.vue'
import carw from './views/carw.vue'
import login from './views/login.vue'
import mine from './views/mine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      name:"home",
      redirect:"/home"

    },
    {
      path:"/login",
      name:"login",
      component:login

    },
   {
     path:"/home",
     name:"home",
     component:home

   },
   {
    path:"/commodity",
    name:"commodity",
    component:commodity
  },
  {
    path:"/carw",
    name:"carw",
    component:carw
  },
  {
    path:"/mine",
    name:"mine",
    component:mine
  },

  {
    path:"/newslist.vue",
    name:"newslist",
    component:()=>import("./views/news/newslist.vue")
    // children:[
    //   {
    //     path:"newslistinfo/:id",
    //     name:"newslistinfo",
    //     component:()=>import("./views/news/newslistinfo.vue")
    //   }
    // ]
  },
  {
    path:"/newslistinfo/:id",
    name:"newslistinfo",
    component:()=>import("./views/news/newslistinfo.vue")
  },
  {
   path:"/piclist.vue",
   name:"piclist",
   component:()=>import("./views/piclist/piclist.vue")
 },
 {
   path:"/shangpin.vue",
   name:"shangpin",
   component:()=>import("./views/shangpin/shangpin.vue")
 },
 {
   path:"/liuyan.vue",
   name:"liuyan",
   component:()=>import("./views/liuyan/liuyan.vue")
 },
 {
   path:"/shipin.vue",
   name:"shipin",
   component:()=>import("./views/shipin/shipin.vue")
 },
 {
   path:"/linkme.vue",
   name:"linkme",
   component:()=>import("./views/linkme/linkme.vue")
 },










    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  linkActiveClass:"mui-active"  //覆盖默认的路由高亮的类router-link-active
})
