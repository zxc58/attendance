<script setup>
import AttendanceList from './AttendanceList.vue'
import { useAttendanceStore } from '../stores/attendance'
import { useLocationStore } from '../stores/location'
import { storeToRefs } from 'pinia'
import { punchIn as punchInApi, punchOut as punchOutApi } from '../assets/api'
import dayjsTaipei, { getEndTime } from '../assets/timeHelper'
import { onBeforeMount, onBeforeUnmount } from 'vue'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT)
const [attendanceStore, locationStore] = [
  useAttendanceStore(),
  useLocationStore(),
]
const { setTodaysAttendance } = attendanceStore
const { todaysAttendance, leftTime, formatPunchIn } =
  storeToRefs(attendanceStore)
const { getLocation, distance } = storeToRefs(locationStore)
let timeOutId
onBeforeMount(() => {
  ;(function a() {
    setTodaysAttendance()
    timeOutId = setTimeout(a, getEndTime().diff(dayjsTaipei(), 's') * 1000)
  })()
})
onBeforeUnmount(() => {
  clearTimeout(timeOutId)
})
const punchIn = async () => {
  try {
    if (distance.value >= distanceLimit) {
      return alert('請親自至公司操作')
    }
    const punchIn = dayjsTaipei().startOf('minute').toDate()
    if (!punchIn || !getLocation.value) {
      throw new Error()
    }
    const attendance = await punchInApi({
      punchIn,
      location: getLocation.value,
    })

    setTodaysAttendance(attendance)
  } catch (err) {
    console.error(err)
    alert('發生未知錯誤，打卡失敗')
  }
}
const punchOut = async () => {
  try {
    if (distance.value >= distanceLimit) {
      return alert('請親自至公司操作')
    }
    const id = todaysAttendance.value.id
    const punchOut = dayjsTaipei().startOf('minute').toDate()
    if (!id || !punchOut || !getLocation.value) {
      throw new Error(
        `id,punchOut,location: [${!!id},${!!punchOut},${!!getLocation.value}]`
      )
    }

    const attendance = await punchOutApi({
      id,
      punchOut,
      location: getLocation.value,
    })

    setTodaysAttendance(attendance)
  } catch (error) {
    alert('發生未知錯誤')
    console.error(error)
  }
}
</script>

<template>
  <div class="col-md">
    <AttendanceList />

    <div class="d-grid gap-2 d-md-block text-end">
      <div
        class="modal fade"
        id="punchOutWarning"
        tabindex="-1"
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
        下班<span class="d-less-bp"> ( {{ leftTime }} )</span>
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

<style scoped>
@media screen and (min-width: 768px) {
  .punch-btn {
    text-indent: 1rem;
    letter-spacing: 1rem;
    font-size: 3rem;
    max-width: 400px;
  }
}
</style>
