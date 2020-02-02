import io from 'socket.io-client'

class Socket {
  socket;

  constructor() {
    this.socket = io('http://localhost:3001')

    this.socket.on('create', game => {
      console.log(game)
    })
  }

  createRoom = () => {
    this.socket.emit('create', room => {
      console.log('room created', room)
    })
  }
}

export default new Socket()
