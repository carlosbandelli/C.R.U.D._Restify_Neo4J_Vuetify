import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register-user.vue'
import Painel from '../views/Painel-admim.vue'
import Edit from '../views/Edit-user.vue'
import Delete from '../views/Delete-user.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register-user',
    component: Register
  },
  {
    path: '/',
    name: 'Painel-admim',
    component: Painel
  },
  {
    path: '/editarusuario/:id',
    name: 'Edit-user',
    component: Edit
  },
  {
    path: '/deletarusuario/:id',
    name: 'Delete-user',
    component: Delete
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
