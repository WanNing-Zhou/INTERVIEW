const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    // 处理连接请求
    console.log('Client connected');

    // 处理消息
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // 广播消息给所有客户端
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // 处理断开连接
    socket.on('close', () => {
        console.log('Client disconnected');
    });


});


