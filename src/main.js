import {createApp} from 'vue';
import App from './App';
import './style/index.less';
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import router from './router';
const app = createApp(App);
//挂载到public中的div的app中
app.use(router);
// app.use(ElementUI);
app.mount(document.getElementById('app'));
