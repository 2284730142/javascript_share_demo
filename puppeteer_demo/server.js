const express = require('express');
const app = express();

// 设置静态文件目录
app.use(express.static('public'));

// 启动服务器
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});