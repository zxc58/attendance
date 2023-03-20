import instance from './instance'

export function getUnworking() {
  return instance.get('/admin/employees/unworking')
}

export function getLockedAccount() {
  return instance.get('/admin/employees/locked')
}
/**
 * @param { number|string } id  Id of employee
 * @returns
 */
export function unlocked(id) {
  return instance.patch(`/admin/employees/${id}/unlock`)
}
/**
 *
 * @returns
 */
export function getAbsenteeism() {
  return instance.get(`/admin/employees/absenteeism`)
}
/**
 *
 * @param { number | string } attendanceId Id of the attendance record
 * @returns
 */
export function patchAttendance(attendanceId) {
  return instance.patch(`/admin/attendances/${attendanceId}`)
}
