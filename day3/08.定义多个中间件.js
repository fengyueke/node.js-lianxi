// 导入 express 模块
const express = require('express');
// 创建 web 服务器
const app = express();
// 定义第一个中间件
app.use((req, res, next) => {
        console.log('调用了第一个中间件');
        next()
    })
    // 定义第二个中间件
app.use((req, res, next) => {
        console.log("调用了第二个中间件");
        next()
    })
    // 定义一个路由
app.get('/', (req, res) => {
        res.send('User Page')
    })
    // 启用服务器
app.listen(80, function() {
    console.log('http://127.0.0.1');
})