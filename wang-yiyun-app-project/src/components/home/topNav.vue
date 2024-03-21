<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofangliebiao"></use>
            </svg>
        </div>
        <div class="topContent">
            <div>我的</div>
            <div class="active">发现</div>
            <div>云村</div>
            <div>视频</div>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-search"></use>
            </svg>
        </div>
    </div>
</template>
<style lang="less" scoped>
.topNav{
    width: 100%;
    height: 1rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    //内容垂直居中
    align-items: center;
    .topContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        //18px=0.36rem->1rem=50px 插件设置的就是50px
        font-size: .36rem;
        .active{
            font-weight: 700;
        }

    }
}
</style>