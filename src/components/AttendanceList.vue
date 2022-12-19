<script setup>
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { useAttendanceStore } from '../stores/attendance'
const attendanceStore = useAttendanceStore()
const { setRecentAttendances } = attendanceStore
const { attendanceList } = storeToRefs(attendanceStore)
setRecentAttendances()
</script>

<template>
  <table class="table table-hover my-0">
    <tbody>
      <tr v-for="row in attendanceList" :key="row.id" :class="row.class">
        <th scope="row">{{ row.date }}</th>
        <td>{{ row.day }}</td>
        <td>{{ row.status }}</td>
      </tr>
    </tbody>
  </table>
</template>
