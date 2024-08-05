import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import BasicView from '../views/BasicView.vue'
import SignUpView from '../views/SignUpView.vue'
import DeepView from '../views/DeepView.vue'
import DeepView2 from '../views/DeepView2.vue'
import Calculator01 from '../views/CalculatorView01.vue'
import Calculator02 from '../views/CalculatorView02.vue'
import Calculator03 from '../views/CalculatorView03.vue'
import Calculator04 from '../views/CalculatorView04.vue'
import MixView from '../views/MixView.vue'
import UserView from '../views/UserView.vue'
import MemberView from '../views/MemberView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/DeepView',
    name: 'DeepView',
    component: DeepView
  },
  {
    path: '/DeepView2',
    name: 'DeepView2',
    component: DeepView2
  },
  {
    path: '/CalculatorView01',
    name: 'CalculatorView01',
    component: Calculator01
  },
  {
    path: '/CalculatorView02',
    name: 'CalculatorView02',
    component: Calculator02
  },
  {
    path: '/CalculatorView03',
    name: 'CalculatorView03',
    component: Calculator03
  },
  {
    path: '/CalculatorView04',
    name: 'CalculatorView04',
    component: Calculator04
  },
  {
    path: '/MixView',
    name: 'MixView',
    component: MixView
  },
  {
    path: '/UserView',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/MemberView',
    name: 'MemberView',
    component: MemberView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
