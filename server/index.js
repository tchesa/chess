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

const initializeGame = playerId => {
  return {
    keys: {
      player1: uniqid.time(),
      player2: uniqid.time(),
      public: uniqid.time()
    },
    players: {
      player1: playerId,
      player2: undefined
    },
    status: 'waiting',
    playerTurn: 1
  }
}

io.on('connection', socket => {
  console.log('player connected')

  socket.on('creategame', callback => {
    const gameId = uniqid.time()
    data.games[gameId] = initializeGame(socket.id)
    callback(data.games[gameId])
  })

  socket.on('findgame', (key, callback) => {
    const gameId = Object.keys(data.games).find(id => {
      const isPlayer1 = key === data.games[id].keys.player1
      const isPlayer2 = key === data.games[id].keys.player2
      const isSpec = key === data.games[id].keys.public
      return isPlayer1 || isPlayer2 || isSpec
    })

    callback(gameId ? data.games[gameId] : null)
  })
})

server.listen(PORT, function () {
  console.log(`listening on *:${PORT}`)
})
