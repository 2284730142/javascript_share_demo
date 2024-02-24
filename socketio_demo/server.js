// 准备 express 应用作为服务器，并在 html 中进行测试
const express = require('express');
const app = express();

// 构建socket.io服务
const { createServer } = require('http');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server, {
  path: '/myPath',
  connectionStateRecovery: {}
});

// 构建静态容器引擎
app.use(express.static('public'));
app.use(express.static('node_modules/socket.io/client-dist'));

// 构建路由
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// 发起socket.io连接
io.on('connection', (socket) => {
  console.log('有新的连接');
  socket.on('disconnect', () => {
    console.log('连接已断开');
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // 广播消息
    io.emit('chat message', msg);
  });
});

// 构建监听端口
const port = 3000;
// 用server启动服务
server.listen(port, () => {
  console.log(`服务已启动，端口：${port}`);
});