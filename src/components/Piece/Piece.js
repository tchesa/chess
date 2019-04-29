import React from 'react'

import classes from './Piece.css'
import image from '../../assets/images/peao.png'

const Piece = () => {
  return (<div className={classes.Piece}>
    <img src={image} alt=''/>
  </div>)
}

export default Piece
