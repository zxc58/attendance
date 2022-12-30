import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchPersonalData } from '../assets/api'
import { flash } from '../assets/flash'
import avatarUrl from '../assets/avatar.png'
export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const userName = computed(() => {
    return user.value?.name ?? null
  })
  const userId = computed(() => {
    return user.value?.id ?? null
  })
  const userAvatar = computed(() => {
    return user.value ? user.value?.avatar ?? avatarUrl : null
  })

  async function setUser(newUser) {
    try {
      if (!newUser) {
        newUser = await fetchPersonalData()
      }
      user.value = newUser
      return newUser
    } catch (err) {
      flash({ variant: 'danger', message: '發生未知錯誤，請重新嘗試' })
    }
  }

  return { user, setUser, userName, userId, userAvatar }
})
