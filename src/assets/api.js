import axios from 'axios'
const baseURL = import.meta.env.VUE_APP_BACKEND_URL ?? 'http://localhost:3000'
const createInstance = () =>
  axios.create({
    baseURL,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    timeout: 2000,
  })

export default createInstance
