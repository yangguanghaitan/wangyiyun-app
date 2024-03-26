import service from '../../'

export function getMusicItemList(data){
    return service({
        method:'get',
        url:`/playlist/detail?id=${data}`
        // url:`/related/playlist?id=${data}`
    })
 
}
