import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import classification from '@/components/classification/classification'
import shoppingcart from '@/components/shoppingcart/shoppingcart'
import information from '@/components/information/information'
import personal_center from '@/components/personal_center/personal_center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/home',
    	name:'Home',
    	component:Home
    },{
    	path:'/classification',
    	name:'classification',
    	component:classification
    },{
    	path:'/shoppingcart',
    	name:'shoppingcart',
    	component:shoppingcart
    },{
    	path:'/information',
    	name:'information',
    	component:information
    },{
    	path:'/personal_center',
    	name:'personal_center',
    	component:personal_center
    }
  ]
})
