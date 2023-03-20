<script setup>
import { ref, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import { storeToRefs } from 'pinia'
import to from 'await-to-js'
import qricon from '../assets/qricon.png'
import store from '../stores'
import api from '../utils/api'
import { flash } from '../utils/helpers/flashHelper'
import { storeJWT } from '../utils/helpers/jwtHelper'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT ?? 400)
const formInputsRef = reactive({ account: '', password: '' })
const { useUserStore, useLocationStore } = store
const qr = ref('')
const submitButtonRef = ref()
const [userStore, locationStore, router] = [
  useUserStore(),
  useLocationStore(),
  useRouter(),
]
const { getLocation, distance } = storeToRefs(locationStore)

async function login() {
  submitButtonRef.value.disabled = true
  const formInputs = toRaw(formInputsRef)
  const [error, data] = await to(api.user.login(formInputs))
  submitButtonRef.value.disabled = false
  if (error) {
    switch (error.response.data.message) {
      case 'Wrong times over 5':
        return flash('danger', '帳號已被鎖定')
      case 'Account do not exist':
      case 'Password wrong':
        return flash('danger', '帳號或密碼錯誤')
      default:
        return flash()
    }
  }
  storeJWT(data)
  userStore.formatAndStoreApiData(data.user, data.attendances)
  router.push('/')
}

async function showQr() {
  if (!(distance.value <= distanceLimit))
    return flash('warning', '請親自至公司操作')
  const [, { punchQrId }] = await to(api.user.getQrId(getLocation.value))
  if (!punchQrId) return
  const qrURL = `${location.protocol}//${location.host}/attendance/qrcode?punchQrId=${punchQrId}`
  qr.value = qrURL
  window.addEventListener(
    'click',
    () => {
      qr.value = ''
    },
    { once: true, capture: true }
  )
}
</script>

<template>
  <form ref="formRef" class="container-md" @submit.prevent="login">
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
      <div class="form-group">
        <label for="accountInput" class="form-label mt-4">帳號</label>
        <input
          v-model="formInputsRef.account"
          id="accountInput"
          class="form-control"
          type="text"
          maxlength="14"
          minlength="5"
          placeholder="5~14碼帳號"
          required
        />
      </div>
      <div class="form-group">
        <label for="passwordInput" class="form-label mt-4">密碼</label>
        <input
          v-model="formInputsRef.password"
          id="passwordInput"
          class="form-control"
          type="password"
          maxlength="14"
          minlength="7"
          placeholder="7~14碼密碼"
          required
        />
      </div>
      <div class="mt-1 form-group text-center">
        <button ref="submitButtonRef" type="submit" class="btn btn-info">
          登入
        </button>
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
