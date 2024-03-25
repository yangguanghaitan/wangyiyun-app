<template>
  <div id="swipeTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<!-- vue3新的用法 ，组合式 -->
<script>
import {getBanner} from '@/request/api/home.js'
import {reactive,onMounted} from 'vue'
export default {
  setup() {
    const state = reactive({
      images:[
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ],
    })
    onMounted(async ()=>{
      // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
      //   console.log(res);
      //   state.images=res.data.banners
      // })
      let res=await getBanner();
      state.images=res.data.banners
    })
    return { state };
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
