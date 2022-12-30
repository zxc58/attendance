<script setup>
import { putPersonalData } from '../assets/api'
import { useUserStore } from '../stores/user'
import { useLocationStore } from '../stores/location'
import { storeToRefs } from 'pinia'
import { flash } from '../assets/flash'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT)
const [userStore, locationStore] = [useUserStore(), useLocationStore()]
const { userId } = storeToRefs(userStore)
const { distance, getLocation } = storeToRefs(locationStore)
const setting = async (e) => {
  try {
    if (distance.value >= distanceLimit) {
      return flash({ variant: 'warning', message: '請親自至公司操作' })
    }
    const data = {
      location: getLocation.value,
    }
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
    const newUserData = await putPersonalData({ data, id: userId.value })
    userStore.setUser(newUserData)
    inputs.forEach((e) => (e.value = ''))
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
        <label for="passwordInput" class="form-label mt-0">設定新密碼</label>
        <input
          minlength="7"
          maxlength="14"
          name="password"
          required
          type="password"
          class="form-control"
          id="passwordInput"
          aria-describedby="passwordHelp"
          placeholder="新密碼"
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
          required
          type="password"
          class="form-control"
          id="ensurePasswordInput"
          placeholder="確定密碼"
        />
      </div>
      <br />
      <div class="form-group text-center">
        <button
          type="submit"
          :class="
            distance <= 400 ? 'btn btn-info' : 'btn btn-secondary disabled'
          "
        >
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
