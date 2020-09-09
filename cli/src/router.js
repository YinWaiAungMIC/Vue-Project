import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Testing from '@/views/Testing.vue'
import Exercise from '@/views/Exercise.vue'
import Home from '@/views/HelloWorld.vue'
import Detail from '@/views/Detail.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import OrderList from '@/views/OrderList.vue'
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
		name:'order',
		component:OrderList
	}
	],
	mode:'history' //abstract or history
});
export default router