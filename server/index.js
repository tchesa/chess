const express = require('express')
const http = require('http')
const socket = require('socket.io')
const PORT = 3001

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/../build/build.html');
// })

const app = express()
const server = http.createServer(app)
const io = socket(server, {})

server.listen(PORT, function () {
  console.log(`listening on *:${PORT}`)
})
