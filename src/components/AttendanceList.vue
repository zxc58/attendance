<script setup>
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { useAttendanceStore } from '../stores/attendance'
const recordStore = useAttendanceStore()
// const attendanceTable = reactive([
//   {
//     id: 1,
//     date: '12月31號',
//     status: '缺勤',
//     class: 'table-danger',
//     week: 'Fri',
//   },
//   {
//     id: 2,
//     date: '12月30號',
//     status: '出勤',
//     class: 'table-success',
//     week: 'Thu',
//   },
//   {
//     id: 3,
//     date: '12月29號',
//     status: '異常',
//     class: 'table-warning',
//     week: 'Wed',
//   },
// ])
</script>

<template>
  <table class="table table-hover">
    <tbody>
      <tr v-for="row in attendanceTable" :key="row.id" :class="row.class">
        <th scope="row">{{ row.date }}</th>
        <td>{{ row.week }}</td>
        <td>{{ row.status }}</td>
      </tr>
    </tbody>
  </table>
</template>
