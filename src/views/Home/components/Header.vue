<template>
  <div class="header">
    <div class="back-btn">
      <i class="iconfont toutiao-arrow-left-bold"></i>
    </div>
    <div class="search-input">
      <i class="iconfont toutiao-search"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="city-select">
      城市
      <i class="iconfont toutiao-arrow-down-filling"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang='scss'>
@import '@/assets/style/variables.scss';
.header {
  display: flex;
  height: 86px;
  background-color: $bgColor;
  font-size: 14px;
  line-height: 86px;
  color: #fff;
  .back-btn {
    width: 64px;
    text-align: center;
    margin-right: 5px;
    i {
      font-size: 20px;
    }
  }
  .search-input {
    position: relative;
    flex: 1;
    line-height: 86px;
    i {
      color: #ccc;
      position: absolute;
      left: 10px;
      font-size: 18px;
    }
    input {
      padding-left: 52px;
      width: 100%;
      border-radius: 5px;
      height: 60px;
      line-height: 60px;
    }
  }
  .city-select {
    text-align: center;
    width: 124px;
  }
}
</style>
