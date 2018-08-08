<template>
    <div class="news-box">
        <ul class="news-wrapper">
            <li class="news-list" v-for="list in newsList">
                <a href="" class="list">
                   <div class="inner">
                       <div class="left-inner">
                           <span class="time">{{list.time}}</span>
                           <p class="text">{{list.Ptext}}</p>
                       </div>
                       <span class="right-inner">
                           <img :src="list.textImg" alt="" width="70" height="65">
                       </span>
                   </div>
                    <div class="bottom">
                        <span class="shequ"># 社区活动 #</span>
                        <div class="right">
                            <div class="read-num">
                                <span class="img">
                                    <img :src="list.readImg" alt="" width="22" height="12">
                                </span>
                                <span>{{list.readNum}}</span>
                            </div>
                            <div class="like">
                                <span class="img">
                                    <img :src="list.likeImg" alt="" width="14" height="13">
                                </span>
                                <span>{{list.likeNum}}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsBox",
        data(){
            return {
                newsList:[
                    {
                        id:"001",
                        Ptext:"如果相恋3年的女友突然告诉你他是变性人你会怎么办",
                        time:"08-06",
                        readNum:14,
                        readImg:require("img/read.png"),
                        likeNum:75,
                        likeImg:require("img/like.png"),
                        textImg:require("img/text-img.png")
                    },{
                        id:"002",
                        Ptext:"如果相恋3年的女友突然告诉你他是变性人你会怎么办",
                        time:"08-06",
                        readNum:14,
                        readImg:require("img/read.png"),
                        likeNum:75,
                        likeImg:require("img/like.png"),
                        textImg:require("img/text-img.png")
                    }
                ]
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .news-box
      width: 100%
      margin-bottom: 50px
      .news-wrapper
        .news-list
          height: 110px
          padding: 16px 16px 0 16px
          border-bottom:1px solid #e7e9eb;
          .list
            display: block
            .inner
              height: 74px
              .left-inner
                float: left
                width: 250px
                .time
                  width: 100%
                  height: 22px
                  line-height: 22px
                  text-align: left
                  font-size: 12px
                .text
                  font-size: 14px
                  line-height: 1.5
                  width: 250px
                  color: #000
              .right-inner
                float: left
                width: 70px
                height: 65px
                margin-left: 21px
                background: #000
            .bottom
              width: 100%
              box-sizing:border-box
              height: 22px
              .shequ
                float: left
                width: 100px
                height: 22px
                line-height: 22px
                font-size: 16px
                color: #cf3d4e
                text-shadow: 0px 0px 1px #be3949,0 0 0 #000;
              .right
                width: 100px
                height: 22px
                line-height: 22px
                float: right
                display: flex
                justify-content:space-between
                align-items: center
                .read-num,.like
                  flex: 60px 40px
                  width: 45px
                  text-align: center
                  font-size: 14px

</style>