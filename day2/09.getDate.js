// 导入自定义模块
const time = require('./08.dataFormat');
const dd = new Date();
const newDt = time.dateFormat(dd);
console.log(newDt);