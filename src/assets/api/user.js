import axios from 'axios'
import instance from './instance'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { userId } = storeToRefs(userStore)
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

export function loginAPI(data) {
  return axios.post(`${backendURL}/auth/login`, data)
}

export function fetchUserDataByJWT() {
  return instance.get('auth/user')
}

export function personalDataAPI() {
  return instance.get(`/employees/${userId.value}`)
}

export function todaysAttendanceAPI() {
  return instance.get(`/employees/${userId.value}/attendances`, {
    params: { date: 'today' },
  })
}
/**
 *
 * @returns
 */
export function recentAttendancesAPI() {
  return instance.get(`/employees/${userId.value}/attendances`, {
    params: { date: 'recent' },
  })
}
/**
 *
 * @param {{password:string,phone:string,email:string}} data
 * @returns
 */
export function updatePersonalDataAPI(data) {
  return instance.patch(`/employees/${userId.value}`, data)
}
/**
 *
 * @param {Date} punchIn
 * @param {{latitude:number,longitude:number,accuracy:number}} location
 * @returns
 */
export function punchInAPI(punchIn, location) {
  return instance.post(
    `employees/${userId.value}/attendances`,
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
export function punchOutAPI(attendanceId, punchOut, location) {
  return instance.patch(
    `/employees/${userId.value}/attendances/${attendanceId}`,
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
export function qrPunchAPI(data) {
  return instance.post('/attendances/qrcode', data)
}

export function getQrIdAPI(location) {
  return axios.get(`${backendURL}/attendances/qrcode`, {
    params: { location },
  })
}
