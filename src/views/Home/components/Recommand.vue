<template>
  <div class="recommand">
    <div class="title">
      热销推荐
    </div>
    <div class="recommand-list">
      <div class="recommand-item" v-for="item in recommandList" :key="item.id">
        <div class="recommand-image">
          <img :src="item.recommandImg" alt="">
        </div>
        <div class="recommand-info">
          <div class="recommand-title">
            {{ item.recommandTitle }}
          </div>
          <div class="recommand-description">
            {{ item.recommandDescription }}
          </div>
          <div class="recommand-price">
            <span class="price-logo">￥</span> {{ item.price }} <span class="price-text">起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommand',
  props: {
    recommandList: {
      type: Array
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../../../assets/style/mixins/onePx.scss';
  .recommand {
    .title {
      background-color: #eee;
      padding-left: 22px;
      height: 60px;
      line-height: 60px;
      font-size: 12px;
    }
    .recommand-list {
      .recommand-item {
        padding: 20px;
        display: flex;
        @include border-1px-bottom(#ccc);
        .recommand-image {
          width: 130px;
          height: 130px;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .recommand-info {
          padding-top: 10px;
          .recommand-title {
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 15px;
          }
          .recommand-description {
            font-size: 12px;
            color: #bbb;
            margin-bottom: 26px;
          }
          .recommand-price{
            font-size: 14px;
            font-weight: 700;
            color: red;
            .price-logo {
              font-size: 12px;
            }
            .price-text {
              font-size: 12px;
              color: #aaa;
            }
          }
        }
      }
    }
  }
</style>
