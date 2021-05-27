// 引包
const express = require('express');

// 创建
const app = new express();

// 创建路由
/* 
  res 第一个参数代表请求报文对象
  req 第二个参数代表响应报文对象
  send() 方法设置响应报文 的响应体内容
  setHeader() 方法设置响应头信息  'Access-Control-Allow-Origin', '*' 允许跨域
*/
app.get('/server', (req, res) => {
  // 设置请求头，允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('hello express');
})
// all可以接受任意请求形式
app.all('/server', (req, res) => {
  // 设置响应头，允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 设置响应头，允许请求头发送自定义字段  Provisional headers are shown解决Provisional headers are shown前端浏览器请求问题
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.send('hello express');
})

// 监听服务端口
app.listen('3000', () => {
  console.log('3000端口已启动....');
})

// 总结： 执行该js文件，那么本地127.0.0.1:3000就可以访问到内容