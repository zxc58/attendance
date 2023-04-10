<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AdminTable from '../components/admin/adminTable.vue'
import store from '../stores'
import api from '../utils/api'
import to from 'await-to-js'
import dayjs from '../utils/helpers/timeHelper'
const { useUserStore } = store
const [router, userStore] = [useRouter(), useUserStore()]
const [absentEmployees, bannedAccounts] = [reactive([]), reactive([])]
const activeName = ref('absentEmployees')
onMounted(async () => {
  if (!userStore.isAdmin) return router.push('/')
  const [err, data] = await to(api.admin.getAbsenteeism())
  if (data) absentEmployees.push(...data)
  const [err1, data1] = await to(api.admin.getLockedAccount())
  if (data1) bannedAccounts.push(...data1)
})
const table1Columns = [
  { label: '日期', prop: 'date' },
  { label: '名字', prop: 'name' },
  { label: '上班', prop: 'punchIn' },
  { label: '下班', prop: 'punchOut' },
]
const table2Columns = [
  { label: '帳號', prop: 'account' },
  { label: '名字', prop: 'name' },
]
function a1(e) {
  return {
    ...e,
    date: dayjs(e.date).format('YYYY-MM-DD'),
    punchIn: e.punchIn ? dayjs.tz(e.punchIn).format('DD日hh:mm') : '--',
    punchOut: e.punchOut ? dayjs.tz(e.punchOut).format('DD日hh:mm') : '--',
  }
}
async function permitAccount(row) {
  if (row.id) return
  const [err] = await to(api.admin.unlocked(row.id))
  if (err) return
  const index = bannedAccounts.findIndex((e) => e.id === row.id)
  bannedAccounts.splice(index, 1)
}
async function patchAttendance(row) {
  const { dateId, employeeId } = row
  if (!dateId || !employeeId) return
  const [err] = await to(api.admin.patchAttendance({ dateId, employeeId }))
  if (err) return
  const index = absentEmployees.findIndex(
    (e) => e.dateId === dateId && e.employeeId === employeeId
  )
  absentEmployees.splice(index, 1)
}
</script>

<template>
  <el-row style="justify-content: center">
    <el-tabs v-model="activeName" style="width: 800px; justify-content: center">
      <el-tab-pane label="缺勤員工" name="absentEmployees">
        <AdminTable
          v-slot="tableSlot"
          :data="absentEmployees"
          :columns="table1Columns"
          :format-function="a1"
        >
          <el-button
            type="success"
            @click="patchAttendance(tableSlot.lastColumn.row)"
            >改為出勤</el-button
          >
        </AdminTable>
      </el-tab-pane>
      <el-tab-pane label="禁止帳號" name="bannedAccounts">
        <AdminTable
          v-slot="tableSlot"
          :columns="table2Columns"
          :data="bannedAccounts"
        >
          <el-button
            type="success"
            @click="permitAccount(tableSlot.lastColumn.row)"
            >解鎖帳號</el-button
          >
        </AdminTable>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>
<style scoped></style>
