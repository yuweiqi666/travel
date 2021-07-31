<template>
<div class="swiper">
  <swiper :options="swiperOption" :not-next-tick="notNextTick">
    <swiper-slide v-for="item in imgList" :key="item.id">
      <img :src="item.url">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    imgList: {
      type: Array
    }
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        direction: 'horizontal',
        pagination: '.swiper-pagination'
      }

    }
  }
}
</script>

<style scoped lang='scss'>
.swiper{
  height: 250px;
  .swiper-container{
    height: 100%;
    img {
      height: 100%;
      width: 100%;
    }
    /deep/.swiper-pagination {
      .swiper-pagination-bullet-active {
        background-color: #fff;
      }
    }
  }
}
</style>
