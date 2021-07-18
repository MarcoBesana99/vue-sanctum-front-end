<template>
  <div>
    <h1 class="font-semibold text-3xl">Register</h1>
    <form
      @submit.prevent="register"
      class="mt-4 px-6 sm:px-12 md:px-28 lg:px-80 2xl:px-96"
    >
      <div class="flex flex-col text-left">
        <label for="name">Name</label>
        <input
          type="text"
          v-model="form.name"
          id="name"
          class="mt-3 bg-gray-100 py-1 rounded px-1"
        />
        <span class="mt-3 text-red-500" v-if="errors.name">{{
          errors.name[0]
        }}</span>
      </div>
      <div class="mt-4 flex flex-col text-left">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="form.email"
          id="email"
          class="mt-3 bg-gray-100 py-1 rounded px-1"
        />
        <span class="mt-3 text-red-500" v-if="errors.email">{{
          errors.email[0]
        }}</span>
      </div>
      <div class="mt-4 flex flex-col text-left">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="form.password"
          id="password"
          class="mt-3 bg-gray-100 py-1 rounded px-1"
        />
        <span class="mt-3 text-red-500" v-if="errors.password">{{
          errors.password[0]
        }}</span>
      </div>
      <div class="mt-4 flex flex-col text-left">
        <label for="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          v-model="form.password_confirmation"
          id="password_confirmation"
          class="mt-3 bg-gray-100 py-1 rounded px-1"
        />
        <span class="mt-3 text-red-500" v-if="errors.password_confirmation">{{
          errors.password_confirmation[0]
        }}</span>
      </div>
      <div class="mt-6 flex flex-col text-left">
        <button
          type="submit"
          class="px-3 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import User from "../apis/User";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  methods: {
    register() {
      User.register(this.form)
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
</style>