// 引包
const express = require('express');

// 创建实例
const app = new express();

// 创建接口
/* 
注意这里是返回的一个文件路径
使用 sendFile() 参数为一个文件路径字符串
*/
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
})
// 定义get请求，获取测试数据
app.get('/data', (req, res) => {
  res.send('用户数据');
})
// 监听端口
app.listen(3000, () => {
  console.log('3000端口启动....');
})