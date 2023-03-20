<script setup>
import { storeToRefs } from 'pinia'
import store from '../stores'
const userStore = store.useUserStore()
const { attendanceHistoryRecord } = storeToRefs(userStore)
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
          v-for="row in attendanceHistoryRecord"
          :key="row.id"
          :class="row.class"
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
  z-index: 999;
}
@media screen and (max-width: 768px) {
  div {
    height: 20rem;
    margin-bottom: 1rem;
  }
}
</style>
