import axios from 'axios'
import instance from './instance'
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

export function login(data) {
  return axios.post(`${backendURL}/auth/login`, data, {
    withCredentials: true,
  })
}
export function logout() {
  return instance.get('/auth/logout')
}
export function fetchUserDataByJWT() {
  return instance.get('auth/user')
}

export function personalData(userId) {
  return instance.get(`/employees/${userId}`)
}

export function todaysAttendance(userId) {
  return instance.get(`/employees/${userId}/attendances`, {
    params: { date: 'today' },
  })
}

export function recentAttendances(userId) {
  return instance.get(`/employees/${userId}/attendances`, {
    params: { date: 'recent' },
  })
}
/**
 *
 * @param {{password:string,phone:string,email:string}} data
 * @returns
 */
export function updatePersonalData(userId, data) {
  return instance.patch(`/employees/${userId}`, data)
}
/**
 *
 * @param {Date} punchIn
 * @param {{latitude:number,longitude:number,accuracy:number}} location
 * @returns
 */
export function punchIn(userId, punchIn, location) {
  return instance.post(
    `employees/${userId}/attendances`,
    {
      punchIn,
    },
    { params: { location } }
  )
}
/**
 * @param { number | string } attendanceId
 * @param {Date} punchOut
 * @param {{latitude:number,longitude:number,accuracy:number}} location
 * @returns
 */
export function punchOut(userId, attendanceId, punchOut, location) {
  return instance.patch(
    `/employees/${userId}/attendances/${attendanceId}`,
    {
      punchOut,
    },
    { params: { location } }
  )
}
/**
 *
 * @param {{punch:Date,punchQrId:string}} data
 * @returns
 */
export function qrPunch(data) {
  return instance.post('/attendances/qrcode', data)
}

export function getQrId(location) {
  return axios.get(`${backendURL}/attendances/qrcode`, {
    params: { location },
  })
}
