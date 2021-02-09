import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinder-backend-mayank.herokuapp.com/'
})

export default instance;