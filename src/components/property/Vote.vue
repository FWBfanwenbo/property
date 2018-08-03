<template>
    <transition name="slide">
        <div class="vote">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
            <div class="vote-nav">
                <ul class="vote-box">
                    <router-link tag="li" to="/property/vote/voteProgress" class="vote-list">
                        <span class="vote-text">正在进行</span>
                    </router-link>
                    <router-link tag="li" to="/property/vote/voteEnd" class="vote-list">
                        <span class="vote-text">已经结束</span>
                    </router-link>
                    <router-link tag="li" to="/property/vote/votePart" class="vote-list">
                        <span class="vote-text">我参与过</span>
                    </router-link>
                </ul>
            </div>
            <div class="vote-view">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Vote",
        components:{
        },
        data(){
            return {
                appName:"大众选票",
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/property"})
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .vote
        position:fixed
        left: 0
        top: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index:1000
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
        .vote-nav
            width: 100%
            position: fixed
            left: 0
            top: 67px
            z-index: 2000
            background: #fff
            .vote-box
                width: 100%
                display: flex
                justify-content: space-around
                align-items: center
               .vote-list
                   width: 16%
                   height: 50px
                   text-align: center
                   .vote-text
                       display: block
                       height: 100%
                       box-sizing: border-box
                       line-height: 50px
                       font-size: 14px
                   &.router-link-active
                       border-bottom:1px solid red
                       .vote-text
                           color: red
        .vote-view
            margin-top: 118px
            padding: 12px 5%
            box-sizing: border-box
            background: #f5f5f5
</style>