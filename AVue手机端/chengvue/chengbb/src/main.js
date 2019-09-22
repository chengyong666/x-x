import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//引入mui组件
import "./dist/css/mui.css"
//引入阿里巴巴矢量库
import "./assets/font/iconfont.css"
Vue.prototype.$http=axios
//引入mint-ui组件
import { Header,Swipe, SwipeItem,Button , Field } from 'mint-ui';
import "mint-ui/lib/style.css"
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
