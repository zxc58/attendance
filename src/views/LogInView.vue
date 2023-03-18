<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import { storeToRefs } from 'pinia'
import to from 'await-to-js'
import qricon from '../assets/qricon.png'
import store from '../stores'
import api from '../utils/api'
import { flash } from '../utils/helpers/flashHelper'
import { storeJWT, removeTokens } from '../utils/helpers/jwtHelper'
import { loginFormInputs } from '../assets/form/inputs'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT ?? 400)
const { useUserStore, useLocationStore } = store
const qr = ref('')
const submitButtonRef = ref()
const [userStore, locationStore, router] = [
  useUserStore(),
  useLocationStore(),
  useRouter(),
]
const { getLocation, distance } = storeToRefs(locationStore)

async function login(e) {
  submitButtonRef.value.disabled = true
  const inputs = e.target.querySelectorAll('input')
  const data = {}
  inputs.forEach((element) => {
    data[element.name] = element.value
  })
  const [error0, response] = await to(api.user.login(data))
  submitButtonRef.value.disabled = false
  if (error0) {
    switch (error0.response.data.message) {
      case 'Wrong times over 5':
        return flash('danger', '帳號已被鎖定')
      case 'Account do not exist':
      case 'Password wrong':
        return flash('danger', '帳號或密碼錯誤')
      default:
        return flash()
    }
  }
  storeJWT(response.data.data)
  userStore.formatAndStoreApiData(
    response.data.data.user,
    response.data.data.attendances
  )
  router.push('/')
}

const showQr = async () => {
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
      <div class="form-group" v-for="input in loginFormInputs" :key="input.key">
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
