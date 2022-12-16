import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import createInstance from '../assets/api'
const api = createInstance()
export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const userName = computed(() => {
    return user.value?.name
  })
  async function fetchUser() {
    const response = await api.get('api/users')
    user.value = response?.data?.user ?? null
  }
  function clearAuthToken() {
    localStorage.removeItem('token')
  }
  return { user, fetchUser, clearAuthToken, userName }
})
