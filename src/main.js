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

// 引入swiper轮播图样式
import 'swiper/swiper-bundle.min.css'

// 引入swiper轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
