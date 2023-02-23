// 导入 querystring 模块
const qs = require('querystring');
// 创建自定义中间件
function bodyParser(req, res, next) {
    // 1.用来监听客户端向服务器发送的数据
    // 使用 str 进行不断的监听数据
    let str = '';
    req.on('data', (chunk) => {
            str += chunk;
        })
        // 2.监听结束传输数据
    req.on('end', () => {
        const body = qs.parse(str);
        console.log(body);
        req.body = body;
        next();
    })
}
// 向外暴露
module.exports = bodyParser;