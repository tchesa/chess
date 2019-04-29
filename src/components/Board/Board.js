import React, { Component } from 'react'

import classes from './Board.css'
import Piece from '../Piece/Piece'

const DIMENSION = 8

class Board extends Component {

  state = {}

  constructor (props) {
    super(props)
    let pieces = new Array(DIMENSION)
    for (let i = 0; i < DIMENSION; i++) {
      pieces[i] = new Array(DIMENSION)
      for (let j = 0; j < DIMENSION; j++) {
        pieces[i][j] = false
      }
    }
    pieces[0][0] = true
    this.state = { ...this.state, pieces }
  }

  render () {
    console.log(this.state)
    return (<table className={classes.Board}>
      <tbody>
        {[...Array(DIMENSION).keys()].map(i => <tr key={i}>
          {[...Array(DIMENSION).keys()].map(j => <td key={j}>
            {i === DIMENSION - 1? <span className={[classes.Info, classes.Column].join(' ')}>{String.fromCharCode(65 + j)}</span>: null}
            {j === 0? <span className={[classes.Info, classes.Row].join(' ')}>{i + 1}</span>: null}
            {this.state.pieces[i][j]? <Piece/>: null}
          </td> )}
        </tr>)}
      </tbody>
    </table>)
  }
}

export default Board
