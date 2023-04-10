<script setup>
import { ref, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import { storeToRefs } from 'pinia'
import to from 'await-to-js'
import qricon from '../assets/qricon.png'
import store from '../stores'
import api from '../utils/api'
import { storeJWT } from '../utils/helpers/jwtHelper'
const formModel = reactive({ account: '', password: '' })
const formRef = ref()
const formRules = reactive({
  account: [
    { required: true, message: 'Please input account', trigger: 'blur' },
    {
      min: 5,
      max: 14,
      message: 'Length should be 5 to 14',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    {
      min: 7,
      max: 14,
      message: 'Length should be 7 to 14',
      trigger: ['blur', 'change'],
    },
  ],
})
const { useUserStore, useLocationStore, useAlertStore } = store
const qr = ref()
const submitButtonRef = ref()
const [userStore, locationStore, alertStore, router] = [
  useUserStore(),
  useLocationStore(),
  useAlertStore(),
  useRouter(),
]
const { getLocation, isInRange } = storeToRefs(locationStore)

async function login() {
  submitButtonRef.value.disabled = true
  const [, result] = await to(formRef.value.validate())
  if (!result) return (submitButtonRef.value.disabled = false)
  const formInputs = toRaw(formModel)
  const [error, data] = await to(api.user.login(formInputs))
  submitButtonRef.value.disabled = false
  formModel.password = ''
  if (error) {
    switch (error.response.data.message) {
      case 'Wrong times over 5':
        return alertStore.show('帳號已被鎖定')
      case 'Account do not exist':
      case 'Password wrong':
        return alertStore.show('帳號或密碼錯誤')
      default:
        return alertStore.show()
    }
  }
  storeJWT(data)
  userStore.formatAndStoreApiData(data.employee, data.attendances)
  router.push('/')
}

async function showQr() {
  if (!isInRange) return
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
  <h2 style="text-align: center">Sign in</h2>

  <el-row style="justify-content: center">
    <el-form
      :rules="formRules"
      ref="formRef"
      :model="formModel"
      @submit.prevent="login"
      label-position="top"
      status-icon
    >
      <qrcode-vue
        v-if="qr"
        class="qr-code"
        :value="qr"
        :size="400"
        level="H"
      ></qrcode-vue>
      <img @click="showQr" :src="qricon" alt="qr" />
      <span :class="isInRange ? 'text-info' : 'text-secondary'" v-if="!qr">
        {{ isInRange ? '掃描打卡' : '請至公司取得qr code' }}
      </span>
      <el-form-item label="Account" prop="account">
        <el-input type="text" v-model="formModel.account" maxlength="14" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="formModel.password"
          type="password"
          show-password
          maxlength="14"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          round
          ref="submitButtonRef"
          native-type="submit"
          type="primary"
        >
          Sign in
        </el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<style scoped>
.el-alert {
  background-color: aqua;
}
.el-form {
  width: 600px;
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
  z-index: 1;
}
</style>
