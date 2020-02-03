const express = require('express')
const http = require('http')
const socket = require('socket.io')
const uniqid = require('uniqid')

const app = express()
const server = http.createServer(app)
const io = socket(server, {})

const PORT = 3001
const data = {
  games: {}
}

io.on('connection', socket => {
  console.log('player connected')

  socket.on('create', callback => {
    const gameId = uniqid.time()
    data.games[gameId] = {
      player1: uniqid.time(),
      player2: uniqid.time(),
      public: uniqid.time()
    }
    callback(data.games[gameId])
  })
})

server.listen(PORT, function () {
  console.log(`listening on *:${PORT}`)
})
