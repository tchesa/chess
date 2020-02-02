const app = require('express')()
const http = require('http').createServer(app)
const server = require('socket.io')
const PORT = 3001

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/../build/build.html');
// })

const io = server(http, {})

http.listen(PORT, function () {
  console.log(`listening on *:${PORT}`)
})

