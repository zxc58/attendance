<script setup>
import createInstance from '../assets/api'
import { ref } from 'vue'
import dayjsTaipei from '../assets/timeHelper'
const workingHour = ref(null)
const apiServer = createInstance()
;(async () => {
  const personalData = await apiServer.get('api/records/today')
  const createdAt = personalData?.data?.data?.createdAt
  if (!createdAt) {
    workingHour.value = 0
    return
  }
  workingHour.value = dayjsTaipei().diff(dayjsTaipei(createdAt), 'hour')
})()
</script>
<template>
  <div class="col">
    <div class="top-half py-1">0000</div>
    <div class="d-grid gap-2 d-lg-block text-end">
      <button class="btn btn-danger btn-lg">還不行</button>
    </div>
  </div>
</template>
<style scope>
.top-half {
  background-color: aqua;
  width: 100%;
}
.bottom-half {
  background-color: coral;
  width: 100%;
}
/* button {
  height: 50%;
  width: 50%;
} */
</style>
