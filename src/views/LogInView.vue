<script setup>
import router from '../router/index'
import axios from 'axios'
import { useUserStore } from '../stores/user'
import { ref } from 'vue'
const userStore = useUserStore()
const { setUser } = userStore
const notice = ref({
  class: 'my-1 invisible',
  text: 'default',
})
const login = async (e) => {
  try {
    const inputs = e.target.querySelectorAll('input')
    const data = {}
    inputs.forEach((element) => {
      data[element.name] = element.value
    })
    const response = await axios.post(`http://localhost:3000/api/logIn`, data)
    if (response?.data?.token) {
      localStorage.setItem('token', response.data.token)
      setUser()
      return router.push('/')
    } else if (response?.data?.message) {
      switch (response.data.message) {
        case 'Wrong times over 5':
          notice.value = {
            class: 'my-1 fs-5 text-danger',
            text: '帳號鎖定',
          }
          break
        default:
          notice.value = {
            class: 'my-1 fs-5 text-danger',
            text: '帳號或密碼錯誤',
          }
      }
    }
  } catch (err) {
    alert('發生未知錯誤')
  }
}
</script>

<template>
  <form class="container" @submit.prevent="login">
    <fieldset>
      <legend class="text-center fs-1">Log In</legend>
      <div class="form-group">
        <label for="accountInput" class="form-label mt-4">Account</label>
        <input
          minlength="7"
          maxlength="14"
          name="account"
          required
          type="text"
          class="form-control"
          id="accountInput"
          aria-describedby="emailHelp"
          placeholder="Account"
        />
      </div>
      <div class="form-group">
        <label for="passwordInput" class="form-label mt-4">Password</label>
        <input
          minlength="7"
          maxlength="14"
          name="password"
          required
          type="password"
          class="form-control"
          id="passwordInput"
          placeholder="Password"
        />
      </div>
      <br />
      <div class="form-group text-center">
        <p :class="notice.class">{{ notice.text }}</p>
        <button type="submit" class="btn btn-primary">Log in</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  max-width: 600px;
}
</style>
