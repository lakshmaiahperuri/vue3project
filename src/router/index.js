import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Booking from '../views/Bookings.vue'
import Form from '../components/BookingForm.vue'
import BookingList from '../components/BookingList.vue'
import Menu from '../views/Menu.vue'

const routes = [
  {
    path: '/bookings',
    name: 'booking',
    component: Booking
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/bookingList',
    name: 'bookingList',
    component: BookingList
  },
  {
    path: '/bookingForm',
    name: 'bookingForm',
    component: Form
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
