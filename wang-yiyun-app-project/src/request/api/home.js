import service from "..";

//获取首页上面的轮播图
export  function getBanner() {
    return service({
        method: 'get',
        url: '/banner?type=2',
    })
}
//获取首页中发现好歌单的轮播图
export function getMusicList(){
    return service({
        method: 'get',
        url: '/personalized?limit=10'
    })
}