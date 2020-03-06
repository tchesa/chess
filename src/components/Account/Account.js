import React, { Component } from 'react'
import { connect } from 'react-redux'

import classes from './Account.module.css'
import { random } from '../../resources/nicknames'
import store, { actions } from '../../store/store'

class Account extends Component {
  constructor(props) {
    super(props);

    const storedName = localStorage.getItem('name')
    const name = storedName || random()
    if (!storedName) localStorage.setItem('name', name)
    store.dispatch({
      type: actions.UPDATE_USER,
      payload: {
        user: { name }
      }
    })

    this.state = {
      loaded: false,
      user: {
        name: ''
      },
      loading: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.disableForm() || this.state.user.name === this.props.user.name) return

    // this.setState({loading: true})
    localStorage.setItem('name', this.state.user.name)
    store.dispatch({
      type: actions.UPDATE_USER,
      payload: {
        user: { name: this.state.user.name }
      }
    })
    // this.setState({ loading: false})
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
    return this.state.loading || !this.state.user.name
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
          <input
            type="text"
            value={this.state.user.name}
            onChange={this.changeNameHandler}
          /><button
            type="submit"
            disabled={this.disableForm()}
          >Change</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Account)
