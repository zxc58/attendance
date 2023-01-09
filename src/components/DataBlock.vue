<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useAttendanceStore } from '../stores/attendance'
import { storeToRefs } from 'pinia'
const [userStore, attendanceStore] = [useUserStore(), useAttendanceStore()]
const { userAvatar, userName } = storeToRefs(userStore)
const { formatPunchIn, formatPunchOut } = storeToRefs(attendanceStore)
const avatar = ref(null)

// const afterChange = async () => {
//   try {
//   } catch (err) {
//     console.error(err)
//     flash({ variant: 'danger', message: 'update avatar unknown error' })
//   }
// }
</script>

<template>
  <div class="col-md text-center">
    <img
      :src="userAvatar"
      class="img-fluid rounded-circle img-thumbnail d-over-bp"
      alt="Avatar"
    /><br />
    <input
      type="file"
      name="avatar"
      ref="avatar"
      class="d-none"
      @change="afterChange"
    />
    <p class="display-6 mt-0 d-over-bp">{{ userName }}</p>
    <ul class="my-0 fw-bold fs-4">
      <li class="text-success">上班時間: {{ formatPunchIn }}</li>
      <li class="text-danger">下班時間: {{ formatPunchOut }}</li>
    </ul>
  </div>
</template>
<style scoped>
img {
  max-height: 300px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  ul {
    padding-left: 0px;
    list-style-type: none;
  }
  li {
    display: inline-block;
    width: 50%;
  }
}

@media screen and (min-width: 768px) {
  ul {
    list-style-type: none;
  }
  li {
    text-align: left;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
