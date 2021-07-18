import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import User from "../apis/User"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ((to, from, next) => {
      User.auth().then(res => {
        if (res.status === 401) {
          next({
            name: 'Login',
          })
        }
        else {
          next()
        }
      })
    }
    )
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
