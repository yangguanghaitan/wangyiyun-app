<template>
  <div id="swipeTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<!-- vue3新的用法 ，组合式 -->
<script>
export default {
  setup() {
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    return { images };
  },
};
</script>
<!-- background-color:与scoped有冲突去掉 -->
<style lang="less">
#swipeTop {
  .van-swipe {
    width: 100%;
    height: 150px;
      .van-swipe-item {
        padding: 0 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
  }
  .van-swipe__indicator--active{
    background-color: rgb(20, 212, 187);
  }
}
</style>
