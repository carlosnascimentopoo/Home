
import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Cadastro from '../views/CadastroView.vue'
import RecuperarSenha from '../views/RecuperarSenha.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/recuperar-senha',
      name: 'recuperar-senha',
      component: RecuperarSenha
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
