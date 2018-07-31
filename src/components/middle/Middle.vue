<template>
    <div class="middle">
        <div class="top">
            <div class="left">
                <span class="text">{{praise.text}}</span>
                <span class="img">
                     <img :src="praise.imgUrl" alt="" width="72" height="52">
                </span>
            </div>
            <div class="zhong">
                <div class="top">
                    <span class="text">{{activity.text}}</span>
                    <span class="img">
                        <img :src="activity.imgUrl" alt="" width="83" height="51">
                    </span>
                </div>
                <div class="bottom">
                    <span class="text">{{welfare.text}}</span>
                    <span class="img">
                        <img :src="welfare.imgUrl" alt="" width="83" height="51">
                    </span>
                </div>
            </div>
            <div class="right">
                <span class="text">{{notice.text}}</span>
                <span class="img">
                     <img :src="notice.imgUrl" alt="" width="72" height="52">
                </span>
            </div>
        </div>
        <div class="bottom-box">
            <img :src="participate" alt="" width="100%" height="85">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Middle",
        data(){
            return {
                praise:{
                    imgUrl:require("img/praise.jpg"),
                    text:"投诉表扬"
                },
                activity:{
                    imgUrl:require("img/activity.jpg"),
                    text:"金彩活动"
                },
                welfare:{
                    imgUrl:require("img/welfare.jpg"),
                    text:"金主福利"
                },
                notice:{
                    imgUrl:require("img/notice.jpg"),
                    text:"园区公告"
                },
                participate:require("img/participate.png")
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .middle
      width: 100%
      background: #faf8fb;
      box-sizing: border-box
      padding: 14px
      .top
        width: 100%
        height: 150px
        display: flex
        justify-content:space-around
        .left,.right
          flex: 77px 145px 77px
          width: 80px
          height: 150px
          background: #fff
          border-radius :16px
          box-shadow:0 1px 8px 0px rgba(0,0,0,0.1)
          position: relative
          .text
            width: 100%
            height: 30px
            display: block
            position: absolute
            left: 0
            top: 25px
            font-size: 14px
            text-align: center
            color: #897c6c
            text-shadow: 0px 0px 1px #af998e,0 0 0 #000;
          .img
            display:block
            height: 52px
            position: absolute
            left: 0
            bottom: 23px
            overflow: hidden
            padding-left: 4px
        .zhong
          flex:77px 145px 77px
          width: 144px
          height: 100%
          .top,.bottom
            width: 145px
            height: 68px
            background: #fff
            border-radius :16px
            box-shadow:0 1px 8px 0px rgba(0,0,0,0.1)
            position: relative
            .img
              display:block
              width: 83px
              height: 51px
              position: absolute
              right: 5px
              bottom: 8px
              overflow: hidden
            .text
              width: 57px
              height: 30px
              display: block
              position: absolute
              left: 7px
              top: 16px
              font-size: 14px
              text-align: center
              color: #897c6c
              z-index: 20
              text-shadow: 0px 0px 1px #af998e,0 0 0 #000;
          .top
            margin-bottom: 14px
      .bottom-box
        width: 100%
        height: 85px
        border-radius :16px
        overflow: hidden
        margin-top: 15px
        box-shadow:0 1px 8px 0px rgba(0,0,0,0.1)
</style>