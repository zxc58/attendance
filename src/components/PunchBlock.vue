<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import to from 'await-to-js'
import store from '../stores'
import api from '../utils/api'
import dayjsTaipei from '../utils/helpers/timeHelper'
const dialogVisiable = ref(false)
const { useLocationStore, useUserStore, useAlertStore } = store
const [locationStore, userStore, alertStore] = [
  useLocationStore(),
  useUserStore(),
  useAlertStore(),
]
const { today, leftTime, formattedPunchIn, userId } = storeToRefs(userStore)
const { getLocation, isInRange } = storeToRefs(locationStore)

async function punchIn() {
  if (!isInRange) return
  const punchIn = dayjsTaipei().startOf('minute').toDate()
  if (!punchIn || !getLocation.value) return
  const [err, data] = await to(
    api.user.punchIn(userId.value, punchIn, getLocation.value)
  )
  if (err) return alertStore.show()
  userStore.$patch(
    (state) => (state.recentAttendance[0].punchIn = data.punchIn)
  )
}
async function punchOut() {
  if (!isInRange) return
  const attendanceId = today.value.id
  const punchOut = dayjsTaipei().startOf('minute').toDate()
  if (!attendanceId || !punchOut || !getLocation.value) return
  const [err, data] = await to(
    api.user.punchOut(userId.value, attendanceId, punchOut, getLocation.value)
  )
  if (err) return alertStore.show()
  userStore.$patch((state) => {
    state.recentAttendance[0].punchOut = data.punchOut
  })
}
</script>

<template>
  <div style="text-align: center">
    <el-dialog
      v-model="dialogVisiable"
      title="警告"
      width="30%"
      center
      v-if="leftTime"
    >
      <p style="text-align: center; margin: 0cm">
        上班時間: {{ formattedPunchIn }}
        <br />
        {{ leftTime }}
      </p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisiable = false">關閉</el-button>
          <el-button
            type="danger"
            @click="
              () => {
                punchOut()
                dialogVisiable = false
              }
            "
          >
            下班
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-button
      :disabled="!isInRange"
      :type="isInRange ? 'danger' : 'info'"
      v-if="leftTime"
      @click="dialogVisiable = true"
    >
      下班
    </el-button>
    <el-button
      v-else-if="today?.punchIn"
      :disabled="!isInRange"
      :type="isInRange ? 'success' : 'info'"
      @click="punchOut"
    >
      下班
    </el-button>
    <el-button
      v-else
      :disabled="!isInRange"
      :type="isInRange ? 'primary' : 'info'"
      size="large"
      @click="punchIn"
    >
      上班
    </el-button>
  </div>
</template>

<style scoped></style>
