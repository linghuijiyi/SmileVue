const Router = require('koa-router');
const mongoose = require('mongoose');

let router = new Router();

router.get('/', async(ctx) => {
    ctx.body = '这是首页';
});

router.post('/register', async(ctx) => {
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);
    await newUser.save().then(() => {
        ctx.body = {
            code: 0,
            msg: '注册成功'
        }
    }).catch(error => {
        ctx.body = {
            code: 1,
            msg: '用户名重复'
        }
    })
});

module.exports = router;