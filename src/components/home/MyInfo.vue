<template>
    <transition name="slide">
        <div class="my-info">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
            <div class="vote-nav">
                <ul class="vote-box">
                    <router-link tag="li" to="/home/myInfo/notice" class="vote-list">
                        <span class="vote-text">通知</span>
                    </router-link>
                    <router-link tag="li" to="/home/myInfo/commentme" class="vote-list">
                        <span class="vote-text">评论我</span>
                    </router-link>
                    <router-link tag="li" to="/home/myInfo/praiseme" class="vote-list">
                        <span class="vote-text">赞我</span>
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
        name: "MyInfo",
        data(){
            return {
                appName:"我的资料",
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/home"})
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .my-info
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
        height: 100%
        box-sizing: border-box
        background: #f5f5f5
</style>