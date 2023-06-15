import { createApp } from 'vue';
import App from './App';
import './style/index.less';
import router from './router';
const app = createApp(App);
//挂载到public中的div的app中
app.use(router);
app.mount(document.getElementById('app'));
