<template>
  <div>
    <h1 class="font-semibold text-3xl">Login</h1>
    <form
      @submit.prevent="login"
      class="mt-4 px-6 sm:px-12 md:px-28 lg:px-80 2xl:px-96"
    >
      <div class="flex flex-col text-left">
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
      <div class="mt-6 flex flex-col text-left">
        <button
          type="submit"
          class="px-3 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
        >
          Login
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
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    login() {
      User.login(this.form)
        .then(() => {
          localStorage.setItem("auth", "true")
          this.$router.push({ name: "Home" });
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