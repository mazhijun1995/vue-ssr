import createApp from './app';

// 避免状态单例
export default () => {
    const {app,router,store} = createApp();
    return {
        app,
        router,
        store
    }
}