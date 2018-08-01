import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Property from '@/components/property/Property'
import Telephone from '@/components/phone/Telephone'
import Neighborhood from '@/components/neighborhood/Neighborhood'
import MyMessage from '@/components/myMessage/MyMessage'
import Repair from "@/components/repair/Repair"
import Pay from "@/components/pay/Pay"
import TradingArea from "@/components/trading-area/TradingArea"
import Visitor from '@/components/visitor/Visitor'
import PayDetail from "@/components/pay/PayDetail"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      component: Home,
      children:[{
          path:'repair',
          component:Repair
      },{
          path:'pay',
          component:Pay,
          children:[{
              path:':id',
              component:PayDetail
          }]
      },{
          path:'tradingarea',
          component:TradingArea
      },{
          path:'visitor',
          component:Visitor
      }]
    },
      {
        path:"/property",
        component: Property
      },
      {
          path:"/telephone",
          component: Telephone
      },
      {
          path:"/neighborhood",
          component: Neighborhood
      },
      {
          path:"/myMessage",
          component: MyMessage
      }
  ]
})
