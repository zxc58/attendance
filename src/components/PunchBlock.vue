<script setup>
import AttendanceList from './AttendanceList.vue'
import { useTimeStore } from '../stores/time'
import { useAttendanceStore } from '../stores/attendance'
import { storeToRefs } from 'pinia'
import createInstance from '../assets/api'
import dayjsTaipei from '../assets/timeHelper'
const [attendanceStore, timeStore] = [useAttendanceStore(), useTimeStore()]
const { setTodaysAttendance } = attendanceStore
const { todaysAttendance, leftTime } = storeToRefs(attendanceStore)
setTodaysAttendance()
const punchIn = async () => {
  try {
    const punchIn = dayjsTaipei().startOf('minute').toDate()
    const api = createInstance()
    if (!api || !punchIn) {
      throw new Error()
    }
    console.log(`api , createdAt : ${!!api} , ${punchIn}`)
    const response = await api.post('/api/attendances', { punchIn })
    if (!response?.data?.attendance) {
      throw new Error('Punch in failed')
    }
    setTodaysAttendance(response.data.attendance)
  } catch (err) {
    console.error(err)
    alert('發生未知錯誤')
  }
}
const punchOut = async () => {
  try {
    const [api, id] = [createInstance(), todaysAttendance.value?.id]
    const punchOut = dayjsTaipei().startOf('minute').toDate()

    if (!api || !id || !punchOut) {
      throw new Error()
    }
    console.log(`api , id  : ${!!api} , ${id}`)
    const response = await api.put(`/api/attendances/${id}`, { punchOut })
    if (!response?.data?.attendance) {
      throw new Error('Punch in failed')
    }
    setTodaysAttendance(response.data.attendance)
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
    <div class="d-grid gap-2 d-md-block text-end btn-block">
      <h3 v-if="leftTime ?? null" class="text-center mb-0">
        {{
          leftTime < 10
            ? 0 < leftTime
              ? '還有' + leftTime + '分鐘'
              : '不到1分鐘'
            : '不到下班時間'
        }}
      </h3>
      <button
        class="btn btn-danger btn-lg punch-btn px-1"
        @click="punchOut"
        v-if="leftTime"
      >
        下班<br />
      </button>
      <button
        class="btn btn-success btn-lg punch-btn px-1"
        @click="punchOut"
        v-else-if="todaysAttendance"
      >
        下班
      </button>
      <button
        class="btn btn-info btn-lg punch-btn px-1"
        @click="punchIn"
        v-else
      >
        上班
      </button>
    </div>
  </div>
</template>

<style scope>
@media screen and (min-width: 768px) {
  .table-block {
    height: 50%;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  h3 {
    position: absolute;
    color: darkred;
    font-weight: 700;
  }
  .punch-btn {
    transform: scale(2.5, 2);
    max-width: 400px;
  }
}
</style>
