import React, { Component } from 'react'

import socket from '../../socket'

class Control extends Component {

  createRoom = () => {
    socket.createRoom()
  }

  render() {
    return <ul>
      <li>
        <button onClick={this.createRoom}>create room</button>
      </li>
    </ul>
  }
}

export default Control
