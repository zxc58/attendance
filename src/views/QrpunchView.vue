<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import to from 'await-to-js'
import api from '../utils/api'
import dayjsTaipei from '../utils/helpers/timeHelper'
const [route, router] = [useRoute(), useRouter()]
const status = ref(null)
onMounted(async () => {
  const [punch, punchQrId] = [
    dayjsTaipei().startOf('minute').toDate(),
    route.query.punchQrId,
  ]
  const data = { punch, punchQrId }
  const [, message] = await to(api.user.qrPunch(data))
  if (!message) return
  status.value = '打卡成功 2秒後跳轉'
  setTimeout(() => {
    router.push('/')
  }, 2 * 1000)
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
