import React from 'react'

import Board from '../../components/Board/Board'
import classes from './Main.css'

const main = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.Info}>
        Info
      </div>
      <div className={classes.Board}>
        <Board/>
      </div>
      <div className={classes.Games}>
        Games
      </div>
    </div>
  )
}

export default main
