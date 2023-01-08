<script setup>
import { updatePersonalData } from '../assets/api'
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'
import { flash } from '../assets/helpers/flashHelper'
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const setting = async (e) => {
  try {
    const data = {}
    const inputs = e.target.querySelectorAll('input')
    inputs.forEach((element) => {
      if (element.value) {
        data[element.name] = element.value
      }
    })
    if (data.password !== data.ensurePassword) {
      flash({ variant: 'danger', message: '請確定2組新密碼相同' })
      return
    }
    const newUserData = await updatePersonalData({ data })
    userStore.setUser(newUserData)
    inputs.forEach((element) => {
      if (element.value) {
        data[element.name] = element.value
      }
    })
    inputs.forEach((element) => {
      if (element.name === 'password' || element.name === 'ensurePassword') {
        element.value = ''
      }
    })
    flash({ variant: 'success', message: '成功更新' })
  } catch (err) {
    console.error(err)
    flash({ variant: 'danger', message: '發生未知錯誤，更新失敗' })
  }
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
