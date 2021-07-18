<template>
  <div>
    <h1 class="font-semibold text-3xl">Register</h1>
    <form class="mt-4 px-6 sm:px-12 md:px-28 lg:px-80 2xl:px-96">
      <div class="flex flex-col text-left">
        <label for="name">Name</label>
        <input type="text" model="name" id="name" class="mt-3 bg-gray-100 py-1 rounded px-1">
      </div>
      <div class="mt-4 flex flex-col text-left">
        <label for="email">Email</label>
        <input type="email" model="email" id="email" class="mt-3 bg-gray-100 py-1 rounded px-1">
      </div>
      <div class="mt-4 flex flex-col text-left">
        <label for="password">Password</label>
        <input type="password" model="password" id="password" class="mt-3 bg-gray-100 py-1 rounded px-1">
      </div>
      <div class="mt-4 flex flex-col text-left">
        <label for="password_confirmation">Password Confirmation</label>
        <input type="password" model="password_confirmation" id="password_confirmation" class="mt-3 bg-gray-100 py-1 rounded px-1">
      </div>
      <div class="mt-6 flex flex-col text-left">
        <button type="submit" class="px-3 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>