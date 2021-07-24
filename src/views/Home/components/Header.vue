<template>
  <div class="header">
    <div class="back-btn">
      <i class="iconfont toutiao-arrow-left-bold"></i>
    </div>
    <div class="search-input">
      <!-- <input type="text"> -->
      <div class="input">
        <i class="iconfont toutiao-search"></i>
        输入城市/景点/游玩主题
      </div>
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
  }
  .search-input {
    flex: 1;
    box-sizing: border-box;
    padding: 12px 10px;
    .input {
      display: flex;
      align-items: center;
      color: #ccc;
      padding: 0 5px;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 5px;
      border: none;
      width: 100%;
      height: 100%;
      i{
        margin-right: 10px;
      }
    }
  }
  .city-select {
    text-align: center;
    width: 124px;
  }
}
</style>
