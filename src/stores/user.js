import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import createInstance, { fetchPersonalData } from '../assets/api'
const api = createInstance()
export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const userName = computed(() => {
    return user.value?.name
  })
  async function setUser() {
    const response = await fetchPersonalData()
    console.log(response)
    user.value = response ?? null
  }
  function clearAuthToken() {
    localStorage.removeItem('token')
    user.value = null
  }
  return { user, setUser, clearAuthToken, userName }
})
