<template>
    <itemMusicTopVue :music="state.music"></itemMusicTopVue>
    <itemMusicListVue></itemMusicListVue>
</template>

<script>
import itemMusicTopVue from '@/components/item/itemMusicTop.vue'
//歌单列表
import itemMusicListVue from '@/components/item/itemMusicList.vue'
import {getMusicItemList} from '@/request/api/item/itemMusic.js'
import {reactive,onMounted} from 'vue'
import {useRoute} from 'vue-router'
export default {
    name:'ItemMusic',
    setup(){
       let state=reactive({
        music:{},//歌单的详情页的数据
        // itemList: [], //歌单的歌曲
       }); 
       onMounted(async ()=>{
        let id=useRoute().query.id;
        //根据歌单id查看歌单详情
        let res=await getMusicItemList(id);
        state.music=res.data.playlist;
        //获取歌单的歌曲
        //防止页面刷新，数据丢失，将数据保存到sessionStorage中
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    })
    return {state};
    },
    components:{
        itemMusicTopVue,
        itemMusicListVue
    }
}
</script>

<style lang="less" scoped>

</style>