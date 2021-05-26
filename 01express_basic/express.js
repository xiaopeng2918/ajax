// 引包
const express = require('express');

// 创建
const app = new express();

// 创建路由
/* 
  res 第一个参数代表请求报文对象
  req 第二个参数代表响应报文对象
  send() 方法设置响应报文 的响应体内容
*/
app.get('/', (req, res) => {
  res.send('hello express');
})

// 监听服务端口
app.listen('3000', () => {
  console.log('3000端口已启动....');
})

// 总结： 执行该js文件，那么本地127.0.0.1:3000就可以访问到内容