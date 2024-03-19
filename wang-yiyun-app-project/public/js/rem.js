function remSize(){
   var devicewidth=window.innerWidth||document.documentElement.clientWidth
   if(devicewidth>=750)devicewidth=750;
   if(devicewidth<=320)devicewidth=320;
   //设置root根节点的字体大小rem 750->1rem=100px
   document.documentElement.style.fontSize=(devicewidth/7.5)+'px'
   document.querySelector('body').style.fontSize=0.3+'rem'

}
remSize()
window.onresize=function(){
    remSize()
}