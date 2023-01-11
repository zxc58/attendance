import axios from 'axios'
import instance from './instance'

const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

export function loginAPI(data) {
  return axios.post(`${backendURL}/auth/login`, data)
}

export function fetchUserDataByJWT() {
  return instance.get('auth/user')
}

export function personalDataAPI() {
  const userId = localStorage.getItem('userId')
  if (userId) {
    throw new Error()
  }
  return instance.get(`/employees/${userId}`)
}

export function todaysAttendanceAPI() {
  const userId = localStorage.getItem('userId')
  return instance.get(`/employees/${userId}/attendances`, {
    params: { date: 'today' },
  })
}

export function recentAttendancesAPI() {
  const userId = localStorage.getItem('userId')
  return instance.get(`/employees/${userId}/attendances`, {
    params: { date: 'recent' },
  })
}

export function updatePersonalDataAPI(data) {
  const userId = localStorage.getItem('userId')
  return instance.patch(`/employees/${userId}`, data)
}

export function punchInAPI(punchIn, location) {
  const userId = localStorage.getItem('userId')
  return instance.post(
    `employees/${userId}/attendances`,
    {
      punchIn,
    },
    { params: { location } }
  )
}

export function punchOutAPI(id, punchOut, location) {
  const userId = localStorage.getItem('userId')
  return instance.patch(
    `/employees/${userId}/attendances/${id}`,
    {
      punchOut,
    },
    { params: { location } }
  )
}

export function qrPunchAPI(data) {
  return instance.post('/attendances/qrcode', data)
}

export function getQrIdAPI(location) {
  return axios.get(`${backendURL}/attendances/qrcode`, {
    params: { location },
  })
}
