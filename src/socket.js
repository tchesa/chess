import io from 'socket.io-client'

class Socket {
  socket;

  constructor() {
    this.socket = io('http://localhost:3001')

    this.socket.on('create', game => {
      console.log(game)
    })
  }

  createGame = () => {
    this.socket.emit('create', room => {
      console.log('game created', room)
    })
  }
}

export default new Socket()
