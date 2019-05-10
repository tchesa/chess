import { createStore } from 'redux'

const initialState = {
  user: null
}

export const actions = {
  UPDATE_USER: 'UPDATE_USER'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_USER: return { ...state, user: action.payload.user }
    default: return state
  }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
