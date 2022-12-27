import axios from 'axios'
const backendURL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000'

const api = axios.create({
  baseURL: backendURL,
  timeout: 3000,
})
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
export default api

export const login = async (data) => {
  try {
    const response = await api.post('/api/logIn', data)
    return response.data
  } catch (axiosError) {
    return Promise.reject(axiosError.message)
  }
}

export const fetchPersonalData = async () => {
  try {
    const res = await api.get('/api/employees')
    return res.data.employee
  } catch (axiosError) {
    return Promise.reject(axiosError.message)
  }
}

export const fetchTodaysAttendance = async () => {
  try {
    const res = await api.get('/api/attendances/today')
    return res.data?.attendance ?? null
  } catch (axiosError) {
    return Promise.reject(axiosError.message)
  }
}

export const fetchRecentAttendances = async () => {
  try {
    const res = await api.get('/api/attendances/recent')
    return res.data.attendances
  } catch (axiosError) {
    return Promise.reject(axiosError.message)
  }
}

export const putPersonalData = async ({ data, id }) => {
  try {
    const res = await api.put(`/api/employees/${id}`, data)
    return res.data.employee
  } catch (axiosError) {
    return Promise.reject(axiosError.message)
  }
}

export const punchIn = async ({ punchIn, location }) => {
  try {
    const response = await api.post('/api/attendances', {
      punchIn,
      location,
    })
    return response.data.attendance
  } catch (axiosError) {
    return Promise.reject(axiosError.message)
  }
}

export const punchOut = async ({ id, punchOut, location }) => {
  try {
    // console.log(location)
    const response = await api.put(`/api/attendances/${id}`, {
      punchOut,
      location,
    })
    return response.data.attendance
  } catch (axiosError) {
    return Promise.reject(axiosError.message)
  }
}
