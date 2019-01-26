const Koa = require('koa');
const app = new Koa();
const { connect, initSchemas } = require('./database/init.js');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const cors = require('koa2-cors');

app.use(bodyParser());
app.use(cors());

let user = require('./appApi/user.js');
let router = new Router();

router.use('/user', user.routes());
app.use(router.routes());
app.use(router.allowedMethods());

//立即执行函数
;(async () =>{
    await connect();
    initSchemas();
})();
app.listen(3000, () => {
    console.log('[Server starting at port 3000]');
});