import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const [alertContent, alertType, alertId] = [ref(), ref(), ref()]

  function show(content = '發生未知錯誤', type = 'error') {
    clearTimeout(alertId.value)
    alertId.value = setTimeout(() => {
      alertContent.value = alertType.value = ''
    }, 4000)

    alertContent.value = content
    alertType.value = type
  }

  return {
    alertId,
    alertContent,
    alertType,
    show,
  }
})
