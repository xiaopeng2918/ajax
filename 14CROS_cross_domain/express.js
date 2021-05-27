// 引包
const express = require('express');

// 创建实例
const app = new express();

// 定义所有请求,接收所有类型请求  这里接收非POST，GET的跨域请求 。需要加上响应头方法
app.all('/cros', (req, res) => {
  // 这里需要把data转为字符串再传入函数形参
  /* 
  这里返回的是  函数执行  在服务端已经定义的一个函数
  */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.send('hello cros');
})
// 监听端口
app.listen(3000, () => {
  console.log('3000端口启动....');
})