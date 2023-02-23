// 导包 express
const express = require('express');
// 导入路由
const router = require('./05.router');
// 创建web服务器
const app = express();
// 挂载路由
// app.use 是用来注册全局中间件
app.use(router);
// 启用服务器
app.listen(80, function() {
    console.log("express server running http://127.0.0.1");
})