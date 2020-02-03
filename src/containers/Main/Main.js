import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Board from '../../components/Board/Board'
import Account from '../../components/Account/Account'
import classes from './Main.module.css'
import socket from '../../socket'

class Main extends Component {

  

  newGame = () => {
    socket.createGame(room => {
      // console.log(room)
      this.props.history.push(`/${room.player1}`)
    })
  }

  render() {
    return (
      <div className={classes.Main}>
        <div className={classes.Info}>
          <Account/>
        </div>
        <div className={classes.Board}>
          <Board/>
          <div className={classes.NewGame}>
            <div className={classes.NewGameInner}>
              <button onClick={this.newGame}>New game</button>
            </div>
          </div>
        </div>
        <div className={classes.Games}>
          Games
        </div>
      </div>
    )
  }
}

export default withRouter(Main)
