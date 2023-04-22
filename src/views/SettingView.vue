<script setup>
import { ref, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import store from '../stores'
import to from 'await-to-js'
import api from '../utils/api'
const [userStore, alertStore] = [store.useUserStore(), store.useAlertStore()]
const router = useRouter()
const { user } = storeToRefs(userStore)

const formModel = reactive({
  phone: user.value?.phone,
  email: user.value?.email,
  password: '',
  ensurePassword: '',
})
const formRef = ref()
const formRules = reactive({
  phone: [
    { required: true, message: 'Phone cannot be empty', trigger: 'blur' },
    {
      max: 20,
      message: 'Length should be 5 to 20',
      trigger: ['blur', 'change'],
    },
  ],
  email: [
    { required: true, message: 'Email cannot be empty', trigger: 'blur' },
    {
      max: 40,
      message: 'Length should be  40',
      trigger: ['blur', 'change'],
    },
  ],
  password: [
    {
      min: 7,
      max: 14,
      message: 'Length should be 7 to 14',
      trigger: ['blur', 'change'],
    },
  ],
  ensurePassword: [
    {
      validator(rule, value, callback) {
        return value !== formModel.password
          ? formModel.password
            ? callback(new Error('Please input password again'))
            : callback(new Error('Please type password first'))
          : callback()
      },
      trigger: ['blur', 'change'],
    },
  ],
})

const disableBtn = ref(false)
async function setting() {
  disableBtn.value = true
  const [, result] = await to(formRef.value.validate())
  if (!result) return (disableBtn.value = false)
  const userId = userStore.userId
  const data = toRaw(formModel)
  if (!data.password) delete data.password
  delete data.ensurePassword
  const [err, newUserData] = await to(api.user.updatePersonalData(userId, data))
  disableBtn.value = false
  if (err) return alertStore.show()
  userStore.formatAndStoreApiData(newUserData)
  router.push('/')
}
</script>

<template>
  <div style="font-size: 2rem; text-align: center">設定資料</div>
  <el-row style="justify-content: center">
    <el-form
      ref="formRef"
      @submit.prevent="setting"
      :model="formModel"
      :rules="formRules"
      status-icon
      label-position="top"
    >
      <el-form-item label="New phone" prop="phone">
        <el-input type="text" v-model="formModel.phone" maxlength="20" />
      </el-form-item>
      <el-form-item label="New email" prop="email">
        <el-input type="text" v-model="formModel.email" maxlength="40" />
      </el-form-item>
      <el-form-item label="New password" prop="password">
        <el-input
          type="password"
          show-password
          v-model="formModel.password"
          maxlength="14"
        />
      </el-form-item>
      <el-form-item label="Ensure new password" prop="ensurePassword">
        <el-input
          type="password"
          show-password
          v-model="formModel.ensurePassword"
          maxlength="14"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          round
          :disabled="disableBtn"
          type="primary"
          native-type="submit"
        >
          套用
        </el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<style scoped>
.el-form {
  width: 600px;
}
</style>
