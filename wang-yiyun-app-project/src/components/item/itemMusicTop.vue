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
        <div class="musicContentLeft">
            <img :src="music.coverImgUrl" alt=""/>
            <div class="playCount">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-kuaijin"></use>
               </svg>
               <span>{{changeCount(music.playCount)}}</span>
            </div>
        </div>
        <div class="musicContentRight">
            <p class="rightP_one">{{music.name}}</p>
            <div class="rightImg">
                <img :src="music.creator.avatarUrl"/>
                <span>{{music.creator.nickname}}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-kuaitui"></use>
               </svg>
            </div>
            <div class="rightP_two">
                <span>{{music.description}}</span>
            </div>
        </div>
    </div>
    <div class="itemMusicFooter">
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
            </svg>
            <span>{{music.commentCount}}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-huiyuanzhuanxiang"></use>
            </svg>
            <span>{{music.shareCount}}</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
            </svg>
            <span>下载</span>
        </div>
        <div class="footerItem">
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tianjiadao"></use>
            </svg>
            <span>多选</span>
        </div>
    </div>
</template>

<script>
export default {
    setup(props){
        console.log(props)
        // console.log(JSON.parse(sessionStorage.getItem("itemDetail")).music.creator);
        if((props.music.creator="")){
            props.music.creator=JSON.parse(sessionStorage.getItem("itemDetail")).music.creator;
        }
        function changeCount(count) {
            if (count >= 100000000) {
                return (count / 100000000).toFixed(1) + "亿";
            } else if (count >= 10000) {
                return (count / 10000).toFixed(1) + "万";
            }
        }
        return {changeCount};
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
.itemMusicContent{
    width: 100%;
    height: 3rem;
    padding: .2rem;
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    .musicContentLeft{
        width: 36%;
        height: 2.6rem;
        position: relative;
        img{
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 0.2rem;
            position: absolute;
            z-index: -1;
        }
        .palyCount{
            position: absolute;
            right: 0.1rem;
            margin-top: 0.1rem;
            .icon{
                width: 0.26rem;
                height: 0.26rem;
                margin-top: -0.02rem;
                vertical-align: middle;
            }
            span {
                 font-size: 0.26rem;
                 color: #fff;
            }
        }
    }
    .musicContentRight{
        width: 60%;
        height: 2.6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .rightP_one {
           font-size: 0.3rem;
           font-weight: 900;
           color: #fff;
           font-family: "微软雅黑";
        }
        .rightImg{
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            color: #ccc;
            img {
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                vertical-align: middle;
            }
            span {
                margin-left: 0.1rem;
            }
            .icon {
                width: 0.26rem;
                height: 0.26rem;
                margin-top: -0.08rem;
                vertical-align: middle;
            }
        }
        .rightP_two{
            width: 100%;
            height: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: space-between; 
            span {
               display: inline-block;
               width: 95%;
               height: 100%;
               overflow: hidden;
               text-overflow: ellipsis;
               display: -webkit-box;
               -webkit-line-clamp: 2;
               -webkit-box-orient: vertical;
               font-size: 0.24rem;
               color: #ccc;
            }
        }
    }
}
.itemMusicFooter{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    margin-top: .2rem;
    .footerItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        .icon{
           fill: #fff;
        }
        span{
           margin-top: .1rem;
        }
    }
}

</style>