import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Goods from '@/components/Goods'
import My from '@/components/My'

//二级路由
import Recom from '@/components/Recom'
import Baby from '@/components/Baby'
import Shoe from '@/components/Shoe'
import Food from '@/components/Food'
import Code from '@/components/Code'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/goods',
      name:'Goods',
      component:Goods,
      children:[
        {
          path:'recom',
          component:Recom
        },
        {
          path:'baby',
          component:Baby
        },
        {
          path:'shoe',
          component:Shoe
        },
        {
          path:'food',
          component:Food
        },
        {
          path:'code',
          component:Code
        }
      ]
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/',
      redirect:'/goods'
    }
  ]
})
