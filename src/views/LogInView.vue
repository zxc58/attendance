<script setup>
import TopIndex from '../components/TopIndex.vue'
const signin = (e) => {
  const inputs = e.target.querySelectorAll('input')
  const data = {}
  inputs.forEach((element) => {
    data[element.name] = element.value
  })
  console.log(data)
}
</script>

<template>
  <TopIndex />
  <form class="container log-in-form" @submit.prevent="signin">
    <fieldset>
      <legend class="text-center fs-1">Log In</legend>
      <div class="form-group">
        <label for="accountInput" class="form-label mt-4">Account</label>
        <input
          maxlength="10"
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
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </fieldset>
  </form>
</template>

<style>
.log-in-form {
  max-width: 600px;
}
</style>
