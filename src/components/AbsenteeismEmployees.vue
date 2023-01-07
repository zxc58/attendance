<script setup>
import { ref, onMounted } from 'vue'
import { getAbsenteeism, patchAttendance } from '../assets/api'
import { flash } from '../assets/helpers/flashHelper'
import dayjsTaipei from '../assets/helpers/timeHelper'
const absenteeismEmployees = ref([])
onMounted(async () => {
  try {
    const absenteeism = await getAbsenteeism()
    absenteeismEmployees.value = absenteeism
  } catch (err) {
    flash({ variant: 'danger', message: '發生未知錯誤' })
    console.error(err)
  }
})
const modifyAttendance = async (attendanceId) => {
  try {
    await patchAttendance(attendanceId)
    const deleteIndex = absenteeismEmployees.value.findIndex(
      (e) => e.attendanceId === attendanceId
    )
    absenteeismEmployees.value.splice(deleteIndex, 1)
    flash({ variant: 'success', message: '成功修改' })
  } catch (err) {
    flash({ variant: 'danger', message: '發生未知錯誤' })
    console.error(err)
  }
}
</script>

<template>
  <table class="table table-bordered">
    <thead>
      <tr class="table-danger">
        <th scope="col">帳號</th>
        <th scope="col">名字</th>
        <th scope="col">日期</th>
        <th scope="col">上班卡</th>
        <th scope="col">下班卡</th>
        <th scope="col">改為出勤</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in absenteeismEmployees" :key="row.attendanceId">
        <th scope="row">{{ row.account }}</th>
        <td>{{ row.name }}</td>
        <td>{{ row.date }}</td>
        <td>{{ dayjsTaipei(row.punchIn).format('HH:MM') }}</td>
        <td>
          {{
            row.punchOut ? dayjsTaipei(row.punchOut).format('HH:MM') : '未打卡'
          }}
        </td>
        <td>
          <button
            class="btn btn-sm btn-success rounded-pill"
            @click="
              () => {
                modifyAttendance(row.attendanceId)
              }
            "
          >
            出勤
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
thead th {
  position: sticky;
  top: 0;
}
</style>
