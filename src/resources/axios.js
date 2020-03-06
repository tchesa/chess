import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tchesa-chess.firebaseio.com/'
})

export default instance
