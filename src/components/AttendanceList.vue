<script setup>
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { useAttendanceStore } from '../stores/attendance'
const attendanceStore = useAttendanceStore()
const { setRecentAttendances } = attendanceStore
const { attendanceList } = storeToRefs(attendanceStore)
onBeforeMount(() => {
  setRecentAttendances()
})
</script>

<template>
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
</template>
<style scoped></style>
