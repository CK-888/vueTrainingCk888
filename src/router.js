import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/views/Signin'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/',
			name: 'helloworld',
			component: HelloWorld
		},
		{
			path: '/signin',
			name: 'signin',
			component: Signin
		},
	]
})