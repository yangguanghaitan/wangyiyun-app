<!-- 歌单列表 -->
<template>
    <div class="itemMusicList">
        <div class="musicListTop">
            <div class="listLeft">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zanting"></use>
                </svg>
                <span>播放全部<span>(共{{ 1111 }}首)</span></span>
            </div>
            <div class="listRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tianjiadao"></use>
                </svg>
                <span>收藏({{ 1111 }})</span>
            </div>
        </div>
        <div class="musicList">
            
        </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.itemMusicList {
    width: 100%;
    height: 10rem;
    background-color: #fff;
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    .musicListTop {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .listLeft {
            width: 3rem;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .icon {
                stroke: #333333;
                stroke-width: 20;
            }

            span {
                font-weight: 700;

                span {
                    font-weight: 400;
                    font-size: 0.24rem;
                    color: #999;
                }
            }
        }

        .listRight {
            display: flex;
            align-items: center;
            background-color: red;
            padding: 0.2rem;//填充不改变里面内容的大小
            border-radius: .4rem;
            color: #fff; //字体颜色

            // border: 1px solid rgb(23, 21, 21);
            .icon {
                width: 0.3rem;
                height: 0.3rem;
                fill: #fff;
                margin-right: 0.1rem;
                stroke: #fff;
                stroke-width: 50;
            }
        }
    }
    // .musicList{

    // }
}
</style>