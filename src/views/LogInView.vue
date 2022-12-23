<script setup>
import router from '../router/index'
import axios from 'axios'
import { useUserStore } from '../stores/user'
import { useLocationStore } from '../stores/location'
import { ref } from 'vue'
import { login } from '../assets/api'
import { storeToRefs } from 'pinia'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT)

const [userStore, locationStore] = [useUserStore(), useLocationStore()]
const { latitude, longitude, accuracy, isLowAccuracy, distance } =
  storeToRefs(locationStore)
const notice = ref({
  class: 'my-1 invisible',
  text: 'default',
})
const inputs = [
  {
    key: 'accountDiv',
    id: 'accountInput',
    label: 'Account',
    name: 'account',
    minLength: 7,
    maxLength: 14,
    isRequired: true,
    type: 'text',
    labelClass: 'form-label mt-4',
    inputClass: 'form-control',
    placeholder: 'Enter account,length 7~14',
  },
  {
    key: 'passwordDiv',
    id: 'passwordInput',
    label: 'Password',
    name: 'password',
    minLength: 7,
    maxLength: 14,
    isRequired: true,
    type: 'password',
    labelClass: 'form-label mt-4',
    inputClass: 'form-control',
    placeholder: 'Enter account,length 7~14',
  },
]
const submit = async (e) => {
  try {
    if (distance.value >= distanceLimit) {
      return alert('請親自至公司打卡')
    }
    const inputs = e.target.querySelectorAll('input')
    const data = {
      latitude: latitude.value,
      longitude: longitude.value,
    }
    inputs.forEach((element) => {
      data[element.name] = element.value
    })
    const res = await login(data)
    if (res.token) {
      localStorage.setItem('token', res.token)
      await userStore.setUser()
      return router.push('/')
    } else {
      switch (res.message) {
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
    alert('發生未知錯誤，請重新整理')
    console.error(err)
  }
}
</script>

<template>
  <form class="container" @submit.prevent="submit">
    <fieldset>
      <legend class="text-center display-5">Log in</legend>
      <div class="form-group" v-for="input in inputs" :key="input.key">
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
