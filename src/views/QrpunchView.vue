<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { qrPunch } from '../assets/api'
import { flash } from '../assets/helpers/flashHelper'
import dayjsTaipei from '../assets/helpers/timeHelper'
const [route, router] = [useRoute(), useRouter()]
const status = ref(null)
onMounted(async () => {
  try {
    const [punch, punchQrId] = [
      dayjsTaipei().startOf('minute').toDate(),
      route.query.punchQrId,
    ]
    const data = { punch, punchQrId }
    const message = await qrPunch(data)
    status.value = message ? '打卡成功 2秒後跳轉' : ''
    setTimeout(() => {
      router.push('/')
    }, 2 * 1000)
  } catch (err) {
    flash({ variant: 'danger', message: JSON.stringify(err) })
  }
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
