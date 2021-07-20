import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ((to, from, next) => {
      if (!store.state.auth.authenticated) {
        next({
          name: 'Login',
        })
      }
      else {
        next()
      }
    }
    )
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: ((to, from, next) => {
      console.log(store.state.auth.authenticated)
      if (store.state.auth.authenticated) {
        next({
          name: 'Home',
        })
      }
      else {
        next()
      }
    }
    )
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: ((to, from, next) => {
      if (store.state.auth.authenticated) {
        next({
          name: 'Home',
        })
      }
      else {
        next()
      }
    }
    )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
