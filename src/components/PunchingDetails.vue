<script setup>
import { storeToRefs } from 'pinia'
import store from '../stores'
const { useAttendanceStore } = store
const attendanceStore = useAttendanceStore()
const { formatDetails } = storeToRefs(attendanceStore)
</script>

<template>
  <br />
  <div
    v-if="formatDetails"
    :class="`mt-1 col-md d-flex align-items-center rounded-pill bg-opacity-10 bg-${formatDetails.color}`"
  >
    <div :class="`halfBlock text-center display-3 text-${formatDetails.color}`">
      {{ formatDetails.status }}
    </div>
    <div :class="`halfBlock text-start fs-5 text-${formatDetails.color}`">
      <p>{{ formatDetails.date }} {{ formatDetails.day }}</p>
      <p>上班時間: {{ formatDetails.punchIn }}</p>
      <p>下班時間: {{ formatDetails.punchOut }}</p>
    </div>
  </div>
</template>
<style scoped>
.halfBlock {
  padding: 0.5rem;
  min-width: 50%;
}
p {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
</style>
