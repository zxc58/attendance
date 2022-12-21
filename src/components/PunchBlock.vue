<script setup>
import AttendanceList from './AttendanceList.vue'
import { useAttendanceStore } from '../stores/attendance'
import { storeToRefs } from 'pinia'
import createApiInstance from '../assets/api'
import dayjsTaipei from '../assets/timeHelper'
import { onBeforeMount } from 'vue'
const api = createApiInstance()
const attendanceStore = useAttendanceStore()
const { setTodaysAttendance } = attendanceStore
const { todaysAttendance, leftTime, formatPunchIn } =
  storeToRefs(attendanceStore)
onBeforeMount(() => {
  setTodaysAttendance()
})
const punchIn = async () => {
  try {
    const punchIn = dayjsTaipei().startOf('minute').toDate()
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
    alert('發生未知錯誤，打卡失敗')
  }
}
const punchOut = async () => {
  try {
    const id = todaysAttendance.value?.id
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
    <div class="py-0 table-block overflow-auto">
      <AttendanceList />
    </div>
    <div class="d-grid gap-2 d-md-block text-end btn-block">
      <h3 v-if="leftTime" class="text-center mb-0">
        {{
          +leftTime < 10
            ? 0 < +leftTime
              ? '還有' + leftTime + '分鐘'
              : '不到1分鐘' + null >= 0
            : '上班時間 ' + formatPunchIn
        }}
      </h3>
      <div
        class="modal"
        id="punchOutWarning"
        aria-labelledby="punchOutWarningLabel"
        aria-hidden="true"
        v-if="leftTime"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-warning">Warning</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body py-0">
              <p class="mb-0 text-center">時間沒到</p>
              <p class="mb-0 text-center">(上班時間: {{ formatPunchIn }})</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                關閉
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="punchOut"
                data-bs-dismiss="modal"
              >
                仍要打卡
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-danger btn-lg punch-btn px-1"
        data-bs-toggle="modal"
        data-bs-target="#punchOutWarning"
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
.table-block {
  height: 30%;
  margin-bottom: 10px;
}
h3 {
  color: darkred;
  font-weight: 700;
}
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
