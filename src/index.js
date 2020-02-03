import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './assets/style/index.css'
import App from './components/App/App'
import store from './store'
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App}/>
        <Route path='/:hash' component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
