<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import to from 'await-to-js'
import api from '../utils/api'
const [route, router] = [useRoute(), useRouter()]
const status = ref(null)
onMounted(async () => {
  const punchQrId = route.query.punchQrId
  if (!punchQrId) return router.push('/')
  const [err] = await to(api.user.qrPunch({ punchQrId }))
  if (err) return (status.value = '打卡失敗 2秒後跳轉')
  status.value = '打卡成功 2秒後跳轉'
  setTimeout(() => router.push('/'), 2 * 1000)
})
</script>

<template>
  <div class="container-md text-center block">
    <div v-if="!status">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div>Loading...</div>
    </div>
    <div v-else>
      {{ status }}
    </div>
  </div>
</template>

<style scoped>
.block {
  margin-top: 100px;
}
</style>
