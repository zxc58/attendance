<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, onBeforeUnmount } from 'vue'
import store from '../stores'
import dayjsTaipei, { getEndTime } from '../assets/helpers/timeHelper'
import api from '../assets/api'
const { useAttendanceStore } = store
const attendanceStore = useAttendanceStore()
const { setRecentAttendances } = attendanceStore
const { attendanceList } = storeToRefs(attendanceStore)
let timeOutId
onMounted(() => {
  ;(async function refreshRecentAttendances() {
    const { data } = await api.user.recentAttendancesAPI()
    setRecentAttendances(data)
    timeOutId = setTimeout(
      refreshRecentAttendances,
      getEndTime().diff(dayjsTaipei())
    )
  })()
})
onBeforeUnmount(() => {
  clearTimeout(timeOutId)
})
</script>

<template>
  <div class="py-0 overflow-auto">
    <table class="table my-0">
      <thead>
        <tr class="table-dark">
          <th scope="col ">日期</th>
          <th scope="col">星期</th>
          <th scope="col">出勤</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in attendanceList"
          :key="row.id"
          :class="row.class"
          @click="row.showDetails"
        >
          <th scope="row">{{ row.date }}</th>
          <td>{{ row.day }}</td>
          <td>{{ row.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.row-details:hover {
  cursor: pointer;
  filter: brightness(1.05);
}
div {
  margin-bottom: 1rem;
  max-height: 330px;
}
thead th {
  position: sticky;
  top: 0;
}
@media screen and (max-width: 768px) {
  div {
    height: 20rem;
    margin-bottom: 1rem;
  }
}
</style>
