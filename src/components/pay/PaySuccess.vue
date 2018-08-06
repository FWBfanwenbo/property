<template>
    <transition name="slide">
        <div class="pay-success">
            <AppScroll class="scroll" ref="scroll" @scroll="scroll" :probeType="probeType" :listenScroll="listenScroll"
                       style="height:100%;overflow: hidden;">
                <div>
                    <div>
                        <div class="success-header">
                            <div class="app-header">
                                <div class="info">
                                    <span @click="hide" class="icon iconfont icon-2fanhui"></span>
                                    <span class="text">{{appName}}</span>
                                </div>
                            </div>
                            <div class="header-bottom">
                                <div class="left">
                                    <span class="success-status">支付成功</span>
                                    <span class="bottom-text">感谢您对我们的信赖,祝您生活愉快</span>
                                </div>
                                <div class="img-box">
                                    <img :src="successImg" alt="" width="75" height="80">
                                </div>
                            </div>
                        </div>
                        <div class="harvest">
                            <div class="mi" style="border-bottom: 1px solid #d9d8dd;">
                                <div class="box"><span class="pay">本次支付:</span><span class="pay-num">#{{sum}}</span></div>
                                <span class="gold">完成本次活动支付,获得100金币</span>
                            </div>
                        </div>
                        <div class="activity-content">
                            <span class="name">活动内容</span>
                            <span class="title">{{activity.title}}</span>
                            <p class="desc">{{activity.desc}}</p>
                            <div class="router-list">
                                <router-link tag="a" to="/home" class="list">返回首页</router-link>
                                <router-link tag="a" to="/home" class="list">查看获得</router-link>
                            </div>
                            <p class="notice">安全提醒:据印度媒体报道，印度西孟加拉邦进入季风雨季以来，气候较以往潮湿。</p>
                        </div>
                        <div class="main">
                            <span class="past-activity" ref="past">往期活动</span>
                            <div class="activity-wrapper">
                                <div  v-for="list in activityList">
                                    <Section :list="list"></Section>
                                    <AppSplit></AppSplit>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppScroll>
        </div>
    </transition>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    import Section from "@/components/base/Section"
    import AppScroll from "@/components/base/Scroll"
    import BS from "better-scroll"
    export default {
        name: "PaySuccess",
        props:["sum"],
        components:{
            Section,
            AppSplit,
            AppScroll
        },
        data(){
            return {
                appName:"支付成功",
                isShow:false,
                successImg:require("img/success.png"),
                activity:{
                    title:"爱的传递,有你添翼",
                    desc:"本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公"
                },
                activityList:[
                    {
                        photo:require("img/activity_01.png"),
                        nickname:"天山童姥",
                        position:"金昌诚园",
                        time:"05-30 15:04",
                        text:"爱的传递,有你添翼,本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公益,献出...",
                        imgList:[{
                            url:require("img/activity_01.png")
                        },
                            {
                                url:require("img/activity_02.png")
                            },
                            {
                                url:require("img/activity_03.png")
                            }],
                        status:"进行中"
                    },{
                        photo:require("img/activity_01.png"),
                        nickname:"天山童姥",
                        position:"金昌诚园",
                        time:"05-30 15:04",
                        text:"爱的传递,有你添翼,本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公益,献出...",
                        imgList:[{
                            url:require("img/activity_01.png")
                        },
                            {
                                url:require("img/activity_02.png")
                            },
                            {
                                url:require("img/activity_03.png")
                            }],
                        status:"已结束"
                    },{
                        photo:require("img/activity_01.png"),
                        nickname:"天山童姥",
                        position:"金昌诚园",
                        time:"05-30 15:04",
                        text:"爱的传递,有你添翼,本次活动的第一站有每户参赛家庭赠书并在扉页上写上一句寄语的方式参与公益,献出...",
                        imgList:[{
                            url:require("img/activity_01.png")
                        },
                            {
                                url:require("img/activity_02.png")
                            },
                            {
                                url:require("img/activity_03.png")
                            }],
                        status:"进行中"
                    }]
            }
        },
        created(){
            this.probeType=3;
            this.listenScroll=true
        },
        methods:{
            show(){
                this.isShow=true
            },
            hide(){
                this.$router.back()
            },
            scroll(pos){
                this.scrollY=pos.y;
            },
        },
        watch:{
            scrollY(val){
                console.log(val)
            }
        },
        mounted(){
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "~css/var.styl"
    .pay-success
        position:absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        z-index:8000
        background: #fff
        &.slide-enter-active,&.slide-leave-active
            transition: all 0.5s
        &.slide-enter, &.slide-leave-to
            transform: translate3d(100%, 0, 0)
        .success-header
            width: 100%
            height: 180px
            background:#fe4d5f;
            z-index: 9000
            position: relative
           .app-header
               position:absolute
               left: 0
               top: 0
               width: 100%
               height: 64px
               color: #fff
               .info
                   width: 100%;
                   height: 24px
                   box-sizing: border-box
                   padding: 0 16px
                   position: absolute
                   left: 0
                   bottom: 12px
                   .text
                       float: right
                       width: 90%
                       height: 24px
                       font-size: 18px
                       text-align: center
                       line-height: 24px
                       font-weight: 400
                   .icon
                       float: left
                       width: 24px
                       height: 24px
                       text-align: center
                       line-height: 24px
                       font-size: 18px
                       color: #fff
                       font-weight: 600
           .header-bottom
                width: 100%
                height: 80px
                padding: 12px
                box-sizing: border-box
                position: absolute
                left: 0
                bottom: 12px
                display: flex
                justify-content: space-between
                align-items: center
                .left
                    width: 70%
                    height: 50px
                    .success-status
                        padding-left: 20px
                        box-sizing: border-box
                        font-size: 18px
                        text-align: left
                        line-height: 30px
                        color: #fff
                    .bottom-text
                        display: block
                        padding-left: 20px
                        box-sizing: border-box
                        font-size: 14px
                        text-align: left
                        line-height: 20px
                        color: #fff
                .img-box
                    width: 75px
                    height: 100px
        .harvest
            width: 100%
            height: 80px
            padding: 12px
            box-sizing: border-box
            .box
                width: 100%
                height: 30px
                padding: 0 30%
                box-sizing: border-box
                text-align: center
                .pay
                    float: left
                    font-size: 15px
                    text-align: center
                    line-height: 30px
                .pay-num
                    font-size: 15px
                    float: right
                    display: block
                    line-height: 30px
                    color: #ec505e
                    font-weight: 700
            .gold
                display: block
                font-size: 14px
                width: 100%
                text-align: center
                padding-bottom: 20px
                color: #b0b0b0
        .activity-content
            width: 100%
            padding: 12px
            box-sizing: border-box
            .name
                font-size: 18px
                display: block
                font-weight: bold
                line-height: 30px
            .title
                font-size: 14px
                display: block
                color: #8a8a8a
                line-height: 25px
            .desc
                width: 100%
                color: #8a8a8a
                height: 30px
                no-wrap()
                line-height: 1.6
                font-size: 14px
                box-sizing: border-box
            .router-list
                width: 100%
                padding: 30px 12px
                box-sizing: border-box
                display: flex
                justify-content: space-between
                .list
                    padding: 12px 43px
                    display: block
                    font-size: 14px
                    color: #000
                    border-radius: 3px
                    border:1px solid #bbbbbb
            .notice
                font-size: 14px
                line-height: 1.6
                color: #838383


        .past-activity
            display: block
            height: 40px
            font-size: 16px
            width: 100%
            background: #f5f5f3
            text-align: center
            line-height: 40px
</style>