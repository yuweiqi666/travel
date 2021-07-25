<template>
  <div class="home">
    <!-- header部分 -->
    <Header />
    <!-- 轮播图部分 -->
    <Swiper />
    <!-- 图标区域 -->
    <Icons />
    <!-- 热销推荐区域 -->
    <Recommand />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
import Icons from './components/icons.vue'
import Recommand from './components/Recommand.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Icons,
    Recommand
  }
}
</script>

<style>

</style>
