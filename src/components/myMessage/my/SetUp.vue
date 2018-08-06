<template>
    <transition name="slide">
        <div class="set-up">
            <div class="app-header">
                <div class="info">
                    <span @click="back" class="icon iconfont icon-2fanhui"></span>
                    <span class="text">{{appName}}</span>
                </div>
            </div>
            <div class="page-wrapper">
                <div class="column-box">
                    <div class="column-tr" v-for="tr in setList" @click="selectPath(tr)">
                        <div class="tr-left">
                            <span class="tr-icon">
                                <img :src="tr.trIcon" alt="" width="21">
                            </span>
                            <span class="tr-text">{{tr.myType}}</span>
                        </div>
                        <span class="tr-right iconfont icon-qianjin"></span>
                    </div>
                </div>
            </div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "SetUp",
        data(){
            return {
                appName:"我的设置",
                setList:[
                    {
                        trIcon:require("img/village.png"),
                        myType:"我的资料",
                        toPath:"myData"
                    }],
            }
        },
        methods:{
            back(){
                this.$router.push({path:"/myMessage"})
            },
            selectPath(tr){
                this.$router.push({
                    path:`/myMessage/setUp/${tr.toPath}`
                })
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .set-up
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
        .page-wrapper
            width: 100%
            height: 600px
            margin-top: 64px
            background: #F3F4F8
            .column-box
                padding: 15px 15px 0 15px
                width: 100%
                box-sizing: border-box
                .column-tr
                    width: 100%
                    height: 50px
                    background: #fff
                    padding: 0 12px
                    box-sizing: border-box
                    border-bottom:1px solid #F2F2F2
                    border-top-left-radius:10px;
                    border-bottom-left-radius:10px;
                    &:hover
                        background: #eee
                    &:first-child
                        border-top-right-radius:10px;
                    &:last-child
                        border-bottom-right-radius:10px;
                        box-shadow :1px 1px 1px 3px rgba(0,0,0,0.02);
                    .tr-left
                        width: 26%
                        height: 100%
                        float: left
                        display: flex
                        justify-content: space-between
                        align-items: center
                        .tr-icon
                            width: 21px
                            height: 21px
                        .tr-text
                            font-size: 14px
                    .tr-right
                        float: right
                        font-size: 16px
                        line-height: 50px
                        color: #ADAFAE
</style>