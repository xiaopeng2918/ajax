// 引包
const express = require('express');

// 创建实例
const app = new express();

// 定义get请求，获取测试数据
app.get('/ajax_jsonp', (req, res) => {
  const data = {
    exist: 1,
    msg: "用户名已经存在",
  };
  // 这里需要把data转为字符串再传入函数形参
  /* 
  这里返回的是  函数执行  在服务端已经定义的一个函数
  */
  res.send(`handle(${JSON.stringify(data)})`);
})
// 监听端口
app.listen(3000, () => {
  console.log('3000端口启动....');
})