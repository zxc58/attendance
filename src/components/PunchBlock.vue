<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import to from 'await-to-js'
import store from '../stores'
import api from '../utils/api'
const dialogVisiable = ref(false)
const { useLocationStore, useUserStore, useAlertStore } = store
const locationStore = useLocationStore()
const userStore = useUserStore()
const alertStore = useAlertStore()
const { today, leftTime, formattedPunchIn, userId } = storeToRefs(userStore)
const { getLocation, isInRange } = storeToRefs(locationStore)

async function punchIn() {
  if (!isInRange) return alertStore.show()
  if (!getLocation.value) return alertStore.show()
  const [err, data] = await to(
    api.user.punchIn(userId.value, getLocation.value)
  )
  if (err) return alertStore.show('伺服器錯誤，請稍後嘗試')
  userStore.$patch(
    (state) =>
      (state.recentAttendance[0] = { ...state.recentAttendance[0], ...data })
  )
  return alertStore.show('打卡成功', 'success')
}
async function punchOut() {
  if (!isInRange) return alertStore.show()
  const attendanceId = today.value.id
  if (!attendanceId || !getLocation.value) return alertStore.show()
  const [err, data] = await to(
    api.user.punchOut(userId.value, attendanceId, getLocation.value)
  )
  if (err) return alertStore.show('伺服器錯誤，請稍後嘗試')
  userStore.$patch((state) => {
    state.recentAttendance[0].punchOut = data.punchOut
  })
  return alertStore.show('打卡成功', 'success')
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
            @click="punchOut().finally(() => (dialogVisiable = false))"
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
      size="large"
      @click="dialogVisiable = true"
    >
      下班
    </el-button>
    <el-button
      v-else-if="today?.punchIn"
      :disabled="!isInRange"
      size="large"
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
