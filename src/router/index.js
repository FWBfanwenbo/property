import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Property from '@/components/property/Property'
import Telephone from '@/components/phone/Telephone'
import Neighborhood from '@/components/neighborhood/Neighborhood'
import MyMessage from '@/components/myMessage/MyMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
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
