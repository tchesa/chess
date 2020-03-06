import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Board from '../../components/Board/Board'
import Account from '../../components/Account/Account'
import classes from './Main.module.css'
import socket from '../../resources/socket'

class Main extends Component {

  state = {
    playing: false
  }

  componentDidMount() {
    const hash = this.props.match.params.hash
    this.getGameInfo(hash)
  }

  componentDidUpdate(prevProps) {
    const hash = this.props.match.params.hash
    if (hash !== prevProps.match.params.hash) this.getGameInfo(hash)
  }

  newGame = () => {
    socket.createGame(game => {
      console.log(game)
      this.props.history.push(`/${game.keys.player1}`)
    })
  }

  getGameInfo = hash => {
    if (hash) {
      socket.findGame(hash, game => {
        if (game) {
          if (hash !== game.keys.public) {
            this.setState({ playing: true })
          }
        } else {
          console.log('game not found')
          this.props.history.push('/')
        }
      })
    } else {
      this.setState({ playing: false })
    }
  }

  render() {
    return (
      <div className={classes.Main}>
        <div className={classes.Info}>
          <Account/>
        </div>
        <div className={classes.Board}>
          <Board/>
          {!this.state.playing && <div className={classes.NewGame}>
            <div className={classes.NewGameInner}>
              <button onClick={this.newGame}>New game</button>
            </div>
          </div>}
        </div>
        <div className={classes.Games}>
          Games
        </div>
      </div>
    )
  }
}

export default withRouter(Main)
