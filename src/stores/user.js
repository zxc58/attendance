import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchPersonalData } from '../assets/api'
export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const userName = computed(() => {
    return user.value?.name ?? null
  })
  const userId = computed(() => {
    return user.value?.id ?? null
  })
  const userAvatar = computed(() => {
    return user.value?.avatar ?? '../../avatar.png'
  })

  async function setUser(newUser) {
    try {
      if (!newUser) {
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
  return { user, setUser, clearAuthToken, userName, userId, userAvatar }
})
