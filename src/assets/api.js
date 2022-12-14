import axios from 'axios'
const createInstance = () =>
  axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken'),
    },
    timeout: 2000,
  })

export default createInstance
