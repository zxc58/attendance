import axios from 'axios'
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

const createApiInstance = () =>
  axios.create({
    baseURL: backendURL,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    timeout: 1000,
  })
export default createApiInstance

export const fetchPersonalData = async () => {
  const res = await createApiInstance().get('api/employees')
  if (res?.data?.employee) {
    return res?.data?.employee
  }
  return null
}

export const fetchTodaysAttendance = async () => {
  const res = await createApiInstance().get('/api/attendances/today')
  if (res?.data?.status === true) {
    return res?.data?.attendance ?? null
  }
  throw new Error()
}

export const fetchRecentAttendances = async () => {
  const res = await createApiInstance().get('/api/attendances/recent')
  if (res?.data?.attendances) {
    return res?.data?.attendances
  }
  throw new Error()
}

export const putPersonalData = async (data, id) => {
  const res = await createApiInstance().put(`/api/employees/${id}`, data)
  if (res?.data?.employee) {
    return res?.data?.employee
  }
  throw new Error()
}
