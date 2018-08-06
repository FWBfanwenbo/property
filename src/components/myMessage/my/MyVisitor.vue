<template>
    <transition name="slide">
        <div class="visitor">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Visitor",
        data(){
            return {
                appName:"我的访客"
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/myMessage"})
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .visitor
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
</style>