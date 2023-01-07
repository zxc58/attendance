import axios from 'axios'
import { flash } from '../helpers/flashHelper'
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
    const responseData = await api.post('/auth/login', data)
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
    const userId = localStorage.getItem('userId')
    const responseData = await api.get(`/employees/${userId}`)
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
    const userId = localStorage.getItem('userId')
    const responseData = await api.get(`/employees/${userId}/attendances`, {
      params: { date: 'today' },
    })
    return responseData.attendances
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
    const userId = localStorage.getItem('userId')
    const responseData = await api.get(`/employees/${userId}/attendances`, {
      params: { date: 'recent' },
    })
    return responseData.attendances
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const updatePersonalData = async ({ data }) => {
  try {
    const userId = localStorage.getItem('userId')
    const responseData = await api.patch(`/employees/${userId}`, data)
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
    const userId = localStorage.getItem('userId')
    const responseData = await api.post(
      `employees/${userId}/attendances`,
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
    const userId = localStorage.getItem('userId')
    const responseData = await api.patch(
      `/employees/${userId}/attendances/${id}`,
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
    const responseData = await api.post('/attendances/qrcode', data)
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
    const responseData = await api.get('/attendances/qrcode', {
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

export const getUnworking = async () => {
  try {
    const responseData = await api.get('/admin/unworking')
    return responseData.employees
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const getLockedAccount = async () => {
  try {
    const responseData = await api.get('/admin/locked')
    return responseData.employees
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const unlockedAccount = async (id) => {
  try {
    const responseData = await api.patch(`/admin/unlock`, {
      id,
    })
    return responseData.employee
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}

export const getAbsenteeism = async () => {
  try {
    const responseData = await api.get(`/admin/absenteeism`)
    return responseData.attendances
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}
export const patchAttendance = async (attendanceId) => {
  try {
    const responseData = await api.patch(`/admin/attendances/${attendanceId}`)
    return responseData
  } catch ({ status, message }) {
    switch (message) {
      default:
        return Promise.reject({ status, message })
    }
  }
}
