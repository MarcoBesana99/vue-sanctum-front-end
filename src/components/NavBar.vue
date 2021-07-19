<template>
  <div id="nav">
    <router-link class="mr-4" v-if="getAuthenticated()" to="/">Home</router-link>
    <router-link class="mr-4" v-if="getAuthenticated() == false" to="/register">Register</router-link>
    <router-link class="mr-4" v-if="getAuthenticated() == false" to="/login">Login</router-link>
    <a v-if="getAuthenticated()" href="#" @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
import User from "../apis/User";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapGetters({
      getAuthenticated: "auth/authenticated",
    }),
    logout() {
      User.logout().then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>
