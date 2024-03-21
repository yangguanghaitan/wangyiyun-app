import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVantCom from './plugins'

const app=createApp(App)
//加载 vant的组件
getVantCom(app);
app.use(store);
app.use(router).mount('#app');


