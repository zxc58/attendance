<script setup>
import { putPersonalData } from '../assets/api'
import { useUserStore } from '../stores/user'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { userId } = storeToRefs(userStore)
const setting = async (e) => {
  try {
    const data = {}
    const inputs = e.target.querySelectorAll('input')
    inputs.forEach((element) => {
      data[element.name] = element.value
    })
    if (data.password !== data.ensurePassword) {
      return
    }
    const newUserData = await putPersonalData(data, userId)
    userStore.setUser(newUserData)
  } catch (err) {
    alert('更新失敗')
  }
}
</script>
<template>
  <form class="container" @submit.prevent="setting">
    <fieldset>
      <legend class="text-center fs-1">Setting</legend>
      <div class="form-group">
        <label for="passwordInput" class="form-label mt-4">New password</label>
        <input
          minlength="7"
          maxlength="14"
          name="password"
          required
          type="text"
          class="form-control"
          id="passwordInput"
          aria-describedby="passwordHelp"
          placeholder="Account"
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
          placeholder="ensure password"
        />
      </div>
      <br />
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Setting</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  max-width: 600px;
}
</style>
