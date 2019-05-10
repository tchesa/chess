import axios from 'axios'

import { random } from './nicknames'

const instance = axios.create({
  baseURL: 'https://tchesa-chess.firebaseio.com/'
})

const register = () => {
  localStorage.removeItem('token')
  instance.post('users.json', {name: random()}).then(response => {
    console.log('registered:', response.data.name)
    token = response.data.name
    localStorage.setItem('token', token)
  }, error => {
    console.log(error)
  })
}

let token = null
if (localStorage.getItem('token')) {
  token = localStorage.getItem('token')
  instance.get(`users/${token}.json`).then(response => {
    if (!response.data) register()
    else console.log('name:', response.data.name)
  }, error => {
    console.log(error)
  })
} else {
  register()
}



export default instance
