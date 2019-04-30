import React from 'react'

import classes from './Piece.css'
import pawnA from '../../assets/images/Chess_pdt60.png'
import pawnB from '../../assets/images/Chess_plt60.png'
import rookA from '../../assets/images/Chess_rdt60.png'
import rookB from '../../assets/images/Chess_rlt60.png'
import knightA from '../../assets/images/Chess_ndt60.png'
import knightB from '../../assets/images/Chess_nlt60.png'
import bishopA from '../../assets/images/Chess_bdt60.png'
import bishopB from '../../assets/images/Chess_blt60.png'
import queenA from '../../assets/images/Chess_qdt60.png'
import queenB from '../../assets/images/Chess_qlt60.png'
import kingA from '../../assets/images/Chess_kdt60.png'
import kingB from '../../assets/images/Chess_klt60.png'

const TYPES = {
  PAWN: 'pawn',
  ROOK: 'rook',
  KNIGHT: 'knight',
  BISHOP: 'bishop',
  QUEEN: 'queen',
  KING: 'king'
}

const COLORS = {
  BLACK: 'black',
  WHITE: 'white'
}

const images = {
  [TYPES.PAWN]: {
    [COLORS.BLACK]: pawnA,
    [COLORS.WHITE]: pawnB
  },
  [TYPES.ROOK]: {
    [COLORS.BLACK]: rookA,
    [COLORS.WHITE]: rookB
  },
  [TYPES.KNIGHT]: {
    [COLORS.BLACK]: knightA,
    [COLORS.WHITE]: knightB
  },
  [TYPES.BISHOP]: {
    [COLORS.BLACK]: bishopA,
    [COLORS.WHITE]: bishopB
  },
  [TYPES.QUEEN]: {
    [COLORS.BLACK]: queenA,
    [COLORS.WHITE]: queenB
  },
  [TYPES.KING]: {
    [COLORS.BLACK]: kingA,
    [COLORS.WHITE]: kingB
  }
}

const Piece = props => {
  return (<div className={classes.Piece}>
    <img src={images[props.type][props.color]} alt=''/>
  </div>)
}

export default Piece
export { TYPES, COLORS }
