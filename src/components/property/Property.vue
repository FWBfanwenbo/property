<template>
    <div class="property">
        <AppScroll style="height: 650px;overflow: hidden;">
            <div>
                <div class="header">
                    <img :src="banner" alt="" width="100%" height="215">
                </div>
                <AppSplit></AppSplit>
                <div class="contact">
                    <div class="contact-left">
                <span class="contact-icon">
                     <img :src="helpoImg" alt="" width="30" height="30">
                </span>
                        <div class="contact-info">
                            <h1 class="h1">联系物业</h1>
                            <span class="help">遇到麻烦事?找找物业吧</span>
                        </div>
                    </div>
                    <span class="goto iconfont icon-qianjin"></span>
                </div>
                <AppSplit></AppSplit>
                <div class="img-column">
                    <ul class="img-box">
                        <li class="img-list" v-for="list in imgColumn">
                    <span class="img">
                        <img :src="list.imgUrl" alt="" width="120" height="120">
                    </span>
                            <div class="column-bottom">
                                <span class="name">{{list.name}}</span>
                                <div class="type">
                                    <div class="tyope-right">
                                        <span class="text">{{list.type}}</span>
                                        <span class="to-icon">
                                    <img :src="toIcon" alt="" width="10">
                                </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="page-column">
                    <ul class="box">
                        <router-link tag="li" to="/property/vote" class="box-list">
                            <span class="box-text">园区服务</span>
                            <span class="box-icon">
                         <img :src="img1" alt="" width="88" height="66">
                     </span>
                        </router-link>
                        <router-link tag="li" to="/property/vote" class="box-list">
                            <span class="box-text">物品放行</span>
                            <span class="box-icon">
                         <img :src="img2" alt="" width="88" height="66">
                     </span>
                        </router-link>
                        <router-link tag="li" to="/property/vote" class="box-list">
                            <span class="box-text">大众选票</span>
                            <span class="box-icon">
                         <img :src="img2" alt="" width="88" height="66">
                     </span>
                        </router-link>
                    </ul>
                </div>
            </div>
        </AppScroll>
        <AppFooter></AppFooter>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import AppFooter from "@/components/footer/Footer"
    import AppSplit from "@/components/base/Split"
    import AppScroll from "@/components/base/Scroll"
    export default {
        name: "Property",
        components:{
            AppSplit,
            AppFooter,
            AppScroll
        },
        data(){
            return {
                banner:require("img/banner.png"),
                helpoImg:require("img/help.png"),
                imgColumn:[{
                    imgUrl:require("img/img_01.png"),
                    name:"绿竹翁",
                    type:"花匠"
                },{
                    imgUrl:require("img/img_02.png"),
                    name:"慕容无敌",
                    type:"保安"
                },{
                    imgUrl:require("img/img_03.png"),
                    name:"黄珊",
                    type:"客服"
                }],
                toIcon:require("img/to.png"),
                img1:require("img/box_02.png"),
                img2:require("img/box_02.png"),
                img3:require("img/box_03.png")
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
   .property
      .header
          width: 100%
          height: 216px
          background: #f5f5f5
      .contact
          width: 100%
          height: 90px
          display: flex
          padding-left: 24px
          box-sizing: border-box
          justify-content:space-between
          align-items: center
          .contact-left
              width: 60%
              display: flex
              justify-content:space-between
              align-items: center
             .contact-icon
                 width: 30px
                 height: 30px
             .contact-info
                 width: 80%
                 height: 45px
                 .h1
                     font-size: 16px
                     height: 25px
                 .help
                     height: 20px
                     font-size: 14px
                     color: #646464
          .goto
              width: 24px
              height: 24px
              font-size: 18px
              color: #ACACAC

      .img-column
          background: #F3F3F5
         .img-box
            width: 100%
            height: 163px
            padding-left: 12px
            padding-right: -4px
            box-sizing: border-box
            display: flex
            justify-content: space-around
            .img-list
               width: 120px
               background: #fff
               overflow: hidden
               height: 100%
               border-radius:3px
               box-shadow:1px 4px 5px -1px rgba(0,0,0,0.1)
               &:last-child
                   width: 100px
               .img
                  width: 120px
                  height: 120px
            .column-bottom
                width: 100%
                height: 15px
                margin-top: 6px
                font-size: 14px
                color: #000
                text-align: left
                line-height: 15px
                padding: 0 8px
                .name
                    font-size: 13px
            .type
                width: 100%
                height: 16px
                text-align: right
                .tyope-right
                    width: 47%
                    box-sizing: border-box
                    padding-right: 12px
                    float: right
                    display: flex
                    justify-content: space-around
                    align-items: center
                    .text
                        font-size: 12px
                        color: #535353
                        line-height: 16px
                    .to-icon
                        width: 10px
                        height: 10px

     
               

      .page-column
          width: 100%
          padding: 12px
          background: #f5f5f5
          box-sizing: border-box
          .box
             .box-list
                 width: 100%
                 height: 100px
                 border-radius :5px
                 box-shadow:-5px 0px -1px -3px rgba(0,0,0,0.1)
                 background: #fff
                 padding:0 30px
                 box-sizing: border-box
                 margin-bottom: 10px
                 display: flex
                 justify-content: space-between
                 align-items: center
                 .box-text
                     width: 25%
                     height: 30px
                     font-size: 14px
                     font-weight:600
                     line-height: 30px
                 .box-icon
                     width: 88px
                     height: 66px

</style>