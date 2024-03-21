//统一管理vant组件
import { Button,Swipe, SwipeItem } from 'vant';

let plugins=[
    Button,Swipe, SwipeItem
];

export default function getVantCom(app){
    plugins.forEach((item)=>{
        return app.use(item)
    });
}