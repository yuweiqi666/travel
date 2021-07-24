import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入flexible
import 'amfe-flexible'
// 引入公共样式
import './assets/style/index.scss'
// 引入字体图标样式
import './assets/style/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
