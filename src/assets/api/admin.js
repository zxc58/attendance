import instance from './instance'

export function getUnworkingAPI() {
  return instance.get('/admin/employees/unworking')
}

export const getLockedAccountAPI = () => instance.get('/admin/employees/locked')
/**
 * @param { number|string } id  Id of employee
 * @returns
 */
export function unlockedAPI(id) {
  return instance.patch(`/admin/employees/${id}/unlock`)
}
/**
 *
 * @returns
 */
export function getAbsenteeismAPI() {
  return instance.get(`/admin/employees/absenteeism`)
}
/**
 *
 * @param { number | string } attendanceId Id of the attendance record
 * @returns
 */
export function patchAttendanceAPI(attendanceId) {
  return instance.patch(`/admin/attendances/${attendanceId}`)
}
