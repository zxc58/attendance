<script setup>
import { ref, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import store from '../stores'
import to from 'await-to-js'
import api from '../utils/api'
import { flash } from '../utils/helpers/flashHelper'
const userStore = store.useUserStore()
const router = useRouter()
const { user } = storeToRefs(userStore)
const formInputsRef = reactive({
  phone: user.value.phone,
  email: user.value.email,
  password: '',
  ensurePassword: '',
})
const submitButtonRef = ref()
async function setting() {
  submitButtonRef.value.disabled = true
  const userId = userStore.userId
  const data = toRaw(formInputsRef)
  if (data.password !== data.ensurePassword)
    return flash(('danger', '請確定2組新密碼相同'))
  if (!data.password) delete data.password
  delete data.ensurePassword
  const [, newUserData] = await to(api.user.updatePersonalData(userId, data))
  submitButtonRef.value.disabled = false
  if (!newUserData) return flash()
  userStore.formatAndStoreApiData(newUserData)
  flash('success', '成功更新')
  router.push('/')
}
</script>

<template>
  <form class="container" @submit.prevent="setting">
    <fieldset>
      <div class="text-center display-5">設定資料</div>
      <hr />
      <div class="form-group">
        <label for="phoneInput" class="form-label">新電話號碼</label>
        <input
          v-model="formInputsRef.phone"
          class="form-control"
          type="text"
          minlength="5"
          maxlength="20"
          id="phoneInput"
          aria-describedby="phoneHelp"
          placeholder="新號碼"
        />
      </div>
      <div class="form-group">
        <label for="emailInput" class="form-label mt-4">新Email</label>
        <input
          v-model="formInputsRef.email"
          class="form-control"
          type="email"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="新Email"
        />
      </div>
      <div class="form-group">
        <label for="passwordInput" class="form-label mt-4">新密碼</label>
        <input
          v-model="formInputsRef.password"
          minlength="7"
          maxlength="14"
          type="password"
          class="form-control"
          id="passwordInput"
          aria-describedby="passwordHelp"
          placeholder="新密碼 7~14"
        />
      </div>
      <div class="form-group">
        <label for="ensurePasswordInput" class="form-label mt-4"
          >確認密碼</label
        >
        <input
          v-model="formInputsRef.ensurePassword"
          minlength="7"
          maxlength="14"
          type="password"
          class="form-control"
          id="ensurePasswordInput"
          placeholder="確定密碼"
        />
      </div>
      <br />
      <div class="form-group text-center">
        <button ref="submitButtonRef" type="submit" class="btn btn-lg btn-info">
          套用
        </button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  max-width: 600px;
}
</style>
