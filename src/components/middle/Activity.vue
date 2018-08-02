<template>
    <transition name="slide">
        <div class="activity">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
            <ul class="header-nav">
                <router-link tag="li" to="/home/activity/progress" class="nav-list">
                    <span class="tab-text">正在进行</span>
                </router-link>
                <router-link tag="li" to="/home/activity/alreadyEnd" class="nav-list">
                    <span class="tab-text">已经结束</span>
                </router-link>
                <router-link tag="li" to="/home/activity/participateIn" class="nav-list">
                    <span class="tab-text">我参与过</span>
                </router-link>
            </ul>
            <AppSplit></AppSplit>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </transition>
</template>

<script>
    import AppSplit from "@/components/base/Split"
    export default {
        name: "Activity",
        components:{
            AppSplit
        },
        data(){
            return {
                appName:"精彩活动",
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
    .activity
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

        .header-nav
            width: 100%
            height: 64px
            margin-top: 64px
            display: flex
            justify-content: space-around
            align-items: center
            .nav-list
                width: 33%
                height: 100%
                padding: 12px
                text-align: center
                line-height: 64px;
                box-sizing: border-box
                .tab-text
                    font-size: 14px
                    padding-bottom: 10px
                &.router-link-active
                    .tab-text
                       color: #181A55
                       border-bottom:1px solid red
</style>