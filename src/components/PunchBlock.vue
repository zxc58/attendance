<script setup>
import { storeToRefs } from 'pinia'
import to from 'await-to-js'
import { flash } from '../utils/helpers/flashHelper'
import AttendanceList from './AttendanceList.vue'
import store from '../stores'
import api from '../utils/api'
import dayjsTaipei from '../utils/helpers/timeHelper'

const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT ?? 400)
const { useLocationStore, useUserStore } = store
const [locationStore, userStore] = [useLocationStore(), useUserStore()]
const { today, leftTime, formattedPunchIn, userId } = storeToRefs(userStore)
const { getLocation, isInRange } = storeToRefs(locationStore)

async function punchIn() {
  if (!isInRange) return flash('warning', '請親自至公司操作')
  const punchIn = dayjsTaipei().startOf('minute').toDate()
  if (!punchIn || !getLocation.value) return flash()
  const [err, data] = await to(
    api.user.punchIn(userId.value, punchIn, getLocation.value)
  )
  if (err) return flash()
  flash('success', '成功打卡')
  userStore.$patch(
    (state) => (state.recentAttendance[0].punchIn = data.punchIn)
  )
}
async function punchOut() {
  if (!isInRange) return flash('warning', '請親自至公司操作')
  const attendanceId = today.value.id
  const punchOut = dayjsTaipei().startOf('minute').toDate()
  if (!attendanceId || !punchOut || !getLocation.value) return flash()
  const [err, data] = await to(
    api.user.punchOut(userId.value, attendanceId, punchOut, getLocation.value)
  )
  if (err) return flash()
  userStore.$patch((state) => {
    state.recentAttendance[0].punchOut = data.punchOut
  })
  flash('success', '成功打卡')
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
              <p class="mb-0 text-center">(上班時間: {{ formattedPunchIn }})</p>
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
      <span :class="isInRange ? 'd-none' : 'd-over-bp fs-4 text-danger'"
        >請至公司操作</span
      >
      <small
        :class="isInRange ? 'd-none' : 'text-center d-less-bp  text-danger'"
        >請至公司操作</small
      >
      <!-- button -->
      <button
        :class="
          isInRange
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
          isInRange
            ? 'btn btn-lg punch-btn px-1 btn-success'
            : 'btn btn-lg punch-btn px-1 btn-secondary disabled ms-1'
        "
        @click="punchOut"
        v-else-if="today?.punchIn"
      >
        下班
      </button>
      <button
        v-bind:disabled="!isInRange"
        class="btn btn-lg punch-btn px-1 btn-info"
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
