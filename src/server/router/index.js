const Router = require('@koa/router');
const fs = require('fs');
const {resolve} = require('path')
const {renderToString} = require('@vue/server-renderer')
const serverBundle = require('../../../dist/server-bundle.js').default;
const template = fs.readFileSync(resolve(__dirname,'../../../dist/index.html'),'utf-8')

const router = new Router();

module.exports = app => {
    router.get(['/','/about'], async (ctx,next) =>{
        const{app:appComp,router:r,store} = serverBundle();
        await r.push(ctx.req.url);
        await r.isReady();
        let appContent = await renderToString(appComp);
        appContent = `<div id="app">${{appContent}}</div>`
        let html = template.replace('<div id="app"></div>',appContent)
        ctx.body = 'html'
    })
    app.use(router.routes()).use(router.allowedMethods());
}