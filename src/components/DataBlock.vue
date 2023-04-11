<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import to from 'await-to-js'
import store from '../stores'
import instance from '../utils/api/instance'
const { useUserStore, useAlertStore } = store
const [userStore, alertStore] = [useUserStore(), useAlertStore()]
const { userAvatar, userName, formattedPunchIn, formattedPunchOut, userId } =
  storeToRefs(userStore)

const avatarInput = ref()

async function updateAvatar() {
  var formData = new FormData()
  var imagefile = avatarInput.value
  formData.append('image', imagefile.files[0])
  const [err, data] = await to(
    instance.post(`/employees/${userId.value}/avatar`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout: 5000,
    })
  )
  if (err) return alertStore.show()
  userStore.$patch((state) => (state.user.avatar = data.avatar))
}
</script>

<template>
  <div class="hidden-xs-only" style="text-align: center">
    <el-avatar
      :size="300"
      fit="contain"
      :src="userAvatar"
      @click="avatarInput.click()"
    />
    <input
      type="file"
      ref="avatarInput"
      style="display: none"
      @change="updateAvatar"
    />
    <div style="font-size: 2rem">{{ userName }}</div>
    <div>今日出勤</div>
  </div>
  <ul style="margin-bottom: 0px">
    <li>上班時間: {{ formattedPunchIn }}</li>
    <li>下班時間: {{ formattedPunchOut }}</li>
  </ul>
</template>

<style scoped>
.el-avatar {
  cursor: pointer;
}
</style>
