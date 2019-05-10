import React from 'react'

import classes from './Account.css'
import axios from '../../axios'

const account = () => (
  <div className={classes.Account}>
    <h1>chess.io</h1>
    <form>
      <label>Your name</label>
      <input type='text'/><button type='submit'>Save</button>
    </form>
  </div>
)

export default account
