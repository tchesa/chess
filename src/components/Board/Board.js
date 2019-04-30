import React, { Component } from 'react'

import classes from './Board.css'
import Piece, { TYPES, COLORS } from '../Piece/Piece'

const DIMENSION = 8

class Board extends Component {

  state = {}

  constructor (props) {
    super(props)
    let pieces = new Array(DIMENSION)
    for (let i = 0; i < DIMENSION; i++) {
      pieces[i] = new Array(DIMENSION)
      for (let j = 0; j < DIMENSION; j++) {
        if (i >= 2 && i <= 5) pieces[i][j] = null
        else {
          let piece = {
            color: (i < 2)? COLORS.BLACK: COLORS.WHITE,
            type: TYPES.PAWN
          }
          if (i === 0 || i === 7) {
            switch (j) {
              case 0: piece.type = TYPES.ROOK; break
              case 1: piece.type = TYPES.KNIGHT; break
              case 2: piece.type = TYPES.BISHOP; break
              case 3: piece.type = TYPES.QUEEN; break
              case 4: piece.type = TYPES.KING; break
              case 5: piece.type = TYPES.BISHOP; break
              case 6: piece.type = TYPES.KNIGHT; break
              case 7: piece.type = TYPES.ROOK; break
              default: break
            }
          }
          pieces[i][j] = piece
        }
      }
    }
    this.state = { ...this.state, pieces }
  }

  render () {
    return (<table className={classes.Board}>
      <tbody>
        {[...Array(DIMENSION).keys()].map(i => <tr key={i}>
          {[...Array(DIMENSION).keys()].map(j => <td key={j}>
            {i === DIMENSION - 1? <span className={[classes.Info, classes.Column].join(' ')}>{String.fromCharCode(65 + j)}</span>: null}
            {j === 0? <span className={[classes.Info, classes.Row].join(' ')}>{i + 1}</span>: null}
            {this.state.pieces[i][j]? <Piece type={this.state.pieces[i][j].type} color={this.state.pieces[i][j].color}/>: null}
          </td>)}
        </tr>)}
      </tbody>
    </table>)
  }
}

export default Board
