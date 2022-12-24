<script setup>
import { ref } from 'vue'
import { putPersonalData } from '../assets/api'
import { useUserStore } from '../stores/user'
import { useLocationStore } from '../stores/location'
import { storeToRefs } from 'pinia'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT)
const [userStore, locationStore] = [useUserStore(), useLocationStore()]
const { userId } = storeToRefs(userStore)
const { distance, location } = storeToRefs(locationStore)

const notice = ref({
  class: 'my-1 invisible',
  text: 'default',
})
const setting = async (e) => {
  try {
    if (distance.value >= distanceLimit) {
      return alert('請親自至公司操作')
    }
    const data = {
      locationss: location.value,
    }
    const inputs = e.target.querySelectorAll('input')
    inputs.forEach((element) => {
      data[element.name] = element.value
    })
    if (data.password !== data.ensurePassword) {
      notice.value = {
        class: 'my-1 text-danger',
        text: '請確認2次密碼輸入相同',
      }
      return
    }
    const newUserData = await putPersonalData({ data, id: userId.value })
    notice.value = {
      class: 'my-1 text-success',
      text: '更新成功',
    }
    userStore.setUser(newUserData)
    inputs.forEach((e) => (e.value = ''))
  } catch (err) {
    alert('更新失敗')
  }
}
</script>

<template>
  <form class="container" @submit.prevent="setting">
    <fieldset>
      <legend class="text-center fs-1">Setting</legend>
      <hr />

      <div class="form-group">
        <label for="passwordInput" class="form-label mt-0">New password</label>
        <input
          minlength="7"
          maxlength="14"
          name="password"
          required
          type="password"
          class="form-control"
          id="passwordInput"
          aria-describedby="passwordHelp"
          placeholder="New password"
        />
      </div>
      <div class="form-group">
        <label for="ensurePasswordInput" class="form-label mt-4"
          >Ensure password</label
        >
        <input
          minlength="7"
          maxlength="14"
          name="ensurePassword"
          required
          type="password"
          class="form-control"
          id="ensurePasswordInput"
          placeholder="Ensure password"
        />
      </div>
      <div class="form-group text-center">
        <p :class="notice.class">{{ notice.text }}</p>
        <button type="submit" class="btn btn-info my-1">Setting</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  max-width: 600px;
}
</style>
