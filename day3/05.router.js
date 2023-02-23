// 导入 express 模块
const express = require('express');
// 创建 路由 模块
const router = express.Router();
// 将路由 挂载在 router上
router.get('/user', (req, res) => {
    res.send("GET user");
})
router.post('/user', (req, res) => {
        res.send("POST user");
    })
    // 将router 暴露出去
module.exports = router