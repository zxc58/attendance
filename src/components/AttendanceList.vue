<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount, onBeforeUnmount } from 'vue'
import { useAttendanceStore } from '../stores/attendance'
import dayjsTaipei, { getEndTime } from '../assets/timeHelper'
const attendanceStore = useAttendanceStore()
const { setRecentAttendances } = attendanceStore
const { attendanceList } = storeToRefs(attendanceStore)
let timeOutId
onBeforeMount(() => {
  ;(function b() {
    setRecentAttendances()
    timeOutId = setTimeout(b, getEndTime().diff(dayjsTaipei(), 's') * 1000)
  })()
})
onBeforeUnmount(() => {
  clearTimeout(timeOutId)
})
</script>

<template>
  <div class="py-0 table-block overflow-auto">
    <table class="table table-hover my-0">
      <thead>
        <tr class="table-dark">
          <th scope="col">Date</th>
          <th scope="col">Day</th>
          <th scope="col">attendance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in attendanceList" :key="row.id" :class="row.class">
          <th scope="row">{{ row.date }}</th>
          <td>{{ row.day }}</td>
          <td>{{ row.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.table-block {
  height: 30%;
  margin-bottom: 10px;
}

@media screen and (min-width: 768px) {
  .table-block {
    height: 52%;
    margin-top: 10%;
    margin-bottom: 10%;
  }
}
</style>
