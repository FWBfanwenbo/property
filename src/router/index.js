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
import Recommend from "@/components/trading-area/Recommend"
import Discount from "@/components/trading-area/Discount"
import Trading from "@/components/trading-area/Trading"
import Service from "@/components/trading-area/Service"
import Praise from "@/components/middle/Praise"
import Activity from "@/components/middle/Activity"
import Progress from "@/components/middle/activity/Progress"
import AlreadyEnd from "@/components/middle/activity/AlreadyEnd"
import ParticipateIn from "@/components/middle/activity/ParticipateIn"
import Share from '@/components/neighborhood/Share'
import ActiveCenter from '@/components/neighborhood/ActiveCenter'
import Business from '@/components/neighborhood/Business'
import Healthy from '@/components/neighborhood/Healthy'
import Teaching from '@/components/neighborhood/Teaching'
import DynamicDetail from "@/components/base/DynamicDetail"
import Vote from "@/components/property/Vote"
import VoteProgress from "@/components/property/vote/VoteProgress"
import VoteEnd from "@/components/property/vote/VoteEnd"
import VotePart from "@/components/property/vote/VotePart"
import VoteDetail from "@/components/property/vote/VoteDetail"

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
          redirect:"/home/tradingarea/trading",
          component:TradingArea,
          children:[{
              path:"recommend",
              component:Recommend
          },{
              path:"discount",
              component:Discount
          },{
              path:"trading",
              component:Trading
          },{
              path:"service",
              component:Service
          }]
      },{
          path:'visitor',
          component:Visitor
      },{
          path:'praise',
          component:Praise
      },{
          path:'activity',
          redirect:"/home/activity/participateIn",
          component:Activity,
          children:[{
              path:'progress',
              component:Progress
          },{
              path:'alreadyEnd',
              component:AlreadyEnd
          },{
              path:'participateIn',
              component:ParticipateIn
          }]
      }]
    },
      {
        path:"/property",
        component: Property,
        children:[{
            path:"vote",
            component: Vote,
            redirect:"/property/vote/votePart",
            children:[{
                path:"voteProgress",
                component: VoteProgress
            },{
                path:"voteEnd",
                component: VoteEnd
            },{
                path:"votePart",
                component: VotePart,
                children:[{
                    path:":id",
                    component: VoteDetail
                }]
            }]
        }]
      },
      {
          path:"/telephone",
          component: Telephone
      },
      {
          path:"/neighborhood",
          redirect:"/neighborhood/share",
          component: Neighborhood,
          children:[{
              path:"share",
              component: Share,
              children:[{
                  path:':id',
                  component:DynamicDetail
              }]
          },
          {
              path:"activeCenter",
              component: ActiveCenter
          },
          {
              path:"business",
              component: Business
          },
          {
              path:"healthy",
              component: Healthy
          },
          {
              path:"teaching",
              component: Teaching
          }]
      },
      {
          path:"/myMessage",
          component: MyMessage
      }
  ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
