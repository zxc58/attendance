<script setup>
import { storeToRefs } from 'pinia'
import { flash } from '../assets/helpers/flashHelper'
import AttendanceList from './AttendanceList.vue'
import store from '../stores'
import api from '../assets/api'
import dayjsTaipei from '../assets/helpers/timeHelper'

const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT ?? 400)
const { useAttendanceStore, useLocationStore } = store
const [attendanceStore, locationStore] = [
  useAttendanceStore(),
  useLocationStore(),
]
const { setTodaysAttendance } = attendanceStore
const { todaysAttendance, leftTime, formatPunchIn } =
  storeToRefs(attendanceStore)
const { getLocation, distance } = storeToRefs(locationStore)

const punchIn = async () => {
  try {
    if (distance.value >= distanceLimit) {
      return flash('warning', '請親自至公司操作')
    }
    const punchIn = dayjsTaipei().startOf('minute').toDate()
    if (!punchIn || !getLocation.value) {
      throw new Error(`punchIn,location: [${!!punchIn},${!!getLocation.value}]`)
    }
    const { data } = await api.user.punchInAPI(punchIn, getLocation.value)
    flash('success', '成功打卡')
    setTodaysAttendance(data)
  } catch (err) {
    flash()
  }
}
const punchOut = async () => {
  try {
    if (distance.value >= distanceLimit) {
      return flash('warning', '請親自至公司操作')
    }
    const id = todaysAttendance.value.id
    const punchOut = dayjsTaipei().startOf('minute').toDate()
    if (!id || !punchOut || !getLocation.value) {
      throw new Error(
        `id,punchOut,location: [${!!id},${!!punchOut},${!!getLocation.value}]`
      )
    }

    const { data } = await api.user.punchOutAPI(id, punchOut, getLocation.value)
    setTodaysAttendance(data)
    flash('success', '成功打卡')
  } catch (error) {
    flash()
  }
}
</script>

<template>
  <div class="col-md">
    <AttendanceList />

    <div class="d-grid gap-2 d-md-block text-end">
      <!-- modal -->
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
      <span
        :class="
          distance <= distanceLimit ? 'd-none' : 'd-over-bp fs-4 text-danger'
        "
        >請至公司操作</span
      >
      <small
        :class="
          distance <= distanceLimit
            ? 'd-none'
            : 'text-center d-less-bp  text-danger'
        "
        >請至公司操作</small
      >
      <!-- button -->
      <button
        :class="
          distance <= distanceLimit
            ? 'btn btn-lg punch-btn px-1 btn-danger'
            : 'btn btn-lg punch-btn px-1 btn-secondary disabled ms-1'
        "
        data-bs-toggle="modal"
        data-bs-target="#punchOutWarning"
        v-if="leftTime"
      >
        下班<span class="d-less-bp"> ( {{ leftTime }} )</span>
      </button>
      <button
        :class="
          distance <= distanceLimit
            ? 'btn btn-lg punch-btn px-1 btn-success'
            : 'btn btn-lg punch-btn px-1 btn-secondary disabled ms-1'
        "
        @click="punchOut"
        v-else-if="todaysAttendance"
      >
        下班
      </button>
      <button
        :class="
          distance <= distanceLimit
            ? 'btn btn-lg punch-btn px-1 btn-info'
            : 'btn btn-lg punch-btn px-1 btn-secondary disabled ms-1'
        "
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
