// 当前这个模块就是自定义模块
// console.log('加载了06这个自定义模块');
// 模块化作用域，避免了全局变量污染
const username = 'zs';

function sayHello() {
    console.log('大家好，我是' + username);
}