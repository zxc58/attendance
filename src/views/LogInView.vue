<script setup>
import { ref } from 'vue'
import { removeTokens } from '../assets/helpers/jwtHelper'
import { storeToRefs } from 'pinia'
import QrcodeVue from 'qrcode.vue'
import qricon from '../assets/qricon.png'
import { useRouter } from 'vue-router'
import store from '../stores'
import api from '../assets/api'
import { flash } from '../assets/helpers/flashHelper'
import { storeJWT } from '../assets/helpers/jwtHelper'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT ?? 400)
const { useUserStore, useLocationStore, useAttendanceStore } = store
const qr = ref('')
const [userStore, locationStore, router, attendanceStore] = [
  useUserStore(),
  useLocationStore(),
  useRouter(),
  useAttendanceStore(),
]
userStore.$patch({ user: null })
attendanceStore.$patch({ todaysAttendance: null, recentAttendances: [] })
removeTokens()
const { getLocation, distance } = storeToRefs(locationStore)

const inputs = [
  {
    key: 'accountDiv',
    id: 'accountInput',
    label: '帳號',
    name: 'account',
    minLength: 5,
    maxLength: 14,
    isRequired: true,
    type: 'text',
    labelClass: 'form-label mt-4 fw-bold',
    inputClass: 'form-control',
    placeholder: '長度5~14',
  },
  {
    key: 'passwordDiv',
    id: 'passwordInput',
    label: '密碼',
    name: 'password',
    minLength: 7,
    maxLength: 14,
    isRequired: true,
    type: 'password',
    labelClass: 'form-label mt-4 fw-bold',
    inputClass: 'form-control',
    placeholder: '長度7~14',
  },
]
const login = async (e) => {
  try {
    const inputs = e.target.querySelectorAll('input')
    const data = {}
    inputs.forEach((element) => {
      data[element.name] = element.value
    })
    const responseData = await api.user.loginAPI(data)
    storeJWT(responseData)
    router.push('/')
  } catch ({ message }) {
    switch (message) {
      case 'Wrong times over 5':
        return flash('danger', '帳號已被鎖定')
      case ('Password wrong', 'Account do not exist'):
        return flash('danger', '帳號或密碼錯誤')
      default:
        return flash()
    }
  }
}

const showQr = async () => {
  try {
    if (!(distance.value <= distanceLimit)) {
      return flash('warning', '請親自至公司操作')
    }
    const { punchQrId } = await api.user.getQrIdAPI(getLocation.value)
    if (!punchQrId) {
      throw new Error('Get QR code fail')
    }
    const qrURL = `${location.protocol}//${location.host}/attendance/qrcode?punchQrId=${punchQrId}`
    qr.value = qrURL
    window.addEventListener(
      'click',
      () => {
        qr.value = ''
      },
      { once: true, capture: true }
    )
  } catch (err) {
    flash()
  }
}
</script>

<template>
  <form class="container-md" @submit.prevent="login">
    <fieldset>
      <legend class="text-center display-5 my-0">登入</legend>
      <div class="d-over-bp">
        <qrcode-vue
          v-if="qr"
          class="qr-code"
          :value="qr"
          :size="400"
          level="H"
        ></qrcode-vue>
        <img @click="showQr" :src="qricon" alt="qr" />
        <span
          :class="distance <= distanceLimit ? 'text-info' : 'text-secondary'"
          v-if="!qr"
        >
          {{ distance <= distanceLimit ? '掃描打卡' : '請至公司取得qr code' }}
        </span>
      </div>
      <div class="form-group" v-for="input in inputs" :key="input.key">
        <label :for="input.id" :class="input.labelClass">{{
          input.label
        }}</label>
        <input
          :minlength="input.minLength"
          :maxlength="input.maxLength"
          :name="input.name"
          :required="input.isRequired"
          :type="input.type"
          :class="input.inputClass"
          :id="input.id"
          :placeholder="input.placeholder"
        />
      </div>
      <br />
      <div class="form-group text-center">
        <button type="submit" class="btn btn-info">登入</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  max-width: 600px;
}
img {
  max-width: 20px;
}
img:hover {
  transform: scale(1.1);
  cursor: pointer;
  background-color: rgba(209, 209, 209, 0);
}
.qr-code {
  position: fixed;
  border-style: solid;
  padding: 8px;
  background-color: antiquewhite;
  border-width: 1px;
  border-radius: 10px;
}
</style>
