<script setup>
import router from '../router/index'
import { useUserStore } from '../stores/user'
import { useLocationStore } from '../stores/location'
import { login } from '../assets/api'
import { storeToRefs } from 'pinia'
import { flash } from '../assets/flash'
const distanceLimit = Number(import.meta.env.VITE_APP_DISTANCE_LIMIT)

const [userStore, locationStore] = [useUserStore(), useLocationStore()]
const { getLocation, distance } = storeToRefs(locationStore)

const inputs = [
  {
    key: 'accountDiv',
    id: 'accountInput',
    label: '帳號',
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
    label: '密碼',
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
      return flash({ variant: 'warning', message: '請親自至公司操作' })
    }
    const inputs = e.target.querySelectorAll('input')
    const data = {
      location: getLocation.value,
    }
    inputs.forEach((element) => {
      data[element.name] = element.value
    })
    const res = await login(data)
    if (res.token) {
      localStorage.setItem('token', res.token)
      await userStore.setUser()
      router.push('/')
    } else {
      switch (res.message) {
        case 'Wrong times over 5':
          flash({ variant: 'danger', message: '帳號已被鎖定' })
          break
        default:
          flash({ variant: 'danger', message: '帳號或密碼錯誤' })
      }
    }
  } catch (err) {
    flash({ variant: 'danger', message: '發生未知錯誤' })
    console.error(err)
  }
}
</script>

<template>
  <form class="container" @submit.prevent="submit">
    <fieldset>
      <legend class="text-center display-5">登入</legend>
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
        <button
          type="submit"
          :class="
            distance <= 400 ? 'btn btn-info' : 'btn btn-secondary disabled'
          "
        >
          登入
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
