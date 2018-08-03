<template>
    <transition name="slide">
        <div class="vote-detail">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
            <div class="title-posi">
               <div class="tp" style="border-bottom: 1px solid #E3E9F3;">
                   <div class="titles">{{infoList.title}}</div>
                   <div class="posi">
                       <span class="pos">{{infoList.posi}}</span>
                       <div class="right">
                           <span class="time">{{infoList.time}}</span>
                           <span class="fabu">{{infoList.status}}</span>
                       </div>
                   </div>
               </div>
            </div>
            <div class="mian">
                <div class="img-box">
                    <img :src="img" alt="" width="100%" height="160">
                </div>
                <div class="article">
                    <p class="text">{{article}}</p>
                </div>
                <div class="vote-notice">
                    <span class="vote-title">感谢参与</span>
                    <p class="main-content">感谢参与,亲,本次选票每个账户只能头一次 为您喜欢的一方投上一票吧</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "VoteDetail",
        data(){
            return {
                appName:"大众选票详情",
                infoList:{
                    title:"谁的的旅行摄影制霸朋友圈.漳社区投票活动",
                    posi:"金昌物业",
                    time:"2017-09-07",
                    status:"发布"
                },
                img:require("img/article.png"),
                article:"《意见》还要求，优化退役军人创业环境，政府投资或社会共建的创业孵化基地和创业园区可设立退役军人专区，有条件的地区可专门建立退役军人创业孵化基地。退役军人创办中小企业，享受金融和税收优惠，鼓励社会资本设立退役军人创业基金，拓宽资金保障渠道。建立健全服务体系，加快建设全国贯通、实时共享、上下联动的退役军人就业创业服务信息平台，成立就业创业指导团队，引入社会力量支持退役军人就业创业。"
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/property/vote/votePart"})
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .vote-detail
        position:fixed
        left: 0
        top: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index:3000
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
            width: 100%
            height: 64px
            border-bottom:1px solid #E3E9F3;
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
                    color: #1B1B1B
                    font-weight: 600
        .title-posi
            margin-top: 64px
            height: 66px
            padding: 0 12px
            .titles
                width: 100%
                height: 35px
                font-size: 16px
                line-height: 35px
            .posi
                width: 100%
                height: 27px
                .pos
                    display: block
                    width: 40%
                    height: 100%
                    float: left
                    line-height: 16px
                    font-size: 12px
                    color: #000356
                .right
                    width: 28%
                    height: 100%
                    float: right
                    .time
                        float: left
                        font-size: 12px
                        color: #7F7F7F
                        line-height: 16px
                    .fabu
                        float: right
                        font-size: 12px
                        color: #7F7F7F
                        line-height: 16px
        .mian
            width: 100%
            padding: 12px
            box-sizing: border-box
            .img-box
                width: 100%
                height: 160px
            .article
                margin-top: 16px
                .text
                    font-size: 12px
                    line-height: 1.6

            .vote-notice
                margin-top: 34px
                width: 100%
                height: 90px
                border-left:2px dashed red;
                border-right:2px dashed red;
                border-top:1px dashed red
                border-bottom:1px dashed red;
                position: relative
                .vote-title
                    width: 180px
                    height: 35px
                    background: #FF4C60;
                    border-radius :20px;
                    font-size: 14px
                    color: #fff;
                    text-align: center
                    line-height: 35px
                    position: absolute
                    left: 50%
                    top: -18px
                    transform: translate(-50%,0)
                .main-content
                    width: 100%
                    width: 97%
                    padding: 35px 16px 0 16px
                    box-sizing: border-box
                    text-align: center
                    line-height: 1.5
                    font-size: 16px
</style>