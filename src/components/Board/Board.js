import React, { Component } from 'react'

import classes from './Board.css'
import Piece, { TYPES, COLORS } from '../Piece/Piece'

const DIMENSION = 8

class Board extends Component {

  state = {
    selectedPiece: null
  }

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

  getMovements = (i0, j0) => {
    let positions = new Array(DIMENSION)
    for (let i = 0; i < DIMENSION; i++) {
      positions[i] = new Array(DIMENSION)
      for (let j = 0; j < DIMENSION; j++) {
        positions[i][j] = false
      }
    }

    if (this.state.pieces[i0][j0].type === TYPES.BISHOP || this.state.pieces[i0][j0].type === TYPES.QUEEN) {
      for (let j = 0; j < DIMENSION; j++) {
        if (j === j0) continue
        const i1 = j - j0 + i0
        const i2 = i0 + j0 - j
        if (i1 >= 0 && i1 < DIMENSION) positions[i1][j] = true
        if (i2 >= 0 && i2 < DIMENSION) positions[i2][j] = true
      }
    }

    if (this.state.pieces[i0][j0].type === TYPES.ROOK || this.state.pieces[i0][j0].type === TYPES.QUEEN) {
      for (let i = 0; i < DIMENSION; i++) {
        if (i !== i0) positions[i][j0] = true
        if (i !== j0) positions[i0][i] = true
      }
    }

    if (this.state.pieces[i0][j0].type === TYPES.KNIGHT) {
      if (i0-1 >= 0 && j0-2 >= 0) positions[i0-1][j0-2] = true
      if (i0+1 < DIMENSION && j0-2 >= 0) positions[i0+1][j0-2] = true
      if (i0-1 >= 0 && j0+2 < DIMENSION) positions[i0-1][j0+2] = true
      if (i0+1 < DIMENSION && j0+2 < DIMENSION) positions[i0+1][j0+2] = true
      if (i0-2 >= 0 && j0-1 >= 0) positions[i0-2][j0-1] = true
      if (i0+2 < DIMENSION && j0-1 >= 0) positions[i0+2][j0-1] = true
      if (i0-2 >= 0 && j0+1 < DIMENSION) positions[i0-2][j0+1] = true
      if (i0+2 < DIMENSION && j0+1 < DIMENSION) positions[i0+2][j0+1] = true
    }

    if (this.state.pieces[i0][j0].type === TYPES.KING) {
      if (i0 - 1 >= 0) {
        positions[i0 - 1][j0] = true
        if (j0 + 1 < DIMENSION) positions[i0 - 1][j0 + 1] = true
        if (j0 - 1 >= 0) positions[i0 - 1][j0 - 1] = true
      }
      if (i0 + 1 < DIMENSION) {
        positions[i0 + 1][j0] = true
        if (j0 + 1 < DIMENSION) positions[i0 + 1][j0 + 1] = true
        if (j0 - 1 >= 0) positions[i0 + 1][j0 - 1] = true
      }
      if (j0 + 1 < DIMENSION) positions[i0][j0 + 1] = true
      if (j0 - 1 >= 0) positions[i0][j0 - 1] = true
    }

    if (this.state.pieces[i0][j0].type === TYPES.PAWN) {
      if (this.state.pieces[i0][j0].color === COLORS.WHITE && i0 > 0) positions[i0 - 1][j0] = true
      else if (this.state.pieces[i0][j0].color === COLORS.BLACK && i0 < DIMENSION - 1) positions[i0 + 1][j0] = true
    }

    return positions
  }

  handlePieceClick = (i0, j0) => {
    this.setState({
      selectedPiece: {
        x: i0,
        y: j0
      }
    })
  }

  render () {
    const movements = this.state.selectedPiece? this.getMovements(this.state.selectedPiece.x, this.state.selectedPiece.y): null
    return (<table className={classes.Board}>
      <tbody>
        {[...Array(DIMENSION).keys()].map(i => <tr key={i}>
          {[...Array(DIMENSION).keys()].map(j => <td key={j} className={movements && movements[i][j]? classes.active: null}>
            {i === DIMENSION - 1? <span className={[classes.Info, classes.Column].join(' ')}>{String.fromCharCode(65 + j)}</span>: null}
            {j === 0? <span className={[classes.Info, classes.Row].join(' ')}>{i + 1}</span>: null}
            {this.state.pieces[i][j]? <Piece type={this.state.pieces[i][j].type} color={this.state.pieces[i][j].color} onClick={() => this.handlePieceClick(i,j)}/>: null}
          </td>)}
        </tr>)}
      </tbody>
    </table>)
  }
}

export default Board
