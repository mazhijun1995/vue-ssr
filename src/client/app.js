import {
    createSSRApp,
    createApp
} from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
export default function(){
    // 判断是服务端运行还是客户端运行
    const isSSR = typeof window === "undefined";
    const app = (isSSR ? createSSRApp : createApp)(App)
    const router = createRouter();
    const store = createStore();
    app.use(router).use(store);
    return {
        app,
        router,
        store
    }
}