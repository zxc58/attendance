<script setup>
import { storeToRefs } from 'pinia'
import store from '../stores'
import to from 'await-to-js'
import api from '../utils/api'
import { flash } from '../utils/helpers/flashHelper'

const { useUserStore } = store
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const setting = async (e) => {
  const data = {}
  const inputs = e.target.querySelectorAll('input')
  inputs.forEach((element) => {
    if (element.value) {
      data[element.name] = element.value
    }
  })
  if (data.password !== data.ensurePassword) {
    flash('danger', '請確定2組新密碼相同')
    return
  }
  const [, newUserData] = to(await api.user.updatePersonalData(data))
  if (!newUserData) return flash()
  userStore.setUser(newUserData)
  inputs.forEach((element) => {
    if (element.name === 'password' || element.name === 'ensurePassword') {
      element.value = ''
    }
  })
  flash('success', '成功更新')
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
          :value="user.phone"
          class="form-control"
          name="phone"
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
          :value="user.email"
          class="form-control"
          name="email"
          type="email"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder="新Email"
        />
      </div>
      <div class="form-group">
        <label for="passwordInput" class="form-label mt-4">新密碼</label>
        <input
          minlength="7"
          maxlength="14"
          name="password"
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
          minlength="7"
          maxlength="14"
          name="ensurePassword"
          type="password"
          class="form-control"
          id="ensurePasswordInput"
          placeholder="確定密碼"
        />
      </div>
      <br />
      <div class="form-group text-center">
        <button type="submit" class="btn btn-lg btn-info">套用</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  max-width: 600px;
}
</style>
