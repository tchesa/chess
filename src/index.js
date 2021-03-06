import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './assets/style/index.css'
import App from './components/App/App'
import store from './store/store'
import './resources/socket'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/:hash' component={App}/>
        <Route path='/' component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
