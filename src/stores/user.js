import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
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
    return user?.value?.avatar ?? avatarUrl
  })
  const isAdmin = computed(() => {
    return user.value?.isAdmin ?? false
  })

  function setUser(newUser) {
    user.value = newUser
  }
  function setAvatar(url) {
    if (user.value) {
      user.value.avatar = url
    }
  }
  return { user, setUser, userName, userId, userAvatar, isAdmin, setAvatar }
})
