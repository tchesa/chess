import io from 'socket.io-client'

class Socket {
  socket;

  constructor() {
    this.socket = io('http://localhost:3001')
  }

  createGame = callback => {
    this.socket.emit('creategame', game => {
      callback(game)
    })
  }

  findGame = (key, callback) => {
    this.socket.emit('findgame', key, game => {
      callback(game)
    })
  }
}

export default new Socket()
