<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
// import to from 'await-to-js'
import store from '../stores'
import { flash } from '../utils/helpers/flashHelper'
import instance from '../utils/api/instance'
const { useUserStore, useAttendanceStore } = store
const [userStore, attendanceStore] = [useUserStore(), useAttendanceStore()]
const { userAvatar, userName } = storeToRefs(userStore)
const { formatPunchIn, formatPunchOut } = storeToRefs(attendanceStore)
const avatarInput = ref(null)
const clickImage = () => avatarInput.value.click()

const afterChange = async () => {
  try {
    var formData = new FormData()
    var imagefile = avatarInput.value
    formData.append('image', imagefile.files[0])
    const userId = localStorage.getItem('userId')
    const { avatar } = await instance.post(
      `/employees/${userId}/avatar`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    userStore.setAvatar(avatar)
    flash('success', '成功更新')
  } catch (err) {
    flash()
  }
}
</script>

<template>
  <div class="col-md text-center">
    <img
      :src="userAvatar"
      class="img-fluid rounded-circle img-thumbnail d-over-bp"
      alt="Avatar"
      @click="clickImage"
    /><br />
    <input
      type="file"
      name="avatar"
      ref="avatarInput"
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
  max-width: 300px;
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
