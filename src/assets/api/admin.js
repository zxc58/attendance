import instance from './instance'

export const unworkingAPI = () => instance.get('/admin/employees/unworking')

export const lockedAccountAPI = () => instance.get('/admin/employees/locked')

export const unlockedAPI = (id) =>
  instance.patch(`/admin/employees/${id}/unlock`)

export const getAbsenteeismAPI = () =>
  instance.get(`/admin/employees/absenteeism`)

export const patchAttendanceAPI = (attendanceId) => {
  return instance.patch(`/admin/attendances/${attendanceId}`)
}
