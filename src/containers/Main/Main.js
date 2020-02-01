import React from 'react'

import Board from '../../components/Board/Board'
import Account from '../../components/Account/Account'
import classes from './Main.module.css'

const main = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.Info}>
        <Account/>
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
