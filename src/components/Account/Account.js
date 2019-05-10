import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './Account.css'
import axios from '../../axios'
import { random } from '../../nicknames'
import store, { actions } from '../../store'

const register = () => {
  localStorage.removeItem('token')
  const user = {
    name: random()
  }

  axios.post('users.json', user).then(response => {
    console.log('registered:', response.data.name)
    token = response.data.name
    localStorage.setItem('token', token)
    store.dispatch({
      type: actions.UPDATE_USER,
      payload: {
        user: { ...user, id: token }
      }
    })
  }, error => {
    console.log(error)
  })
}

let token = null
if (localStorage.getItem('token')) {
  token = localStorage.getItem('token')
  axios.get(`users/${token}.json`).then(response => {
    if (!response.data) register()
    else console.log('name:', response.data.name)
    store.dispatch({
      type: actions.UPDATE_USER,
      payload: {
       user: { ...response.data, id: token }
      }
    })
  }, error => {
    console.log(error)
  })
} else {
  register()
}

class Account extends Component {

  state = {
    loaded: false,
    user: {
      name: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.disableForm()) return
  }

  changeNameHandler = event => {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value
      }
    })
  }

  disableForm = () => {
    return !this.state.user.name || (this.state.user.name === this.props.user.name)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user && !this.state.loaded) {
      this.setState({ user: this.props.user, loaded: true })
    }
  }

  render() {
    return (
      <div className={classes.Account}>
        <h1>chess.io</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Your name</label>
          <input type='text' value={this.state.user.name} onChange={this.changeNameHandler}/><button type='submit' disabled={this.disableForm()}>Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Account)
