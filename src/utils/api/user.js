import instance from './instance'

export function login(data) {
  return instance.post(`/auth/login`, data)
}
export function logout() {
  return instance.get('/auth/logout')
}
export function verifyJWT() {
  return instance.get('/auth/verify')
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
  return instance.get(`/attendances/qrcode`, {
    params: { location },
  })
}
