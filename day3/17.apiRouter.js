// 导入 express 模块
const express = require('express');
const apiRouter = express.Router();
// 导入
// 挂载对应路由
// 挂载get
apiRouter.get('/get', (req, res) => {
        const query = req.query;
        res.send({
            status: 0, // 0 代表请求成功 ，1代表失败
            message: 'GET请求成功', //状态描述
            data: query //响应给客户端的数据
        })
    })
    // 挂载post
apiRouter.post('/post', (req, res) => {
        const body = req.body;
        res.send({
            status: 0, // 0 代表成功，1代表失败
            message: 'POST请求成功', //状态描述
            data: body //响应客户端的数据
        })
    })
    // 定义delete 接口
apiRouter.delete('/delete', (req, res) => {
        res.send({
            status: 0,
            message: 'DELETE请求成功',
        })
    })
    // 向外暴露
module.exports = apiRouter;