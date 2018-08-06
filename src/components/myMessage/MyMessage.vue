<template>
    <div class="my-message">
        <div class="main">
            <div class="header">
                <div class="info-box">
                    <div class="left">
                        <span class="photo">
                             <img class="photo-img" :src="infoList.photo" alt="">
                       </span>
                        <div class="info-content">
                            <div class="info-top">
                                <span class="nickname">{{infoList.nickname}}</span>
                                <span class="sex-icon">
                                    <img :src="infoList.sex" alt="" width="15" height="15">
                                </span>
                                <span class="type">{{infoList.type}}</span>
                            </div>
                            <div class="info-bottom">
                                <span class="floor">{{infoList.floor}}</span>
                            </div>
                        </div>
                    </div>
                    <span class="right">
                        <img :src="infoList.linkIcon" alt="" width="25" height="20">
                    </span>
                </div>
                <div class="event-column">
                    <div class="event-box">
                        <ul class="events">
                            <li class="event" v-for="list in eventList">
                            <span class="event-icon">
                                <img :src="list.eventIcon" alt="" width="18" height="18">
                            </span>
                                <span class="event-text">{{list.eventType}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="order">
                        <span class="order-text">全部订单</span>
                    </div>
                </div>
            </div>
            <div class="page-wrapper"  style="padding-bottom: 100px;">
                <div class="column-box">
                    <div class="column-tr" v-for="tr in pageList1" @click="selectPath(tr)">
                        <div class="tr-left">
                            <span class="tr-icon">
                                <img :src="tr.trIcon" alt="" width="21">
                            </span>
                            <span class="tr-text">{{tr.myType}}</span>
                        </div>
                        <span class="tr-right iconfont icon-qianjin"></span>
                    </div>
                </div>
                <div class="column-box">
                    <div class="column-tr" v-for="tr in pageList2" @click="selectPath(tr)">
                        <div class="tr-left">
                            <span class="tr-icon">
                                <img :src="tr.trIcon" alt="" width="21">
                            </span>
                            <span class="tr-text">{{tr.myType}}</span>
                        </div>
                        <span class="tr-right iconfont icon-qianjin"></span>
                    </div>
                </div>
                <div class="column-box">
                    <div class="column-tr" v-for="tr in pageList3" @click="selectPath(tr)">
                        <div class="tr-left">
                            <span class="tr-icon">
                                <img :src="tr.trIcon" alt="" width="21">
                            </span>
                            <span class="tr-text">{{tr.myType}}</span>
                        </div>
                        <span class="tr-right iconfont icon-qianjin"></span>
                    </div>
                </div>
            </div>
        </div>
        <AppFooter></AppFooter>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import AppFooter from "@/components/footer/Footer"
    export default {
        name: "MyMessage",
        components:{
            AppFooter
        },
        data(){
            return {
                infoList:{
                    photo:require("img/img_01.png"),
                    nickname:"天山童姥掌教",
                    sex:require("img/sex_women.png"),
                    floor:"Home:8-1-1002",
                    type:"业主",
                    linkIcon:require("img/a.png")
                },
                eventList:[
                    {
                        eventIcon:require("img/event_to.png"),
                        eventType:"待处理"
                    },
                    {
                        eventIcon:require("img/event_pro.png"),
                        eventType:"处理中"
                    },
                    {
                        eventIcon:require("img/event_to_money.png"),
                        eventType:"待付款"
                    },
                    {
                        eventIcon:require("img/event_complete.png"),
                        eventType:"已完成"
                    },
                    {
                        eventIcon:require("img/event_comment.png"),
                        eventType:"待评价"
                    }
                ],
                pageList1:[
                    {
                        trIcon:require("img/wallet.png"),
                        myType:"我的钱包",
                        toPath:"wallet"
                    },{
                        trIcon:require("img/my_pay.png"),
                        myType:"我的缴费",
                        toPath:"payMoney"
                    },{
                        trIcon:require("img/goods.png"),
                        myType:"我的物品",
                        toPath:"goods"
                    },{
                        trIcon:require("img/Interaction.png"),
                        myType:"我的互动",
                        toPath:"interaction"
                    }],
                pageList2:[
                    {
                        trIcon:require("img/village.png"),
                        myType:"我的小区",
                        toPath:"village"
                    },{
                        trIcon:require("img/number.png"),
                        myType:"我的成员",
                        toPath:"number"
                    },{
                        trIcon:require("img/visitor.png"),
                        myType:"我的访客",
                        toPath:"myVisitor"
                    }],
                pageList3:[
                    {
                        trIcon:require("img/set_up.png"),
                        myType:"我的设置",
                        toPath:"setUp"
                    }],
            }
        },
        methods:{
            selectPath(tr){
                this.$router.push({
                    path:`/myMessage/${tr.toPath}`
                })
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .my-message
        .main
           .header
               width: 100%
               height: 214px
               background: linear-gradient(#6F89FA, #738AF0);
               box-sizing: border-box
               padding: 15px
               position: relative
               .info-box
                   width: 100%
                   height: 67px
                   margin-top: 50px
                   display: flex
                   justify-content: space-between
                   align-items: center
                   .left
                       width: 75%
                       display: flex
                       justify-content: space-between
                       align-items: center
                       .photo
                           width: 67px
                           height: 67px
                           padding: 2px
                           border-radius :50%
                           background: #fff;
                           position: relative
                           .photo-img
                               width: 63px
                               height: 63px
                               border-radius :50%
                               overflow: hidden
                               position: absolute
                               left: 50%
                               top: 50%
                               transform: translate(-50%,-50%)
                       .info-content
                           width: 67%
                           height: 50px
                           .info-top
                               width: 90%
                               height: 25px
                               display: flex
                               justify-content: space-between
                               align-items: center
                               float: left
                               .nickname
                                   font-size: 16px
                                   color: #fff;
                                   font-weight: 800
                               .sex-icon
                                   width: 15px
                                   height: 15px
                               .type
                                   width: 36px
                                   height: 17px
                                   background: #DDBD5A
                                   font-size: 12px
                                   text-align: center
                                   line-height: 17px
                                   border-radius :3px
                           .info-bottom
                               width: 100%
                               height: 20px
                               float: left
                               .floor
                                   font-size: 14px
                                   color: #fff
                                   line-height: 25px
                   .right
                       width: 25px
                       height: 20px
               .event-column
                   width: 92%
                   height: 118px
                   padding: 0 12px
                   background: #fff
                   box-sizing: border-box
                   box-shadow :1px 1px 1px 3px rgba(0,0,0,0.02);
                   border-radius :5px
                   position: absolute
                   left: 50%
                   bottom: -42px
                   transform translate(-50%,12px)
                  .event-box
                     .events
                         width: 100%
                         height: 72px
                         border-bottom: 1px solid #E5E5E5;
                         display: flex
                         justify-content: space-between
                         align-items: center
                         .event
                             width: 18%
                             height: 70%
                             text-align: center
                             .event-icon
                                 width: 100%
                                 height: 18px
                                 display: block
                                 text-align: center
                             .event-text
                                 margin-top: 10px
                                 font-size: 14px
                                 display: block
                  .order
                      width: 100%
                      height: 20%
                      padding-top: 10px
                      box-sizing: border-box
                      .order-text
                          display: block
                          width: 30%
                          height: 100%
                          line-height: 100%
                          font-size: 14px
           .page-wrapper
               width: 100%
               padding-top: 50px
               background: #F3F4F8
               .column-box
                   padding: 15px 15px 0 15px
                   width: 100%
                   box-sizing: border-box
                  .column-tr
                      width: 100%
                      height: 50px
                      background: #fff
                      padding: 0 12px
                      box-sizing: border-box
                      border-bottom:1px solid #F2F2F2
                      border-top-left-radius:10px;
                      border-bottom-left-radius:10px;
                      &:hover
                         background: #eee
                      &:first-child
                         border-top-right-radius:10px;
                      &:last-child
                         border-bottom-right-radius:10px;
                         box-shadow :1px 1px 1px 3px rgba(0,0,0,0.02);
                      .tr-left
                          width: 26%
                          height: 100%
                          float: left
                          display: flex
                          justify-content: space-between
                          align-items: center
                          .tr-icon
                              width: 21px
                              height: 21px
                          .tr-text
                              font-size: 14px
                      .tr-right
                          float: right
                          font-size: 16px
                          line-height: 50px
                          color: #ADAFAE
</style>