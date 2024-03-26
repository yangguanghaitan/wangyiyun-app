<template>
    <div class="itemMusicTop">
        <img class="bgimg" :src="music.coverImgUrl" alt=""/>
        <div class="musicTopLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-kuaitui"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="musicTopRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuichu"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofangduilie"></use>
            </svg>
        </div>
    </div>
    <div class="itemMusicContent">
        <div class="musicContentLeft"></div>
        <div class="musicContentRight"></div>
    </div>
    <div class="itemMusicFooter">
    </div>
</template>

<script>
export default {
    setup(props){
        // console.log(JSON.parse(sessionStorage.getItem("itemDetail")).music.creator);
        if((props.music.creator!="")){
            props.music.creator=JSON.parse(sessionStorage.getItem("itemDetail")).music.creator;
        }
    },
    comments:{},
    props:['music']
}
</script>

<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items:center;//居中显示
    position: relative;
    .musicTopLeft,.musicTopRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin: 0 0.2rem;
        span{
          font-size: 0.4rem;
          color: #fff;//#fff
        }
        .icon {
          fill: #fff; //填充颜色//#fff 
        }
    }
    .bgimg {
        width: 100%;
        height: 11rem;
        position: absolute;
        z-index: -1;//图片位于最底层，字体和图标在上面
        filter: blur(30px);//虚化
    }

}
</style>