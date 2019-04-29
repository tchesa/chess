import React from 'react'

import classes from './Board.css'

const DIMENSION = 8

const Board = () => {
  return (<table className={classes.Board}>
    {[...Array(DIMENSION).keys()].map(i => <tr key={i}>
      {[...Array(DIMENSION).keys()].map(j => <td key={j}>
        {i === DIMENSION - 1? <span className={[classes.Info, classes.Column].join(' ')}>{String.fromCharCode(65 + j)}</span>: null}
        {j === 0? <span className={[classes.Info, classes.Row].join(' ')}>{i + 1}</span>: null}
      </td> )}
    </tr>)}
  </table>)
}

export default Board
