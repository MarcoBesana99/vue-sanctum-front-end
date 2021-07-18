<template>
  <div class="home">
    <div v-if="user">
      <h2 class="font-semibold text-2xl">Hello, {{ user.name }}</h2>
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
