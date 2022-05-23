const Koa = require('koa');
const server = require('koa-static');
const router = require('./router');
const {resolve} = require('path');
const app = new Koa();

router(app);
app.use(server(resolve(__dirname,'../../dist')));

app.listen(8090, () => {
    console.log('server is running http://localhost:8090')
})