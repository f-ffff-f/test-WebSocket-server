const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function connection(ws) {
  console.log('클라이언트가 연결되었습니다!')

  ws.on('message', function incoming(message) {
    console.log('받은 메시지: %s', message)
  })

  ws.send('서버로부터의 인사말: 연결되었습니다!')
})

console.log('웹소켓 서버가 포트 8080에서 실행 중...')
