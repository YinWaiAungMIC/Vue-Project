import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

import OrderShow from '@/views/OrderShow.vue'
import Testing from '@/views/Testing.vue'
import Exercise from '@/views/Exercise.vue'
import Home from '@/views/HelloWorld.vue'
import Detail from '@/views/Detail.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import OrderList from '@/views/OrderList.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
const router=new VueRouter({
	routes: [
	
	{
	path: '/testing',
	component:Testing
	},
	{
	path: '/exercise',
	component:Exercise
	},
	{
		path:'/detail/:id',
		name:'detail',
		component:Detail
	},
	{
		path:'/',
		component:Home
	},
	{
		path:'/cart',
		name:'cart',
		component:ShoppingCart
	},
	{
		path:'/orders',
		name:'order-list',
		component:OrderList
	},
	{
      path: '/order/:id',
      name: 'order-show',
      component: OrderShow,
      meta:{
        requiresAuth: true
      }
},
	{
		path:'/register',
		name:'register',
		component:Register
	},
	{
		path:'/login',
		name:'login',
		component:Login
	}


	],
	mode:'history' //abstract or history
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  }else{
    next()
  }
})

export default router