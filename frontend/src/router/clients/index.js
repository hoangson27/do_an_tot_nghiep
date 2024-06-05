import { createRouter, createWebHistory } from 'vue-router'
import ShortLink from '@/views/clients/ShortLink.vue'
import CreateQR from '@/views/clients/CreateQR.vue'
import NFC from '@/views/clients/NFC.vue'
import Login from '@/views/clients/Login.vue'
import Register from '@/views/clients/Register.vue'
import Home from '@/views/clients/Home.vue'
import InfoPage from '@/components/clients/InfoPage.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, 
  },
  {
    path: "/short-link",
    name: "ShortLink",
    component: ShortLink, 
  },
  {
    path: "/create-qr",
    name: "CreateQR",
    component: CreateQR, 
  },
  {
    path: "/nfc",
    name: "NFC",
    component: NFC, 
  },
  {
    path: "/login",
    name: "Login",
    component: Login, 
  },
  {
    path: "/register",
    name: "Register",
    component: Register, 
  },
  {
    path: '/info/:encryptedLink',
    name: 'InfoPage',
    component: InfoPage,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
