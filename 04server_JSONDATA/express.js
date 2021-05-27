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
// 添加get路由
app.get('/server', (req, res) => {
  // 设置请求头，允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('hello express');
})
// 返回json数据
app.get('/server_json', (req, res) => {
  // 设置请求头，允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  const data = {
    name: "yxp",
  }
  res.send(data);
})
// 添加post路由
app.post('/server', (req, res) => {
  // 设置请求头，允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('hello express Post');
})

// 监听服务端口
app.listen('3000', () => {
  console.log('3000端口已启动....');
})

// 总结： 执行该js文件，那么本地127.0.0.1:3000就可以访问到内容