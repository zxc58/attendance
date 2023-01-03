import axios from 'axios'
import { flash } from '../helpers/flashHelper'
import dayjsTaipei from '../helpers/timeHelper'
import { storeJWT } from '../helpers/jwtHelper'
import { bringJWT, responseHandler, axiosErrorHandler } from './interceptors'
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

const api = axios.create({
  baseURL: backendURL,
  timeout: 3000,
})
api.interceptors.request.use(bringJWT, (err) => {
  return Promise.reject(err)
})
api.interceptors.response.use(responseHandler, axiosErrorHandler)
export default api

export const login = async (data) => {
  try {
    const responseData = await api.post('/api/logIn', data)
    return responseData
  } catch ({ status, message }) {
    switch (message) {
      case 'Wrong times over 5':
        flash({ variant: 'danger', message: '帳號已被鎖定' })
        return false
      case 'Password wrong':
        flash({ variant: 'danger', message: '帳號或密碼錯誤' })
        return false
      case 'Account do not exist':
        flash({ variant: 'danger', message: '帳號或密碼錯誤' })
        return false
      default:
        return Promise.reject({ status, message })
    }
    // return Promise.reject(axiosError.message)
  }
}

export const fetchPersonalData = async () => {
  try {
    const responseData = await api.get('/api/employees')
    return responseData.employee
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const fetchTodaysAttendance = async () => {
  try {
    const responseData = await api.get('/api/attendances/today')
    return responseData.attendance
  } catch ({ status, message }) {
    switch (message) {
      case 'You have not punched in yet':
        return null
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const fetchRecentAttendances = async () => {
  try {
    const responseData = await api.get('/api/attendances/recent')
    return responseData.attendances
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const putPersonalData = async ({ data, id }) => {
  try {
    const responseData = await api.put(`/api/employees/${id}`, data)
    return responseData.employee
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const punchIn = async ({ punchIn, location }) => {
  try {
    const responseData = await api.post(
      '/api/attendances',
      {
        punchIn,
      },
      { params: { location } }
    )
    return responseData.attendance
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const punchOut = async ({ id, punchOut, location }) => {
  try {
    const responseData = await api.put(
      `/api/attendances/${id}`,
      {
        punchOut,
      },
      { params: { location } }
    )
    return responseData.attendance
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const qrPunch = async (data) => {
  try {
    const responseData = await api.post('/api/qrcode/punch', data)
    return responseData.message
  } catch ({ status, message }) {
    switch (message) {
      case 'Id is expired':
        return false
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const getQrId = async (location) => {
  try {
    const responseData = await api.get('/api/qrcode', {
      params: { location },
    })
    return responseData.punchQrId
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}
