<template>
    <div class="property">
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
        <AppSplit></AppSplit>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppFooter from "@/components/footer/Footer"
    import AppSplit from "@/components/base/Split"
    export default {
        name: "Property",
        components:{
            AppSplit,
            AppFooter
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
                toIcon:require("img/to.png")
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
   .property
      .header
          width: 100%
          height: 216px
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

     
               



</style>