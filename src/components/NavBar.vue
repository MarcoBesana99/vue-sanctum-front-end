<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <a href="#" @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
import User from "../apis/User";

export default {
  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("auth");
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>
