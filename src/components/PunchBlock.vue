<script setup>
import AttendanceList from './AttendanceList.vue'
import { useTimeStore } from '../stores/time'
import { useRecordStore } from '../stores/record'
import { storeToRefs } from 'pinia'
import createInstance from '../assets/api'
import dayjsTaipei from '../assets/timeHelper'
const recordStore = useRecordStore()
const { fetchTodaysRecord } = recordStore
const { todaysRecord, workingHour } = storeToRefs(recordStore)
const timeStore = useTimeStore()
const { leftTime } = storeToRefs(timeStore)
fetchTodaysRecord()
const punchIn = async () => {
  try {
    const createdAt = dayjsTaipei().startOf('minute').toDate()
    const api = createInstance()
    if (!api || !createdAt) {
      throw new Error()
    }
    console.log(`api , createdAt : ${!!api} , ${createdAt}`)
    await api.post('/api/records', { createdAt })
  } catch (err) {
    console.error(err)
    alert('發生未知錯誤')
  }
}
const punchOut = async () => {
  try {
    const [api, id] = [createInstance(), todaysRecord.value?.id]
    const workingHour = dayjsTaipei().diff(
      dayjsTaipei(todaysRecord.value.createdAt),
      'h'
    )
    if (!api || !id || !workingHour) {
      throw new Error()
    }
    console.log(`api , id , workingHour : ${!!api} , ${id} , ${workingHour}`)
    await api.put(`/api/records/${id}`, { workingHour })
  } catch (error) {
    alert('發生未知錯誤')
    console.error(error)
  }
}
</script>

<template>
  <div class="col">
    <div class="py-0 table-block">
      <AttendanceList />
    </div>
    <div class="d-grid gap-2 d-md-block text-end">
      <button class="btn btn-danger btn-lg" @click="punchOut" v-if="leftTime">
        下班(視為缺勤)
      </button>
      <button
        class="btn btn-success btn-lg"
        @click="punchOut"
        v-else-if="todaysRecord"
      >
        下班
      </button>
      <button class="btn btn-info btn-lg" @click="punchIn" v-else>上班</button>
    </div>
  </div>
</template>

<style scope>
@media screen and (min-width: 768px) {
  .table-block {
    height: 90%;
    margin-top: 10%;
  }
  button {
    transform: scale(2.5, 2);
    margin-top: -50%;
    right: 15%;
    position: relative;
  }
}
</style>
