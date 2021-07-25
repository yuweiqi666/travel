<template>
<div class="icon-style">
  <swiper :options="swiperOption" :not-next-tick="notNextTick">
    <swiper-slide v-for="(item, id) in handleIconList" :key='id'>
      <div class="icons">
        <a class="icon" href="https://www.qunar.com/" v-for="icon in item" :key="icon.id">
          <img :src="icon.url" alt="">
          <span class="text">{{ icon.text }}</span>
        </a>
      </div>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import { getIconsApi } from '@/api/home'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Icons',
  data () {
    return {
      notNextTick: true,
      components: {
        swiper,
        swiperSlide
      },
      swiperOption: {
        direction: 'horizontal'
      },
      iconList: []
    }
  },
  computed: {
    handleIconList () {
      let index = 0
      const result = []
      while (this.iconList.slice(index, index + 10).length) {
        result.push(this.iconList.slice(index, index + 10))
        index += 10
      }
      console.log(result)
      return result
    }
  },
  async created () {
    const { data } = await getIconsApi()
    this.iconList = data.data
  }
}
</script>

<style scoped lang='scss'>
.icon-style {
  margin-bottom: 15px;
  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 300px;
    padding-top: 15px;
    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 150px;
      height: 150px;
      img {
        width: 80px;
        height: 80px;
      }
      .text {
        color: #333;
        font-size: 12px;
      }
    }
  }
}

</style>
