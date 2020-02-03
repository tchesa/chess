import React from 'react'

import Board from '../../components/Board/Board'
import Account from '../../components/Account/Account'
import classes from './Main.module.css'
import socket from '../../socket'

const main = () => {

  const newGame = () => {
    socket.createGame()
  }

  return (
    <div className={classes.Main}>
      <div className={classes.Info}>
        <Account/>
      </div>
      <div className={classes.Board}>
        <Board/>
        <div className={classes.NewGame}>
          <div className={classes.NewGameInner}>
            <button onClick={newGame}>New game</button>
          </div>
        </div>
      </div>
      <div className={classes.Games}>
        Games
      </div>
    </div>
  )
}

export default main
