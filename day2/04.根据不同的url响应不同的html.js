// 导入 http 模块
const http = require('http')
    // 创建web服务器
const server = http.createServer()
    // 给server绑定request事件，用来监听客户端的请求
server.on('request', (req, res) => {
        const url = req.url;
        // 设置默认内容
        let content = '<h1>404 Not Found</h1>'
        if (url === '/' || url === '/index.html') {
            content = '<h1>首页</h1>'
        } else if (url === '/about.html') {
            content = '<h1>关于页面</h1>'
        }
        // 响应中文
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(content)
    })
    // 启动服务器
server.listen('80', function() {
    console.log('server running http://127.0.0.1');
})