<template>
  <div class="home">
    <h1 class="font-bold text-3xl">Homepage</h1>
    <div v-if="user">
      <h2 class="font-semibold text-2xl mt-6">Hello, {{ user.name }}</h2>
      <span>Hello, {{ user.email }}</span>
    </div>
  </div>
</template>

<script>
import User from "../apis/User";

export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    User.auth().then((response) => {
      this.user = response.data;
    });
  },
};
</script>
