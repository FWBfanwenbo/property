<template>
    <transition name="slide">
        <div class="dynamic-detail">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">动态详情</span>
                    <span class="icon iconfont icon-gengduo"></span>
                </div>
            </div>
            <div class="view">
                <AppVueSection :list="list"></AppVueSection>
            </div>
            <div class="like-wrapper">
                <ul class="like-box">
                    <li class="like-list" v-for="list in likelist">
                        <span class="like-photo">
                            <img :src="list.likeImg" alt="">
                        </span>
                        <div class="like-info">
                            <div class="like-mid">
                                <span class="like-nickname">{{list.nick}}</span>
                                <span class="like-posi">{{list.posi}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bottom">
                <ul class="mid-posi">
                    <li class="like">
                        <div class="like-box">
                            <span class="icon iconfont icon-iconfontzhizuobiaozhun023148"></span>
                            <span class="num">点赞</span>
                        </div>
                    </li>
                    <li class="comment">
                        <div class="comment-box">
                            <span class="icon iconfont icon-pinglun"></span>
                            <span class="num">评论</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
    import AppVueSection from "@/components/neighborhood/VueSection"
    export default {
        name: "DynamicDetail",
        components:{
            AppVueSection
        },
        data(){
            return {
                list:{
                    id:1,
                    photo:require("img/activity_01.png"),
                    nickname:"天山童姥",
                    position:"金昌诚园",
                    time:"05-30 15:04",
                    text:"爱的传递,有你添翼,本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公益,献出...",
                    imgList:[{
                        url:require("img/activity_01.png")
                    }],
                    status:"进行中"
                },
                likelist:[
                    {
                        id:1,
                        likeImg:require("img/alipay.png"),
                        nick:"丐帮帮主",
                        posi:"金昌诚园"
                    },                    {
                        id:2,
                        likeImg:require("img/alipay.png"),
                        nick:"丐帮帮主",
                        posi:"金昌诚园"
                    },                    {
                        id:3,
                        likeImg:require("img/alipay.png"),
                        nick:"丐帮帮主",
                        posi:"金昌诚园"
                    },                    {
                        id:4,
                        likeImg:require("img/alipay.png"),
                        nick:"丐帮帮主",
                        posi:"金昌诚园"
                    },                    {
                        id:5,
                        likeImg:require("img/alipay.png"),
                        nick:"丐帮帮主",
                        posi:"金昌诚园"
                    },                    {
                        id:6,
                        likeImg:require("img/alipay.png"),
                        nick:"丐帮帮主",
                        posi:"金昌诚园"
                    },                    {
                        id:7,
                        likeImg:require("img/alipay.png"),
                        nick:"丐帮帮主",
                        posi:"金昌诚园"
                    },
                ]
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/neighborhood/share"})
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .dynamic-detail
        position:fixed
        left: 0
        top: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index:5000
        background: #fff
        &.slide-enter-active,&.slide-leave-active
            transition: all 0.5s
        &.slide-enter, &.slide-leave-to
            transform: translate3d(100%, 0, 0)
        .app-header
            position: fixed
            left: 0
            top: 0
            z-index: 2000
            background: #fff
            border-bottom: 1px solid #E8E8E8
            width: 100%
            height: 64px
            .info
                width: 100%;
                height: 24px
                box-sizing: border-box
                padding: 0 16px
                position: absolute
                left: 0
                bottom: 12px
                display: flex
                justify-content: space-between
                align-items: center
                .text
                    width: 25%
                    height: 24px
                    font-size: 18px
                    text-align: center
                    line-height: 24px
                    font-weight: 400
                .icon
                    width:6%
                    height: 24px
                    text-align: center
                    line-height: 24px
                    font-size: 18px
                    color: #1B1B1B
                    font-weight: 600
                .recode
                    width: 12%
                    height: 24px
                    font-size: 18px
                    text-align: center
                    line-height: 24px
                    font-weight: 400


        .view
            margin-top: 64px
        .like-wrapper
           .like-box
              .like-list
                 width: 100%
                 height: 60px
                 padding-left: 10px
                 box-sizing: border-box
                 display: flex
                 justify-content: space-between
                 align-items: center
                 .like-photo
                     width: 30px
                     height: 30px
                     border-radius :50%;
                     img
                         width: 30px
                         height: 30px
                         border-radius :50%;
                 .like-info
                     width: 90%
                     height: 100%
                     border-bottom:1px solid #E3E9F3;
                     .like-mid
                         width: 100%
                         height: 40px
                         padding-top: 10px
                         .like-nickname
                             display: block
                             width: 50%
                             height: 20px;
                             line-height: 20px
                             font-size: 14px
                             color: #00398A
                         .like-posi
                             display: block
                             width: 40%
                             height: 20px;
                             line-height: 20px
                             font-size: 14px
                             color: #858382

        .bottom
             box-sizing: border-box
             background:#fff
             width: 100%
             height: 50px
             z-index: 2000
             border-top:1px solid #E8E8E8;
             position: fixed
             left: 0
             bottom: -8px
             .mid-posi
                 display: flex
                 padding: 0
                 justify-content: space-between
                 align-items: center
                 .like
                     width: 50%
                     padding: 12px
                     box-sizing: border-box
                     .like-box
                         justify-content: space-between
                         align-items: center
                         box-sizing: border-box
                         border-right:1px solid #e9e9e9
                         text-align: center
                         .icon,.num
                             width: 45%
                             font-size: 14px
                 .comment
                     width: 50%
                     padding: 12px
                     box-sizing: border-box
                 .comment-box
                     width: 100%
                     justify-content: space-between
                     align-items: center
                     box-sizing: border-box
                     text-align: center
                 .icon,.num
                     width: 45%
                     font-size: 14px
</style>