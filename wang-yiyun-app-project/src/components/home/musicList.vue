<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe 
              :loop="false" 
              :width="130"
              class="my-swpie"
              :show-indicators="false"
            >
                <van-swipe-item v-for="item in state.musicList" :key="item">
                        <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
                            <img :src="item.picUrl" alt=""/>
                            <span class="playCount">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofangMV"></use>
                            </svg> 
                            {{ changeCount(item.playCount) }}
                            </span>
                            <span class="name">{{ item.name }}</span>
                        </router-link>
                    </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
import {getMusicList} from '@/request/api/home.js'
import {reactive,onMounted} from  'vue'
//vue2
export default {
//     data() {
//         return {
//             musicList: [],
//         }
//     },
//     methods: {
//        async getGeDan(){
//         let res=await getMusicList();
//         console.log(res.data.result);
//         this.musicList=res.data.result;
//        },
//        changeCount:function(count){
//         if(count >= 100000000) {
//          return (count / 100000000).toFixed(1) + "亿";
//         } else if (count >= 10000) {
//          return (count / 10000).toFixed(1) + "万";
//         }
//        },
//     },
//     mounted() {
//        this.getGeDan();
//     },
// }
  setup() {
    const state=reactive({
        musicList: [],
    })
    function changeCount(count){
        if(count >= 100000000) {
         return (count / 100000000).toFixed(1) + "亿";
        } else if (count >= 10000) {
         return (count / 10000).toFixed(1) + "万";
        }
    }
    onMounted(async ()=>{
        let res=await getMusicList();
        state.musicList=res.data.result;
    })
    return {changeCount,state};
  }
}
</script>
<style lang="less" scoped>
.musicList {
    width: 100%;
    height: 5rem;
    padding: .2rem;
    .musicTop{
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        .title{
            font-size: 20px;//大小
            font-weight: 900;//加粗
        }
        .more{
            border:1px solid #ccc;
            text-align: center;
            line-height: 0.6rem;
            padding: 0rem 0.2rem;//左右为10px
            border-radius: 20px;//边框的样式   
        }
    }
    .musicContent{
        width: 100%;
        height: 3.6rem;
        .van-swipe-item{
          //   margin-right: 0.14rem;
          padding-right: 0.2rem;
          position: relative;
          height: 3.8rem;
          img{
            width: 100%;
            height: 2.4rem;
            border-radius: .2rem;
          }
          .playCount{
            position: absolute;
            z-index: 100;
            right: 0.3rem;
            color: white;
            margin-top: 0.06rem;
            .icon {
              width: 0.3rem;
              height: 0.3rem;
            }
          }
          .name {
                //   position: absolute;
                bottom: 0px;
             }
        }
    }

}
</style>