import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchPersonalData } from '../assets/api'
export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const userName = computed(() => {
    return user.value?.name
  })
  const userId = computed(() => {
    return user.value?.id
  })

  async function setUser(newUser) {
    try {
      if (!newUser) {
        if (user.value) {
          return
        }
        newUser = await fetchPersonalData()
      }
      user.value = newUser
      return newUser
    } catch (err) {
      alert('發生未知錯誤')
    }
  }
  function clearAuthToken() {
    localStorage.removeItem('token')
    user.value = null
  }
  return { user, setUser, clearAuthToken, userName, userId }
})
