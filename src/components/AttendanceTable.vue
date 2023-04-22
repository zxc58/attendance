<script setup>
import { storeToRefs } from 'pinia'
import store from '../stores'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const userStore = store.useUserStore()
const { attendanceHistoryRecord } = storeToRefs(userStore)
const tableRowClassName = ({ row }) => (row.class ? `${row.class}-row` : '')
const headerCellStyle = { backgroundColor: 'black', color: 'white' }
const tableRowKey = (row) => row.id
</script>

<template>
  <el-table
    :data="attendanceHistoryRecord"
    :border="true"
    :height="width >= 768 ? '700px' : '400px'"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    :row-key="tableRowKey"
    :header-cell-style="headerCellStyle"
  >
    <el-table-column prop="date" label="日期" />
    <el-table-column prop="day" label="星期" />
    <el-table-column prop="status" label="出勤" />
  </el-table>
</template>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-7);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-7);
}
.el-table .info-row {
  --el-table-tr-bg-color: var(--el-color-info-light-7);
}
.el-table .primary-row {
  --el-table-tr-bg-color: var(--el-color-primary-light-7);
}
.el-table .danger-row {
  --el-table-tr-bg-color: var(--el-color-danger-light-7);
}
</style>
