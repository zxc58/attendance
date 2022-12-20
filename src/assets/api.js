import axios from 'axios'
const baseURL = import.meta.env.VUE_APP_BACKEND_URL ?? 'http://localhost:3000'
const createInstance = () =>
  axios.create({
    baseURL,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    timeout: 1000,
  })

export default createInstance

export const fetchPersonalData = async () => {
  const res = await createInstance().get('api/employees')
  if (res?.data?.employee) {
    return res?.data?.employee
  }
  throw new Error()
}

export const fetchTodaysAttendance = async () => {
  const res = await createInstance().get('/api/attendances/today')
  if (res?.data?.status === true) {
    return res?.data?.attendance ?? null
  }
  throw new Error()
}

export const fetchRecentAttendances = async () => {
  const res = await createInstance().get('/api/attendances/recent')
  if (res?.data?.attendances) {
    return res?.data?.attendances
  }
  throw new Error()
}
