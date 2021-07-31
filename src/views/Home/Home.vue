<template>
  <div class="home">
    <!-- header部分 -->
    <Header :city='city' />
    <!-- 轮播图部分 -->
    <Swiper :imgList='imgList'/>
    <!-- 图标区域 -->
    <Icons :iconList='iconList'/>
    <!-- 热销推荐区域 -->
    <Recommand :recommandList='recommandList' />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/icons.vue'
import Recommand from './components/Recommand.vue'
import { getCurrentCityApi, getRecommandListApi, getImgRunApi, getIconsApi } from '@/api/home.js'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      imgList: [],
      iconList: [],
      recommandList: []
    }
  },
  components: {
    Header,
    Swiper,
    Icons,
    Recommand
  },
  async created () {
    // 首页当前城市接口数据
    const cityData = await getCurrentCityApi()
    this.city = cityData.data.data.city
    // 首页推荐列表数据
    const { data } = await getRecommandListApi()
    this.recommandList = data.data
    // 首页轮播图数据
    const imgList = await getImgRunApi()
    this.imgList = imgList.data.data
    // 首页icon图标
    const iconList = await getIconsApi()
    this.iconList = iconList.data.data
  }
}
</script>

<style>

</style>
